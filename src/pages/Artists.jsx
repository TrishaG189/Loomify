import React from "react";
import { FaFilter } from "react-icons/fa";

const ArtistCard = ({ image, name }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full object-cover shadow-lg"
      />
      <span className="text-white text-sm font-medium mt-2">{name}</span>
    </div>
  );
};

export default function ArtistsGrid() {
  const artists = [
    { name: "Neha Kakkar", img: "/Artist1.png" },
    { name: "Badshah", img: "/Artist2.png" },
    { name: "Pritam", img: "/Artist3.png" },
    { name: "Arijit Singh", img: "/Artist4.png" },
    { name: "Yo Yo Honey Singh", img: "/Artist5.png" },
    { name: "Pritam", img: "/Artist3.png" },
    { name: "Arijit Singh", img: "/Artist4.png" },
    { name: "Yo Yo Honey Singh", img: "/Artist5.png" },
    { name: "Badshah", img: "/Artist2.png" },
    { name: "Neha Kakkar", img: "/Artist1.png" },
  ];

  return (
    <div className="flex flex-col p-6 bg-black -mb-8 -mt-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-white text-3xl font-bold">Artists</h2>
        {/* Sort By Button */}
        <div className="flex items-center gap-2 bg-[#1E1E1E] text-white rounded-full px-4 py-4 cursor-pointer">
          <FaFilter size={14} />
          <span className="text-sm font-medium">Sort by</span>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 justify-items-center w-full">
        {artists.map((artist, index) => (
          <ArtistCard key={index} image={artist.img} name={artist.name} />
        ))}
      </div>
    </div>
  );
}
