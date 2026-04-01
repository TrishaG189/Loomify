import { Link } from "react-router-dom";
import { Home, Globe, Album, Users, Layers, ListMusic, Star, History, PlusCircle } from "lucide-react";

export const Sidebar = () => (
  <aside className="w-60 h-screen bg-black text-gray-300 px-5 py-6 fixed left-0 top-[80px] flex flex-col">
    {/* Add Album Button - Updated to use Link */}
    <Link
      to="/add-album"
      className="pl-6 full flex items-center justify-start gap-3 text-white py-3 px-1 rounded-full mb-4 text-md"
      style={{ background: 'linear-gradient(to right, #DB2795, #9834A7, #5541BA)' }}
    >
      <PlusCircle size={18} />
      Add Album
    </Link>

    {/* Explore Section */}
    <div className="mb-6">
      <h2 className="ml-3 text-gray-500 text-xs font-semibold mb-3">Explore</h2>
      <nav className="space-y-1">
        <SidebarItem to="/" label="Home" icon={Home} />
        <SidebarItem to="/languages" label="Languages" icon={Globe} />
        <SidebarItem to="/albums" label="Albums" icon={Album} />
        <SidebarItem to="/artists" label="Artist" icon={Users} />
        <SidebarItem to="/genre" label="Genre" icon={Layers} />
      </nav>
    </div>

    {/* Playlist Section */}
    <div>
      <h2 className="ml-3 text-gray-500 text-xs font-semibold mb-3">Playlist</h2>
      <nav className="space-y-1">
        <SidebarItem to="/top50" label="Top 50 Songs" icon={ListMusic} />
        <SidebarItem to="/best2024" label="Best of 2024" icon={Star} />
        <SidebarItem to="/best90s" label="Best of 90’s" icon={History} />
      </nav>
    </div>
  </aside>
);

const SidebarItem = ({ to, label, icon: Icon }) => (
  <Link
    to={to}
    className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition text-sm hover:bg-gray-800 focus-visible:outline-none"
  >
    <Icon size={18} className="text-gray-400" />
    <span className="text-xs">{label}</span>
  </Link>
);
