
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-64 md:h-80" style={{ backgroundImage: "url('https://picsum.photos/seed/rakshabandhan/1200/400')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold drop-shadow-lg">Celebrate The Bond of Love</h2>
        <p className="mt-2 md:mt-4 max-w-lg text-sm md:text-lg drop-shadow-md">
          Explore our exclusive collection of handcrafted Rakhis and find the perfect expression of your affection.
        </p>
        <button className="mt-6 px-6 py-2 bg-brand-secondary text-brand-dark font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
