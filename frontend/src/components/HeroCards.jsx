// src/components/HeroCard.jsx
const HeroCard = () => {
  return (
    <div className="absolute right-16 top-32 w-[300px] h-[420px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white shadow-2xl">
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1000&auto=format&fit=crop"
          alt="plant"
          className="w-52 object-contain"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-300">Indoor Plant</p>
        <h2 className="text-3xl font-semibold mt-1">Aglaonema plant</h2>

        <button className="mt-6 border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black transition">
          Buy Now
        </button>

        <div className="flex items-center gap-2 mt-8 justify-center">
          <div className="w-6 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;