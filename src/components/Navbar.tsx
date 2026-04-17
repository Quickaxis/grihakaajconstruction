import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      {/* Navbar Container */}
      <nav className="relative z-[60] w-full pt-6 px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div className="font-heading text-2xl md:text-3xl text-white tracking-wider shrink-0">
          GRIHA KAAJ
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-light text-sm tracking-wide">
          <a href="#portfolio" className="hover:text-white transition-colors cursor-pointer">Portfolio</a>
          <a href="#leadership" className="hover:text-white transition-colors cursor-pointer">Leadership</a>
          <a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a>
        </div>

        {/* Right Side: CTA & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA (Hidden on Mobile) */}
          <a 
            href="https://wa.me/916002766537?text=Hello%20Griha%20Kaaj!%20I%20would%20like%20to%20discuss%20a%20project." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex bg-white text-[#212842] px-6 py-2.5 rounded-lg text-sm font-medium transition-transform active:scale-95"
          >
            Start a Build
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-transform duration-300 rotate-90"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Part 3) */}
      <div 
        className={`fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-[#0B1221]/95 backdrop-blur-xl z-[50] flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}`}
      >
        <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl text-[#F0E7D5] hover:scale-105 transition-transform">Portfolio</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl text-[#F0E7D5] hover:scale-105 transition-transform">Services</a>
        <a href="#leadership" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl text-[#F0E7D5] hover:scale-105 transition-transform">Leadership</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl text-[#F0E7D5] hover:scale-105 transition-transform">Contact</a>
        
        <a 
          href="https://wa.me/916002766537?text=Hello%20Griha%20Kaaj!%20I%20would%20like%20to%20discuss%20a%20project." 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)} 
          className="mt-8 bg-[#F0E7D5] text-[#212842] px-10 py-4 rounded-xl text-lg font-medium tracking-wide active:scale-95 transition-transform"
        >
          Start a Build
        </a>
      </div>
    </div>
  );
};
