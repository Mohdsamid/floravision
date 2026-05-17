// src/components/Navbar.jsx
import { Search, ShoppingBag, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-10 py-6 flex items-center justify-between text-white">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        Flora<span className="text-green-400">Vision.</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
        <li className="hover:text-green-300 cursor-pointer">Home</li>
        <li className="hover:text-green-300 cursor-pointer">Plants Type</li>
        <li className="hover:text-green-300 cursor-pointer">More</li>
        <li className="hover:text-green-300 cursor-pointer">Contact</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <Search size={20} className="cursor-pointer" />
        <ShoppingBag size={20} className="cursor-pointer" />
        <Menu size={22} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;