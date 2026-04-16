import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-6 px-6 md:px-12 lg:px-16">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between max-w-[1400px] mx-auto border border-white/20">
        <div className="text-2xl font-semibold tracking-tight text-white">
          GRIHA KAAJ
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#story" className="hover:text-gray-300 transition-colors">Story</a>
          <a href="#investing" className="hover:text-gray-300 transition-colors">Investing</a>
          <a href="#building" className="hover:text-gray-300 transition-colors">Building</a>
          <a href="#advisory" className="hover:text-gray-300 transition-colors">Advisory</a>
        </div>

        <div>
          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Start a Chat
          </button>
        </div>
      </div>
    </nav>
  );
};
