import React, { useState, useCallback, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FadeIn, AnimatedHeading } from './components/Animations';
import { Preloader } from './components/Preloader';
import { Reveal } from './components/Reveal';
import { 
  Box, 
  Crosshair, 
  Droplet, 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  const leaders = [
    {
      name: "Souptick Sinha",
      title: "FOUNDER & PROPRIETOR",
      bio: "Civil Engineer, Cost & Management Accountant, MBA & M.Sc. Leading the technical and financial foundation of Griha Kaaj Construction with unparalleled precision.",
      image: "/souptick.jpg"
    },
    {
      name: "Nayanav Das",
      title: "CHIEF GROWTH OFFICER",
      bio: "Pioneering growth and purpose-driven building across emerging markets through strategic vision.",
      image: "/nayanav.jpg"
    }
  ];

  const [currentLeader, setCurrentLeader] = useState(0);

  const nextLeader = () => setCurrentLeader((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  const prevLeader = () => setCurrentLeader((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));

  const locations = [
    { name: 'Sivsagar', img: '/image/sivsagar.png' },
    { name: 'Jorhat', img: '/image/jorhat.png' },
    { name: 'Bokakhat', img: '/image/bokakhat.png' },
    { name: 'Barpeta', img: '/image/barpeta.png' },
    { name: 'Dhirenpara', img: '/image/dhirenpara.png' },
    { name: 'Pamohi', img: '/image/pamohi.png' }
  ];

  const [currentLoc, setCurrentLoc] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLoc((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
    }, 2000); // 2-second auto-slide

    return () => clearInterval(timer);
  }, [locations.length]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
    <div className="relative min-h-screen w-full flex flex-col bg-black selection:bg-brand-indigo selection:text-brand-cream">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden text-white">
        {/* Video Background Layer - STRICT RAW VERSION */}
        <video 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />

        {/* Hero Content Wrapper */}
        <div className="relative z-10 flex flex-col flex-1 w-full text-white">
          <Navbar />

          {/* Hero Content positioned at bottom - Pushed below visual focal point */}
          <div className="relative z-10 flex-1 flex flex-col justify-end pb-4 md:pb-12 px-4 md:px-12 lg:px-16 w-full mt-auto">
            <div className="max-w-[1400px] mx-auto w-full">
              <div className="lg:grid lg:grid-cols-2 lg:items-end gap-12 lg:gap-0">
                
                {/* Left Column */}
                <div className="flex flex-col">
                  <AnimatedHeading 
                    text="Shaping the Northeast\nwith vision and action." 
                    className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-2 text-white"
                  />
                  
                  <FadeIn delay={800} duration={1000}>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 font-light max-w-sm leading-relaxed">
                      16 Years of Precision Engineering.
                    </p>
                  </FadeIn>
                  
                  <FadeIn delay={1200}>
                    <div className="flex flex-row flex-wrap gap-3 w-full justify-start mt-2 mb-6 text-white">
                      <a 
                        href="https://wa.me/916002766537?text=Hello%20Griha%20Kaaj%20Construction!%20I%20am%20interested%20in%20starting%20a%20project.%20Please%20share%20more%20details."
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-auto flex justify-center items-center text-center bg-white text-black px-6 py-2.5 rounded-lg text-[13px] sm:text-sm font-medium transition-transform active:scale-95 hover:bg-gray-100 whitespace-nowrap"
                      >
                        Start a Build
                      </a>
                      <button className="w-auto flex justify-center items-center text-center liquid-glass border border-white/20 text-white px-6 py-2.5 rounded-lg text-[13px] sm:text-sm font-light transition-all hover:bg-white hover:text-black active:scale-95 whitespace-nowrap">
                        Explore Projects
                      </button>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Column */}
                <div className="flex items-end justify-start lg:justify-end mt-12 lg:mt-0 text-white">
                  <FadeIn delay={1400} className="w-full lg:w-auto">
                    <div className="w-full sm:w-auto text-center sm:text-left liquid-glass border border-white/20 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-light mt-0">
                      <span className="tracking-wide text-white">
                        Build. Design. Guarantee.
                      </span>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTINUOUS CONTENT BELOW HERO - LIGHT LUXURY EDITORIAL THEME */}
      <main className="bg-brand-cream text-brand-indigo w-full relative z-20">
        
        {/* NEW SECTION 2: WHAT WE DO */}
        <section className="bg-[#F0E7D5] py-24 md:py-32 px-6 md:px-12 lg:px-16 relative z-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="mb-16 md:mb-24 max-w-2xl">
              <Reveal>
                <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#212842] mb-6 leading-tight">
                  What We Build.
                </h2>
                <p className="text-[#212842]/70 text-lg md:text-xl font-light leading-relaxed">
                  From visionary residential estates to robust commercial infrastructure, we engineer spaces that define the Northeast skyline.
                </p>
              </Reveal>
            </div>

            {/* The 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* CARD 1: Residential */}
              <Reveal delay={100}>
                <div className="group relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background Image with Hover Zoom */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="font-heading text-3xl text-[#F0E7D5] mb-3">Residential Luxury</h3>
                    <p className="text-[#F0E7D5]/80 font-light leading-relaxed mb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      High-end residential packages blending architectural precision with cost engineering. Home of the signature 19.8 Lacs Dream Home.
                    </p>
                    <div className="w-12 h-[1px] bg-[#F0E7D5] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </Reveal>

              {/* CARD 2: Commercial */}
              <Reveal delay={200}>
                <div className="group relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="font-heading text-3xl text-[#F0E7D5] mb-3">Commercial Scale</h3>
                    <p className="text-[#F0E7D5]/80 font-light leading-relaxed mb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Large-scale structural projects and corporate spaces designed to anchor urban centers across the Northeast.
                    </p>
                    <div className="w-12 h-[1px] bg-[#F0E7D5] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </Reveal>

              {/* CARD 3: Technical Consulting */}
              <Reveal delay={300}>
                <div className="group relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="font-heading text-3xl text-[#F0E7D5] mb-3">Structural & Civil</h3>
                    <p className="text-[#F0E7D5]/80 font-light leading-relaxed mb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Advanced plumbing, precision core cutting, and 3D VR visualization. We provide the invisible networks that make marvels possible.
                    </p>
                    <div className="w-12 h-[1px] bg-[#F0E7D5] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </section>
        
        {/* SECTION 2: OUR PROJECTS */}
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight text-brand-indigo">Engineered to Perfection.</h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <Reveal delay={100}>
              <div className="bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" 
                  alt="Modern Luxury Residential" 
                  className="w-full aspect-video object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-brand-indigo">The 19.8 Lacs Dream Home</h3>
                    <span className="px-3 py-1 border border-brand-indigo/20 rounded-full text-[10px] uppercase tracking-wider text-brand-indigo/60">Completed</span>
                  </div>
                  <p className="text-brand-indigo/80 font-light leading-relaxed mb-6">A high-end residential package blending architectural precision with optimized cost engineering.</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300 text-brand-indigo">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={250}>
              <div className="bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
                  alt="Modern Commercial Architecture" 
                  className="w-full aspect-video object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-brand-indigo">Luxury Commercial Builds</h3>
                    <span className="px-3 py-1 border border-brand-indigo/20 rounded-full text-[10px] uppercase tracking-wider text-brand-indigo/60">In Progress</span>
                  </div>
                  <p className="text-brand-indigo/80 font-light leading-relaxed mb-6">Large-scale structural projects designed to anchor urban centers across the Northeast.</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300 text-brand-indigo">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 4: LEADERSHIP CAROUSEL */}
        <section id="leadership" className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-brand-indigo/[0.02]">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <Reveal>
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-indigo mb-4">
                    The Minds Behind <br /> the Marvels.
                  </h2>
                  <p className="text-brand-indigo/60 font-light text-lg">Engineering leadership that anchors the Northeast skyline.</p>
                </div>
              </Reveal>
            </div>

            {/* Interactive Carousel Card */}
            <div className="relative min-h-[600px] lg:min-h-[500px]">
              <div 
                key={currentLeader} // Triggers re-animation on change
                className="flex flex-col-reverse lg:flex-row bg-white/50 backdrop-blur-md border border-[#212842]/10 rounded-2xl overflow-hidden min-h-[600px] lg:min-h-[500px]"
              >
                {/* Left: Info (3/5 on lg) */}
                <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-16 flex flex-col justify-center relative">
                  <Reveal>
                    <div className="mb-0">
                      <span className="text-xs lg:text-sm tracking-widest text-[#212842]/60 uppercase mb-4 lg:mb-8 font-medium block">
                        {leaders[currentLeader].title}
                      </span>
                      <h3 className="font-heading text-3xl lg:text-4xl text-[#212842] mb-1 leading-none">
                        {leaders[currentLeader].name}
                      </h3>
                      <div className="w-16 h-[1px] bg-[#212842]/20 mb-6 lg:mb-8"></div>
                      <p className="text-[#212842]/80 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-lg mb-6 lg:mb-0">
                        {leaders[currentLeader].bio}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={200}>
                    <div className="mt-4 lg:mt-8">
                      <button className="flex items-center gap-3 text-[#212842] font-medium text-sm group">
                        Connect on LinkedIn 
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                      </button>
                    </div>
                  </Reveal>
                </div>

                {/* Right: Portrait (2/5 on lg) */}
                <div className="w-full lg:w-2/5 h-[350px] lg:h-auto relative bg-[#212842]/5 group shrink-0">
                  <img 
                    src={leaders[currentLeader].image} 
                    alt={leaders[currentLeader].name} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'; }} 
                  />
                  
                  {/* Dark gradient at bottom of image for control visibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Slider Controls (Now inside the image) */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex gap-2">
                      <button 
                        onClick={prevLeader} 
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#212842] transition-colors"
                        aria-label="Previous leader"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                      </button>
                      <button 
                        onClick={nextLeader} 
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#212842] transition-colors"
                        aria-label="Next leader"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                      </button>
                    </div>
                    
                    {/* Dots */}
                    <div className="flex gap-1.5">
                      {leaders.map((_, idx) => (
                        <div key={idx} className={`h-1.5 rounded-full transition-all ${currentLeader === idx ? 'bg-white w-5' : 'bg-white/40 w-1.5'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: TECHNICAL EXCELLENCE */}
        <section id="technical" className="py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-brand-indigo">Precision in every metric.</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Reveal delay={100}>
              <div className="bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Box size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-brand-indigo">3D VR Visualization</h3>
                <p className="text-brand-indigo/80 font-light text-sm leading-relaxed">Immersive previews of your space before ground is broken. Walk alongside your future.</p>
              </div>
              </Reveal>
              <Reveal delay={200}>
              <div className="bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Crosshair size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-brand-indigo">Core Cutting & Drilling</h3>
                <p className="text-brand-indigo/80 font-light text-sm leading-relaxed">Precision cutting technology ensures structural integrity while allowing for advanced modifications.</p>
              </div>
              </Reveal>
              <Reveal delay={300}>
              <div className="bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Droplet size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-brand-indigo">Advanced Plumbing</h3>
                <p className="text-brand-indigo/80 font-light text-sm leading-relaxed">Engineered hydraulic solutions. Invisible networks integrated flawlessly within architectural marvels.</p>
              </div>
              </Reveal>
              <Reveal delay={400}>
              <div className="bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Building size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-brand-indigo">Structural Consulting</h3>
                <p className="text-brand-indigo/80 font-light text-sm leading-relaxed">Calculation meets art. Ensuring timeless durability through advanced structural analysis.</p>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHERE WE WORK */}
        <section id="presence" className="bg-[#0B1221] py-24 md:py-32 px-6 md:px-12 lg:px-16 relative z-20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-20">
              <div className="max-w-2xl">
                <Reveal>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-[#F0E7D5]"></div>
                    <span className="text-[#F0E7D5]/80 uppercase tracking-widest text-sm font-medium">Where We Work</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#F0E7D5] leading-[1.1]">
                    Rooted in Assam.<br/>Transforming communities across the Northeast.
                  </h2>
                </Reveal>
              </div>
              <div className="max-w-md lg:mt-16">
                <Reveal delay={200}>
                  <p className="text-[#F0E7D5]/70 text-lg font-light leading-relaxed">
                    No matter where you want to build, we mobilize the right resources and experts to drive value and realize your project goals. From urban centers to emerging districts, if you're ready, we're ready.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Bottom Split: Locations Slider & Stats */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              
              {/* Left Side: Auto-Sliding Single Location */}
              <div className="w-full lg:w-3/5">
                <Reveal>
                  <div className="relative overflow-hidden rounded-2xl border border-[#F0E7D5]/10 bg-[#212842] aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] shadow-2xl">
                    
                    {/* Sliding Track */}
                    <div 
                      className="flex w-full h-full transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${currentLoc * 100}%)` }}
                    >
                      {locations.map((loc, idx) => (
                        <div key={idx} className="min-w-full h-full relative shrink-0">
                          {/* Map Image */}
                          <img 
                            src={loc.img} 
                            alt={`${loc.name} Location`} 
                            className="w-full h-full object-cover opacity-60" 
                          />
                          {/* Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-[#0B1221]/20 to-transparent opacity-90"></div>
                          
                          {/* Location Label */}
                          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                            <span className="font-heading text-[#F0E7D5] text-4xl md:text-5xl lg:text-6xl tracking-wide">
                              {loc.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicators (Dots) */}
                    <div className="absolute bottom-8 right-8 flex gap-2">
                      {locations.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-2 rounded-full transition-all duration-500 ${currentLoc === idx ? 'bg-[#F0E7D5] w-8' : 'bg-[#F0E7D5]/30 w-2'}`} 
                        />
                      ))}
                    </div>

                  </div>
                </Reveal>
              </div>

              {/* Right Side: Massive Stats */}
              <div className="w-full lg:w-2/5 flex flex-col gap-12 md:gap-16">
                <Reveal delay={200}>
                  <div>
                    <h3 className="font-heading text-7xl md:text-8xl lg:text-9xl text-[#F0E7D5] mb-2 leading-none">40+</h3>
                    <p className="text-[#F0E7D5]/80 text-xl md:text-2xl font-light">Active Sites</p>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div>
                    <h3 className="font-heading text-7xl md:text-8xl lg:text-9xl text-[#F0E7D5] mb-2 leading-none">15</h3>
                    <p className="text-[#F0E7D5]/80 text-xl md:text-2xl font-light">Years Guarantee</p>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: START YOUR BUILD & FOOTER */}
        <section id="contact" className="pt-16 pb-32 px-6">
          <Reveal>
          <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-md border border-brand-indigo/10 shadow-sm rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 gap-16 relative z-10">
              {/* Info side */}
              <div className="">
                <Reveal delay={100}>
                  <h2 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-brand-indigo">Ready to break ground?</h2>
                </Reveal>
                <div className="flex flex-col gap-6">
                  <Reveal delay={200}>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-indigo/50 uppercase tracking-widest mb-1 font-light">Call Us</p>
                      <p className="text-lg text-brand-indigo font-semibold">+91 6002766537</p>
                    </div>
                  </div>
                  </Reveal>
                  <Reveal delay={300}>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-indigo/50 uppercase tracking-widest mb-1 font-light">Email</p>
                      <p className="text-lg text-brand-indigo font-semibold">office@grihakaaj.com</p>
                    </div>
                  </div>
                  </Reveal>
                  <Reveal delay={400}>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-indigo/50 uppercase tracking-widest mb-1 font-light">Visit</p>
                      <p className="text-lg text-brand-indigo font-semibold">HQ: Dibrugarh, Assam</p>
                    </div>
                  </div>
                  </Reveal>
                </div>
              </div>

              {/* Form side */}
              <Reveal delay={200}>
              <div className="">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const phone = formData.get('phone');
                    const project = formData.get('project');
                    
                    const message = `Hello Griha Kaaj! I would like to request a callback.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Project Type:* ${project}`;
                    const whatsappUrl = `https://wa.me/916002766537?text=${encodeURIComponent(message)}`;
                    
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full"
                >
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Name" 
                    className="bg-transparent border-b border-[#212842]/20 py-4 text-[#212842] placeholder:text-[#212842]/50 focus:outline-none focus:border-[#212842] w-full mb-6 text-lg transition-all"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Phone Number" 
                    className="bg-transparent border-b border-[#212842]/20 py-4 text-[#212842] placeholder:text-[#212842]/50 focus:outline-none focus:border-[#212842] w-full mb-6 text-lg transition-all"
                  />
                  <input 
                    type="text" 
                    name="project"
                    required
                    placeholder="Project Type (e.g., Residential, Commercial)" 
                    className="bg-transparent border-b border-[#212842]/20 py-4 text-[#212842] placeholder:text-[#212842]/50 focus:outline-none focus:border-[#212842] w-full mb-8 text-lg transition-all"
                  />
                  <button 
                    type="submit"
                    className="bg-[#212842] text-[#F0E7D5] px-8 py-4 rounded-xl font-medium w-full hover:bg-[#212842]/90 transition-colors text-lg"
                  >
                    Request a Callback
                  </button>
                </form>
              </div>
              </Reveal>
            </div>
          </div>
          </Reveal>

          <Reveal delay={200}>
          <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-brand-indigo/10 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-indigo/40 text-[10px] uppercase tracking-[0.2em] font-light">
            <p>© 2026 Griha Kaaj Construction. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-brand-indigo transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-indigo transition-colors">Terms</a>
            </div>
          </div>
          </Reveal>
        </section>

      </main>

      <style>{`
        /* Custom spacing for the main heading since letter-spacing is so specific */
        #main-heading {
          letter-spacing: -0.04em;
        }
      `}</style>
    </div>
    </>  
  );
};

export default App;
