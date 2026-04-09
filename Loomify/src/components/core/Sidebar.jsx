import { Link, useLocation } from "react-router-dom";
import { Home, Globe, Album, Users, Layers, ListMusic, Star, History } from "lucide-react";
import logo from "../../assets/logo.png";
import jam_menu from "../../assets/jam_menu.png";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-60 h-screen bg-black text-gray-300 px-5 py-6 fixed left-0 top-0 flex flex-col">
      
      {/* Jam Menu & Logo Together */}
      <div className="flex items-center gap-6 mb-6">
        <img src={jam_menu} alt="Menu" className="w-5 h-5 cursor-pointer" />
        <img src={logo} alt="Loomify Logo" className="h-6" />
      </div>

      {/* Explore Section */}
      <div className="mb-6">
        <h2 className="text-gray-500 text-xs font-semibold mb-3">Explore</h2>
        <nav className="space-y-1">
          <SidebarItem to="/" label="Home" icon={Home} active={location.pathname === "/"} />
          <SidebarItem to="/languages" label="Languages" icon={Globe} active={location.pathname === "/languages"} />
          <SidebarItem to="/albums" label="Albums" icon={Album} active={location.pathname === "/albums"} />
          <SidebarItem to="/artists" label="Artist" icon={Users} active={location.pathname === "/artists"} />
          <SidebarItem to="/genre" label="Genre" icon={Layers} active={location.pathname === "/genre"} />
        </nav>
      </div>

      {/* Playlist Section */}
      <div>
        <h2 className="text-gray-500 text-xs font-semibold mb-3">Playlist</h2>
        <nav className="space-y-1">
          <SidebarItem to="/top50" label="Top 50 Songs" icon={ListMusic} active={location.pathname === "/top50"} />
          <SidebarItem to="/best2024" label="Best of 2024" icon={Star} active={location.pathname === "/best2024"} />
          <SidebarItem to="/best90s" label="Best of 90’s" icon={History} active={location.pathname === "/best90s"} />
        </nav>
      </div>
    </aside>
  );
};

const SidebarItem = ({ to, label, icon: Icon, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition text-sm 
      ${active ? "bg-gray-700 text-white" : "hover:bg-gray-800"} focus-visible:outline-none`}
  >
    <Icon size={18} className="text-gray-400" />
    <span className="text-xs">{label}</span>
  </Link>
);
