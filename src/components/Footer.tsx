import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { IconBrandSpotify } from '@tabler/icons-react';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = {
    instagram: "https://instagram.com/harmonicfusion",
    twitter: "https://twitter.com/harmonicfusion",
    facebook: "https://facebook.com/harmonicfusion",
    youtube: "https://youtube.com/@harmonicfusion",
    spotify: "https://open.spotify.com/artist/harmonicfusion"
  };

  return (
    <footer className="bg-gradient-to-t from-purple-900/20 to-black border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Logo size="large" />
          
          <p className="mt-4 text-gray-400 text-sm max-w-md">
            Follow us on social media for the latest updates, behind-the-scenes content, and exclusive performances.
          </p>
          
          <div className="flex space-x-4 mt-6">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
              className="bg-purple-900/30 p-1.5 rounded-lg hover:bg-purple-900/50 transition-all hover:scale-105 group">
              <Instagram className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
              className="bg-purple-900/30 p-1.5 rounded-lg hover:bg-purple-900/50 transition-all hover:scale-105 group">
              <Twitter className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
              className="bg-purple-900/30 p-1.5 rounded-lg hover:bg-purple-900/50 transition-all hover:scale-105 group">
              <Facebook className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"
              className="bg-purple-900/30 p-1.5 rounded-lg hover:bg-purple-900/50 transition-all hover:scale-105 group">
              <Youtube className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
            </a>
            <a href={socialLinks.spotify} target="_blank" rel="noopener noreferrer"
              className="bg-purple-900/30 p-1.5 rounded-lg hover:bg-purple-900/50 transition-all hover:scale-105 group">
              <IconBrandSpotify className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-900/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Harmonic Fusion. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Designed with</span>
            <span className="mx-2 text-purple-400">♪</span>
            <a href="https://creativestudios.com" target="_blank" rel="noopener noreferrer" 
              className="text-purple-400 hover:text-purple-300">Creative Studios</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;