import { Outlet } from "react-router-dom";
import { Navbar } from "../components/core/Navbar";
import { Sidebar } from "../components/core/Sidebar";
import { Footer } from "../components/core/Footer";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col min-w-[400px]">
      {/* Navbar */}
      <Navbar className="sticky top-0 w-full z-50" />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-56 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black overflow-y-auto z-40">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="mt-20 flex-1 ml-52 overflow-auto scrollbar-hide">
          <main className="p-6 w-full"> 
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-center">
        <Footer className="w-full" />
      </div>
    </div>
  );
};
