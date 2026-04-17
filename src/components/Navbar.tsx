import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-6 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between max-w-[1400px] mx-auto border border-white/20">
        <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white shrink-0">
          GRIHA KAAJ
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-white">
          <a href="#story" className="hover:text-gray-300 transition-colors">Story</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
          <a href="#leadership" className="hover:text-gray-300 transition-colors">Leadership</a>
          <a href="#technical" className="hover:text-gray-300 transition-colors">Technical</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>

        <div className="shrink-0">
          <a 
            href="https://wa.me/916002766537?text=Hello%20Griha%20Kaaj%20Construction!%20I%20am%20interested%20in%20starting%20a%20project.%20Please%20share%20more%20details."
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 md:px-6 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap hover:bg-gray-100 transition-colors inline-block text-center"
          >
            Start a Build
          </a>
        </div>
      </div>
    </nav>
  );
};
