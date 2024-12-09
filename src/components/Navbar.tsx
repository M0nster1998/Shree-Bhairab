import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-b from-black via-black to-black/95 z-50 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">About</a>
              <a href="#media" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">Media</a>
              <a href="#gallery" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">Gallery</a>
              <a href="#events" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">Events</a>
              <a href="#contact" className="text-white hover:text-purple-400 px-3 py-2 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-white hover:text-purple-400 px-3 py-2 transition-colors">Home</a>
            <a href="#about" className="block text-white hover:text-purple-400 px-3 py-2 transition-colors">About</a>
            <a href="#media" className="block text-white hover:text-purple-400 px-3 py-2 transition-colors">Media</a>
            <a href="#gallery" className="block text-white hover:text-purple-400 px-3 py-2 transition-colors">Gallery</a>
            <a href="#events" className="block text-white hover:text-purple-400 px-3 py-2 transition-colors">Events</a>
            <a href="#contact" className="block text-white hover:text-purple-400 px-3 py-2 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;