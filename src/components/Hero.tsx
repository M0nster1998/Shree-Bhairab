import React from 'react';
import { Play } from 'lucide-react';
import Group1 from '../assets/Group1.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={Group1}
          alt="Band performing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Harmonic Fusion
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Where Classical Meets Contemporary
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto transition-colors">
          <Play className="w-5 h-5 mr-2" />
          Watch Latest Performance
        </button>
      </div>
    </section>
  );
};

export default Hero;
