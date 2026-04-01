import { Search, Mic } from "lucide-react";
import Primary_Button from "../../assets/Primary_Button.png";
import Profile_Button from "../../assets/Profile_Button.png";
import logo from "../../assets/logo.png";
import jam_menu from "../../assets/jam_menu.png";

export const Navbar = () => (
  <nav className="fixed top-0 z-50 flex items-center justify-between w-full bg-black p-4 shadow-md">
    {/* Left Section with Menu and Logo */}
    <div className="flex items-center gap-6">
      <img src={jam_menu} alt="Menu" className="w-5 h-5 cursor-pointer" />
      <img src={logo} alt="Loomify Logo" className="h-6" />
    </div>

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

    {/* Right Section with Buttons */}
    <div className="flex items-center gap-1">
      <img src={Primary_Button} alt="Add Album" className="w-10 h-10 rounded-full" />
      <img src={Profile_Button} alt="Profile" className="w-10 h-10 rounded-full" />
    </div>
  </nav>
);