import React, { useState } from "react";
import { FaFilter } from "react-icons/fa"; 

const LanguageCard = ({ language, text, gradient }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <div
        className="w-[32vw] h-[32vw] md:w-[36vw] md:h-[36vw] lg:w-[40vw] lg:h-[40vw] max-w-40 max-h-40 flex items-center justify-center rounded-full shadow-lg text-white text-xl md:text-2xl font-bold"
        style={{
          background: `linear-gradient(180deg, ${gradient[0]} 0%, ${gradient[1]} 49%, ${gradient[2]} 100%)`,
        }}
      >
        <span className="drop-shadow-md">{text}</span>
      </div>
      <span className="text-white text-base md:text-lg font-medium mt-3">{language}</span>
    </div>
  );
};

export default function LanguagesGrid() {
  const [sortOption, setSortOption] = useState("Default");

  const languages = [
    { name: "Hindi", text: "नमस्ते", gradient: ["#2E917D", "#1E5F52", "#0E2B25"] },
    { name: "Gujarati", text: "હેલો", gradient: ["#FF6316", "#cc4f12", "#993B0D"] },
    { name: "Kannada", text: "ನಮಸ್ಕಾರ", gradient: ["#0521B3", "#041880", "#020E4D"] },
    { name: "Bhojpuri", text: "प्रणाम", gradient: ["#FFC701", "#CC9F01", "#997701"] },
    { name: "Marathi", text: "नमस्कार", gradient: ["#CA0030", "#9B0025", "#640018"] },
    { name: "Tamil", text: "வணக்கம்", gradient: ["#DB2795", "#A81E72", "#751550"] },
    { name: "Telugu", text: "నమస్కారం", gradient: ["#0521B3", "#041880", "#020E4D"] },
    { name: "English", text: "Hello", gradient: ["#CA0030", "#9B0025", "#640018"] },
    { name: "Malayalam", text: "ഹലോ", gradient: ["#DB2795", "#A81E72", "#751550"] },
    { name: "Urdu", text: "ہیلو", gradient: ["#FF6316", "#cc4f12", "#993B0D"] },
    { name: "Arabic", text: "مرحبا", gradient: ["#2E917D", "#1E5F52", "#0E2B25"] },
  ];

  const sortOptions = ["A-Z", "Z-A", "Default"];

  const sortedLanguages = [...languages].sort((a, b) => {
    if (sortOption === "A-Z") return a.name.localeCompare(b.name);
    if (sortOption === "Z-A") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="flex flex-col p-6 bg-black -mb-8 -mt-4">
      <div className="block md:flex justify-between items-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-5">Languages</h2>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-8 justify-items-center w-full">
        {sortedLanguages.map((lang, index) => (
          <LanguageCard key={index} language={lang.name} text={lang.text} gradient={lang.gradient} />
        ))}
      </div>

      <div className="flex-grow" />
    </div>
  );
}