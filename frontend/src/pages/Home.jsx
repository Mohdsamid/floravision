import Navbar from "../components/Navbar.jsx";
import HeroCard from "../components/HeroCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import TrendingSection from "../components/TrendingSection.jsx";
import { Play } from "lucide-react";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-green-950/40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 px-10 pt-40 text-white">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold leading-tight">
            Earth’s Exhale
          </h1>

          <p className="mt-5 text-gray-300 max-w-xl">
            “Earth Exhale” symbolizes the purity and vitality of the Earth’s
            natural environment and its essential role in sustaining life.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-8">
            <button className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
              Buy Now
            </button>

            <button className="flex items-center gap-3 hover:text-green-300 transition">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                <Play size={18} fill="white" />
              </div>
              Live Demo
            </button>
          </div>
        </div>

        {/* Cards */}
        <HeroCard />
        <TestimonialCard />

        {/* Trendy Plants Text */}
        <div className="absolute left-1/2 top-[520px] -translate-x-1/2 text-5xl font-bold">
          Our Trendy plants
        </div>
      </div>

      {/* Bottom Section */}
      <TrendingSection />
    </div>
  );
};

export default Home;