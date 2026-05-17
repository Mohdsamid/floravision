import { useState } from 'react'
import './App.css'
import { House, Search, ShoppingBag, Menu, Play, Database, Code, Coffee, Upload, Download, Sparkles} from "lucide-react";
// import Home from "./pages/Home.jsx";
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-green-950/50"></div>

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-50 flex items-center justify-between px-10 py-6 text-white">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Flora<span className="text-green-400">Vision.</span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          <li className="cursor-pointer hover:text-green-300 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-green-300 transition">
            Plants Type
          </li>

          <li className="cursor-pointer hover:text-green-300 transition">
            More
          </li>

          <li className="cursor-pointer hover:text-green-300 transition">
            Contact
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search
            size={20}
            className="cursor-pointer hover:text-green-300"
          />

          <ShoppingBag
            size={20}
            className="cursor-pointer hover:text-green-300"
          />

          <Menu
            size={22}
            className="cursor-pointer hover:text-green-300"
          />
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 px-10 pt-20 text-white">
        {/* Left Content */}
        <div className="max-w-2xl mt-16">
          <h1 className="text-7xl md:text-8xl font-bold leading-tight">
            Earth’s Exhale
          </h1>

          <p className="mt-5 text-gray-300 max-w-xl leading-relaxed">
            “Earth Exhale” symbolizes the purity and vitality of the
            Earth’s natural environment and its essential role in
            sustaining life.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-10">
            <button className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition duration-300">
              Buy Now
            </button>

            <button className="flex items-center gap-3 hover:text-green-300 transition">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <Play size={18} fill="white" />
              </div>

              <span>Live Demo</span>
            </button>
          </div>
        </div>

        {/* ================= RIGHT GLASS CARD ================= */}
        <div className="absolute right-10 top-24 w-[320px] h-[430px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          {/* Plant Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop"
              alt="plant"
              className="w-56 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Text */}
          <div className="mt-5">
            <p className="text-gray-300 text-sm">
              Indoor Plant
            </p>

            <h2 className="text-3xl font-semibold mt-1">
              Aglaonema plant
            </h2>

            <button className="mt-6 border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
              Buy Now
            </button>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <div className="w-7 h-1 bg-white rounded-full"></div>

              <div className="w-2 h-2 bg-white/50 rounded-full"></div>

              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ================= TESTIMONIAL CARD ================= */}
        <div className="absolute left-5 top-[330px] w-[260px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="user"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                Ronnie Hamill
              </h3>

              <p className="text-yellow-400 text-sm">
                ★★★★★
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            I can’t express how thrilled I am with my new
            natural plants! They bring such a fresh and vibrant
            energy to my home.
          </p>
        </div>

        {/* ================= CENTER TITLE ================= */}
        <div className="text-center mt-52">
          <h2 className="text-5xl md:text-6xl font-bold">
            Our Trendy plants
          </h2>
        </div>

        {/* ================= BOTTOM GLASS CARD ================= */}
        <div className="mt-16 mb-10 w-full rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center px-10 py-10">
          {/* Left Plant */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1000&auto=format&fit=crop"
              alt="desk plant"
              className="w-72 drop-shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              For Your Desks Decorations
            </h2>

            <p className="text-gray-300 mt-5 leading-relaxed max-w-lg">
              I recently added a beautiful desk decoration
              plant to my workspace, and it has made such a
              positive difference!
            </p>

            <h3 className="text-3xl font-semibold mt-6">
              Rs. 599/-
            </h3>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
                Explore
              </button>

              <button className="p-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;