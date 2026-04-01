import React, { useState } from "react";
import { PlusCircle, RefreshCcw } from "lucide-react";

const AddAlbum = () => {
  const tabs = [
    { key: "basicdetails", label: "Basic Details" },
    { key: "lyrics", label: "Lyrics" },
    { key: "feedback", label: "Feedback" },
  ];

  const [activeTab, setActiveTab] = useState("basicdetails");

  const getHeading = () => {
    switch (activeTab) {
      case "lyrics":
        return "Add Lyrics";
      case "feedback":
        return "Add Feedback";
      default:
        return "Add Album";
    }
  };

  return (
    <div className="flex w-full bg-black min-h-screen text-white">
      <div className="flex-grow p-8">
        <div className="flex items-center">
          <PlusCircle className="mb-4 mr-4" size={24} color="grey" />
          <h1 className="text-4xl font-bold mb-6">{getHeading()}</h1>
        </div>

        {activeTab !== "feedback" && (
          <div className="flex mb-6 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ${
                  activeTab === tab.key
                    ? "text-white border-b-2 border-purple-500"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {activeTab === "basicdetails" && <BasicDetails />} 
        {activeTab === "lyrics" && <Lyrics />} 
        {activeTab === "feedback" && <Feedback />} 
      </div>
    </div>
  );
};

const BasicDetails = () => {
  const [albumName, setAlbumName] = useState("");
  const [songs, setSongs] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const addSong = () => setShowPopup(true);

  const handleAddSong = (songData) => {
    setSongs([...songs, songData]);
    setShowPopup(false);
  };

  return (
    <div className="bg-black p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-8">Basic Details</h2>

      {/* Cover Image Upload */}
      <div className="flex mb-6">
        <div className="w-32 h-32 bg-[#161616] rounded-lg flex items-center justify-center overflow-hidden cursor-pointer relative">
          {coverImage ? (
            <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
              <PlusCircle size={32} color="grey" />
              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>
          )}
        </div>
        <div className="ml-10 mt-5">
          <label className="block text-md font-medium mb-2">
            Cover Image <span className="text-red-500">*</span>
          </label>
          <p className="text-gray-400">Photo size should be max 3 MB</p>
        </div>
      </div>

      {/* Album Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Album Name</label>
        <input
          type="text"
          placeholder="e.g. Stree 2"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          className="w-1/2 border-b border-[#595959] p-2 rounded bg-black text-white mb-4"
        />
      </div>

      {/* Songs List */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Songs List</label>
        {songs.length === 0 ? (
          <p className="text-gray-400 my-4">No Song Added</p>
        ) : (
          <ul>
            {songs.map((song, index) => (
              <li key={index} className="flex justify-between items-center py-2">
                <div>
                  <p className="text-white font-semibold">{song.song}</p>
                  <p className="text-gray-400">{song.artist}</p>
                </div>
                <MoreVertical size={20} color="gray" />
              </li>
            ))}
          </ul>
        )}
        <button onClick={addSong} className="text-purple-500 mt-2 flex items-center gap-2">
          <PlusCircle size={15} />
          <span>Add Song</span>
        </button>
      </div>

      {/* Artist List */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Artist</label>
        {songs.length === 0 ? (
          <p className="text-gray-400 my-4">No artist Added</p>
        ) : (
          <ul>
            {songs.map((song, index) => (
              <li key={index} className="text-gray-300">{song.artist}</li>
            ))}
          </ul>
        )}
        <button className="text-purple-500 mt-2 flex items-center gap-2">
          <PlusCircle size={15} />
          <span>Add Artist</span>
        </button>
      </div>

      {/* Genre List */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Genre</label>
        {songs.length === 0 ? (
          <p className="text-gray-400 my-4">No Genre Added</p>
        ) : (
          <ul>
            {songs.map((song, index) => (
              <li key={index} className="text-gray-300">{song.genre}</li>
            ))}
          </ul>
        )}
        <button className="text-purple-500 mt-2 flex items-center gap-2">
          <PlusCircle size={15} />
          <span>Add Genre</span>
        </button>
      </div>

      {/* Language Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Original</label>
        <select className="w-1/2 p-2 bg-[#2A2A2A] text-white rounded">
          <option value="">Select Language</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Punjabi">Punjabi</option>
        </select>
        <div className="mt-2">
          <label className="inline-flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Also Add the same language in English
          </label>
        </div>
      </div>

      {/* Year Picker */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Year</label>
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          placeholder="Select Release Year"
          className="w-1/2 p-2 bg-[#2A2A2A] text-white rounded"
        />
      </div>

      {/* Save Button */}
      <button className="bg-purple-500 text-white px-6 py-2 rounded">Save Changes</button>

      {showPopup && <AddSongPopup onAddSong={handleAddSong} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

const AddSongPopup = ({ onAddSong, onClose }) => {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [genre, setGenre] = useState("Sad");

  const handleSubmit = () => {
    if (songName && artistName && genre) {
      onAddSong({ song: songName, artist: artistName, genre });
    }
  };

  return (
    <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#121212] p-8 rounded-lg w-96">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Add Song</h2>
          <button
            onClick={onClose}
            className="text-[#595959] rounded-full w-6 h-6 flex items-center justify-center text-sm"
          >
            ×
          </button>
        </div>

        <input
          className="w-full p-2 mb-4 bg-[#2A2A2A] text-white"
          placeholder="Song Name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 bg-[#2A2A2A] text-white"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <select
          className="w-full p-2 mb-4 bg-[#2A2A2A] text-white"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="Sad">Sad</option>
          <option value="Happy">Happy</option>
          <option value="Romance">Romance</option>
          <option value="Friendship">Friendship</option>
          <option value="Breakup">Breakup</option>
        </select>
        <button onClick={handleSubmit} className="bg-purple-500 w-full py-2 rounded">
          Add Song
        </button>
      </div>
    </div>
  );
};

const Lyrics = () => {
  const [selectedSong, setSelectedSong] = useState("Jhoothi khayi thi kasam");
  const songOptions = [
    "Jhoothi khayi thi kasam",
    "Kaise Hua",
    "Bekhayali",
    "Mere Sohneya"
  ];

  return (
    <div className=" p-8 rounded-lg text-white">
      <div className="flex items-center justify-between mb-6">
        <select
          value={selectedSong}
          onChange={(e) => setSelectedSong(e.target.value)}
          className="text-white p-2 rounded text-2xl"
        >
          {songOptions.map((song, idx) => (
            <option key={idx} value={song}>{song}</option>
          ))}
        </select>

        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-full bg-[#2A2A2A] text-white ">
            + Add Transliteration
          </button>
          <button className="px-4 py-2 rounded-full bg-[#2A2A2A] text-white ">
            + Add Translation
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-gray-400 block">Original Audio</span>
        <button className="flex items-center text-purple-400 hover:text-purple-300">
          <RefreshCcw className="mr-2" size={16} /> Convert to original
        </button>
      </div>

      <div className="bg-black w-1/2 align-center p-6 rounded-lg whitespace-pre-wrap">
        Jhoothi khaayi thi kasam jo
        Nibhaayi nai x(3) |

        Kaati raat maine khetom mein
        Tu aayi nahi x(2)

        Le ke aaya bhi main ghar se
        Rajaayi nayi x(2)

        Nahin aayi aayi aayi
        Tu toh aayi nahi x(2)

        Ho kaati raat maine khetom mein
        Tu aayi nahi
      </div>

      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 rounded-full bg-[#2A2A2A] text-white border border-gray-600">Clear All</button>
        <button className="px-4 py-2 rounded-full bg-purple-600 text-white">Save Changes</button>
      </div>
    </div>
  );
};

const Feedback = () => {
  const [activeSubTab, setActiveSubTab] = useState("all");

  const allFeedbackData = [
    { song: "Bekhayali", feedback: "There is the error in the particular line know you need to solve in the…", status: "Active" },
    { song: "Kaise Hua", feedback: "Did not like the translation", status: "Active" },
    { song: "Tuje Kitna Chahne", feedback: "Clear words", status: "Completed" },
    { song: "Mere Sohneya", feedback: "Missing content", status: "Completed" },
  ];

  const filteredData = allFeedbackData.filter(item => {
    if (activeSubTab === "ongoing") return item.status === "Active";
    if (activeSubTab === "reviewed") return item.status === "Completed";
    return true;
  });

  const subtabs = [
    { key: "all", label: "All" },
    { key: "ongoing", label: "Ongoing" },
    { key: "reviewed", label: "Reviewed" }
  ];

  return (
    <div className="p-8 rounded-lg">
      <div className="mb-4 flex gap-6 border-b border-gray-700">
        {subtabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveSubTab(tab.key)}
            className={`pb-2 text-lg font-medium transition-colors duration-300 ${
              activeSubTab === tab.key ? "text-white border-b-2 border-purple-500" : "text-gray-500 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6 capitalize">{activeSubTab}</h2>
      <div className="overflow-x-auto">
        <table className="rounded-4xl w-full table-auto text-left">
          <thead>
            <tr className="text-gray-400 text-sm bg-[#1E1E1E] transition duration-200 border-b border-[#1F1F1F]">
              <th className="py-3 px-4">Song</th>
              <th className="py-3 px-4">Feedback</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className="bg-[#1E1E1E] rounded-2xl text-white hover:bg-[#3A3A3A] transition duration-200 border-b border-[#1F1F1F]"
              >
                <td className="py-4 px-4 font-semibold whitespace-nowrap">{item.song}</td>
                <td className="py-4 px-4 text-gray-300 truncate max-w-xs">{item.feedback}</td>
                <td className="py-4 px-4">
                  <span
                    className={`text-sm px-2 py-1 rounded-full font-medium inline-flex items-center gap-1 ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    ● {item.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-purple-400 cursor-pointer hover:underline">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddAlbum;
