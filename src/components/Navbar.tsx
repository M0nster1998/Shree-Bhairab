import React, { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';
import BandLogo from './Images/Band-Logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={BandLogo} 
              alt="Shree Bhairab Band Logo" 
              width="50"
              Classname="rounded"
              />
            <span className="ml-2 text-xl font-bold">Shree Bhairab</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="hover:text-purple-500 px-3 py-2 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-500 px-3 py-2 transition-colors"
              >
                About
              </a>
              <a
                href="#meida"
                className="hover:text-purple-500 px-3 py-2 transition-colors"
              >
                Music
              </a>
              <a
                href="#events"
                className="hover:text-purple-500 px-3 py-2 transition-colors"
              >
                Events
              </a>
              <a
                href="#contact"
                className="hover:text-purple-500 px-3 py-2 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block hover:text-purple-500 px-3 py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-purple-500 px-3 py-2 transition-colors"
            >
              About
            </a>
            <a
              href="#meida"
              className="block hover:text-purple-500 px-3 py-2 transition-colors"
            >
              Music
            </a>
            <a
              href="#events"
              className="block hover:text-purple-500 px-3 py-2 transition-colors"
            >
              Events
            </a>
            <a
              href="#contact"
              className="block hover:text-purple-500 px-3 py-2 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
