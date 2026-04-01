import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaFilter, FaSearch } from "react-icons/fa";

const albumsData = {
  "kabir-singh": {
    title: "Kabir Singh",
    artist: "Various Artists",
    image: "/Top50_6.png",
    songs: [
      { id: 1, name: "Bekhayali", artist: "Sachet Tandon" },
      { id: 2, name: "Kaise Hua", artist: "Vishal Mishra" },
      { id: 3, name: "Tujhe Kitna Chahne", artist: "Arijit Singh" },
      { id: 4, name: "Mere Sohneya", artist: "Sachet Tandon, Parampara Tandon" },
      { id: 5, name: "Tera Ban Jaunga", artist: "Akhil Sachdeva, Tulsi Kumar" },
      { id: 6, name: "Pehla Pyaar", artist: "Vishal Mishra, Armaan Malik" },
    ],
  },
};

const topArtists = [
  { name: "Arijit Singh", img: "/artist1.jpg" },
  { name: "Vishal Mishra", img: "/artist2.jpg" },
];

const topSongs = [
  { title: "Bekhayali", artist: "Sachet Tandon", img: "/Top50_6.png" },
  { title: "Kaise Hua", artist: "Vishal Mishra", img: "/Top50_6.png" },
];

const AlbumPage = () => {
  const { albumId } = useParams();
  const album = albumsData[albumId];
  const [searchTerm, setSearchTerm] = useState("");

  if (!album) {
    return <div className="text-white text-center mt-10">Album not found</div>;
  }

  const filteredSongs = album.songs.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {/* Album Banner */}
      <div
        className="rounded-lg p-6 mb-6 flex items-center gap-6"
        style={{
          background: "linear-gradient(to right, #C32123, #90181A, #5D1011)",
        }}
      >
        <img
          src={album.image}
          alt={album.title}
          className="w-44 h-44 rounded-lg shadow-lg"
        />
        <div>
          <p className="text-gray-300">Album</p>
          <h1 className="text-4xl font-bold">{album.title}</h1>
          <p className="text-gray-200">
            {album.songs.length} songs • By {album.artist}
          </p>
        </div>
      </div>

   {/* Playlist Table */}
{/* Playlist Table */}
<div className="bg-[#181818] p-4 rounded-lg">
  <table className="w-full text-left table-fixed">
    <thead>
      <tr className="border-b border-gray-700 text-gray-400 font-normal">
        <th className="py-2 font-normal w-1/2">Song</th>
        <th className="py-2 font-normal w-1/2">Artist</th>
      </tr>
    </thead>
    <tbody>
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <tr
            key={song.id}
            className="border-b border-gray-800 hover:bg-[#222] transition-colors"
          >
            <td className="py-3 pr-4 text-white">{song.name}</td>
            <td className="py-3 text-gray-400">{song.artist}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="2" className="text-center py-4 text-gray-500">
            No songs found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>



      {/* Top Artists */}
      <div className="mt-16">
        <h2 className="text-lg font-semibold mb-4">Top Artists</h2>
        <div className="flex gap-6 overflow-x-auto">
          {topArtists.map((artist, index) => (
            <div key={index} className="w-40 text-center">
              <img
                src={artist.img}
                alt={artist.name}
                className="w-40 h-40 rounded-full object-cover"
              />
              <p className="text-white mt-2">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Songs */}
      <div className="mt-16">
        <h2 className="text-lg font-semibold mb-4">Top Songs</h2>
        <div className="flex gap-6 overflow-x-auto">
          {topSongs.map((song, index) => (
            <div key={index} className="min-w-[200px] text-left">
              <img
                src={song.img}
                alt={song.title}
                className="w-48 h-48 rounded-lg object-cover"
              />
              <p className="text-white mt-2 font-medium">{song.title}</p>
              <p className="text-gray-400 text-sm">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
