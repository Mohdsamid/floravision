// src/components/TestimonialCard.jsx
const TestimonialCard = () => {
  return (
    <div className="absolute left-10 top-[330px] w-[260px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-white">
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="user"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h3 className="font-semibold">Ronnie Hamill</h3>
          <p className="text-yellow-400 text-sm">★★★★★</p>
        </div>
      </div>

      <p className="text-sm text-gray-300 mt-4 leading-relaxed">
        I can’t express how thrilled I am with my new natural plants! They bring
        such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
};

export default TestimonialCard;