import React from 'react';
import { Music, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const SpotifyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 11.5a5 5 0 0 1 5.5-1.5"></path>
    <path d="M7 15a7 7 0 0 1 7-1"></path>
    <path d="M9 8a3.5 3.5 0 0 1 5 0"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Music className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">Shree Bhairab</span>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/shree_bhairab/"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554835328090"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-500 transition-colors"
            >
              <SpotifyIcon />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-purple-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#music"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-500">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">contact@harmonicfusion.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">New York, NY</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-400">
              Follow us on social media for the latest updates,
              behind-the-scenes content, and exclusive performances.
            </p>
          </div>
        </div>

        <div className="border-t border-purple-900/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Harmonic Fusion. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed by <span className="text-purple-500">John Doe</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
