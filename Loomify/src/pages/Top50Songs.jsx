import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const AlbumCard = ({ image, title, artist }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-200p h-190p rounded-lg object-cover shadow-lg"
      />
      <span className="text-white text-sm font-medium mt-2">{title}</span>
      <span className="text-gray-400 text-xs">{artist}</span>
    </div>
  );
};

export default function AlbumsGrid() {
  const [sortOption, setSortOption] = useState("default");

  const albums = [
    { title: "All Time Top 50", artist: "Multiple Artists", img: "/Top50_1.png" },
    { title: "Nonstop Garba", artist: "Geeta Rabari", img: "/Top50_2.png" },
    { title: "Punjab di Kudi", artist: "Sheehnaz Gill", img: "/Top50_3.png" },
    { title: "Best of Nirvana", artist: "Nirvana", img: "/Top50_5.png" },
    { title: "Maro Desh", artist: "Bhaisa Malpani", img: "/Top50_4.png" },
    { title: "Punjab di Kudi", artist: "Sheehnaz Gill", img: "/Top50_3.png" },
    { title: "Best of Nirvana", artist: "Nirvana", img: "/Top50_5.png" },
    { title: "Maro Desh", artist: "Bhaisa Malpani", img: "/Top50_4.png" },
    { title: "Nonstop Garba", artist: "Geeta Rabari", img: "/Top50_2.png" },
    { title: "All Time Top 50", artist: "Multiple Artists", img: "/Top50_1.png" },
    { title: "All Time Top 50", artist: "Multiple Artists", img: "/Top50_1.png" },
    { title: "Nonstop Garba", artist: "Geeta Rabari", img: "/Top50_2.png" },
    { title: "Punjab di Kudi", artist: "Sheehnaz Gill", img: "/Top50_3.png" },
    { title: "Best of Nirvana", artist: "Nirvana", img: "/Top50_5.png" },
    { title: "Maro Desh", artist: "Bhaisa Malpani", img: "/Top50_4.png" },
  ];

  const sortOptions = ["A-Z", "Z-A", "Default"];

  const sortedAlbums = [...albums].sort((a, b) => {
    if (sortOption === "A-Z") return a.title.localeCompare(b.title);
    if (sortOption === "Z-A") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="flex flex-col p-6 bg-black -mb-8 -mt-4 no-scrollbar">
      {/* Header Section */}
      <div className="sm:flex justify-between items-center mb-10">
        <h2 className="text-white text-3xl font-bold mb-10">Top 50 Songs</h2>
        <div className="relative">
          <div className="flex items-center gap-2 bg-[#1E1E1E] text-white rounded-full px-6 py-4 cursor-pointer">
            <FaFilter size={14} />
            <select
              className="bg-[#1E1E1E] text-white border-none outline-none cursor-pointer"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Albums Grid */}
      <div className="grid grid-cols-1 sm:grid-cols- md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 justify-items-center w-full">
        {sortedAlbums.map((album, index) => (
          <AlbumCard key={index} image={album.img} title={album.title} artist={album.artist} />
        ))}
      </div>
    </div>
  );
}
