import { Search, Mic } from "lucide-react"; 

export const Navbar = () => (
  <nav className="sticky top-0 z-50 flex items-center justify-center bg-black p-4 shadow-md ml-60">
    {/* Centered Search Bar */}
    <div className="relative flex items-center w-full max-w-md">
      <div className="flex items-center bg-[#232323] rounded-full px-3 py-1 w-full">
        <Search className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search Playlists, Artists, Albums, tags, etc"
          className="w-full bg-transparent text-gray-300 px-2 py-1 focus:outline-none text-sm"
        />
      </div>
      <button className="ml-2 p-2.5 bg-[#232323] rounded-full hover:bg-gray-700 transition">
        <Mic className="text-gray-400 w-4 h-4" />
      </button>
    </div>
  </nav>
);
