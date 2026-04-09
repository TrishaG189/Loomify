import { Outlet } from "react-router-dom";
import { Navbar } from "../components/core/Navbar";
import { Sidebar } from "../components/core/Sidebar";
import { Footer } from "../components/core/Footer";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col min-w-[400px]">
      <Navbar className="sticky top-0 w-full z-50" />

      <div className="flex flex-1 min-w-[250px]">
        {/* Sidebar*/}
        <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black overflow-y-auto z-40">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 pl-64 min-w-0 overflow-auto scrollbar-hide">
          <main className="p-6"> 
            <Outlet />
          </main>
        </div>
      </div>

      <div className="flex justify-center">
        <Footer className="w-[80%]" />
      </div>
    </div>
  );
};