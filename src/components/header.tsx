"use client";
import { Menu, LayoutGrid } from "lucide-react";

interface HeaderProps {
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-black backdrop-blur-sm text-white">
      <div className=" rounded-2xl max-w-8xl mx-auto px-4 sm:px-6 lg:px-3 py-4"> 
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hover:bg-gray-800 transition-colors rounded-2xl"
          >
            <Menu className="w-18 h-9 " />
          </button>
          <div className="flex items-center justify-center"> 
          <LayoutGrid className="text-red-500" size={28} />
          <h2 className="text-3xl font-bold pxr-6 mx-1 text-red-500">GravityGears</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
