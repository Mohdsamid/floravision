// src/components/TrendingSection.jsx
import { ShoppingBag } from "lucide-react";

const TrendingSection = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[250px] rounded-[50px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl flex items-center px-10">
      {/* Plant */}
      <div className="w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1000&auto=format&fit=crop"
          alt="plant"
          className="w-72"
        />
      </div>

      {/* Content */}
      <div className="w-1/2 text-white">
        <h2 className="text-4xl font-bold mb-4">
          For Your Desks Decorations
        </h2>

        <p className="text-gray-300 max-w-md mb-5">
          I recently added a beautiful desk decoration plant to my workspace,
          and it has made such a positive difference!
        </p>

        <h3 className="text-3xl font-semibold mb-6">Rs. 599/-</h3>

        <div className="flex items-center gap-4">
          <button className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            Explore
          </button>

          <button className="p-3 border border-white rounded-xl hover:bg-white hover:text-black transition">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;