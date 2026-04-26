import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-6 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="bg-brand-cyprus/90 backdrop-blur-md rounded-xl px-4 py-3 flex items-center justify-between max-w-[1400px] mx-auto border border-white/10 shadow-lg">
        <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tighter text-brand-cloud shrink-0">
          TORA DEVELOPERS
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-cloud/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#standards" className="hover:text-white transition-colors">The Standard</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="shrink-0">
          <a 
            href="https://wa.me/918471887311?text=Hello%20Tora%20Developers!%20I%20am%20interested%20in%20residential%20plotting.%20Please%20share%20more%20details."
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-cloud text-brand-cyprus px-4 py-2 md:px-6 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap hover:bg-white transition-all transform active:scale-95 inline-block text-center"
          >
            Explore Plots
          </a>
        </div>
      </div>
    </nav>
  );
};
