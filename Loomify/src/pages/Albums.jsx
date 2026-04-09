import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

const AlbumCard = ({ image, title, artist, link }) => {
  return (
    <Link to={link} className="cursor-pointer flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-52p h-52p rounded-lg object-cover shadow-lg"
      />
      <span className="text-white text-sm font-medium mt-2p">{title}</span>
      <span className="text-gray-400 text-xs">{artist}</span>
    </Link>
  );
};

export default function Albums() {
  const [sortOption, setSortOption] = useState("default");

  
const albums = [
  { title: "Kabir Singh", artist: "6 songs", img: "/Top50_6.png", link: "/albums/kabir-singh" },
  { title: "Nonstop Garba", artist: "Geeta Rabari", img: "/Top50_2.png", link: "/album/nonstop-garba" },
  { title: "Punjab di Kudi", artist: "Sheehnaz Gill", img: "/Top50_3.png", link: "/album/punjab-di-kudi" },
  { title: "Best of Nirvana", artist: "Nirvana", img: "/Top50_5.png", link: "/album/best-of-nirvana" },
  { title: "Maro Desh", artist: "Bhaisa Malpani", img: "/Top50_4.png", link: "/album/maro-desh" },
  { title: "Punjab di Kudi", artist: "Sheehnaz Gill", img: "/Top50_3.png", link: "/album/punjab-di-kudi-2" },
  { title: "Best of Nirvana", artist: "Nirvana", img: "/Top50_5.png", link: "/album/best-of-nirvana-2" },
  { title: "Maro Desh", artist: "Bhaisa Malpani", img: "/Top50_4.png", link: "/album/maro-desh-2" },
  { title: "Nonstop Garba", artist: "Geeta Rabari", img: "/Top50_2.png", link: "/album/nonstop-garba-2" },
  { title: "All Time Top 50", artist: "Multiple Artists", img: "/Top50_1.png", link: "/album/all-time-top-50" },
];

  const sortOptions = ["A-Z", "Z-A", "Artist A-Z", "Artist Z-A", "Default"];

  const sortedAlbums = [...albums].sort((a, b) => {
    if (sortOption === "A-Z") return a.title.localeCompare(b.title);
    if (sortOption === "Z-A") return b.title.localeCompare(a.title);
    if (sortOption === "Artist A-Z") return a.artist.localeCompare(b.artist);
    if (sortOption === "Artist Z-A") return b.artist.localeCompare(a.artist);
    return 0;
  });

  return (
    <div className="sm:flex flex-col p-6 bg-black min-h-screen">
      <div className="block md:flex justify-between items-center mb-6">
        <h2 className="text-white text-3xl font-bold mb-10">Albums</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 justify-items-center w-full">
        {sortedAlbums.map((album, index) => (
          <AlbumCard
            key={index}
            image={album.img}
            title={album.title}
            artist={album.artist}
            link={album.link}
          />
        ))}
      </div>
    </div>
  );
}


