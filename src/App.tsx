import React from 'react';
import { Navbar } from './components/Navbar';
import { FadeIn, AnimatedHeading } from './components/Animations';
import { 
  Box, 
  Crosshair, 
  Droplet, 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden">
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
        <div className="relative z-10 flex flex-col flex-1 w-full">
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
                    <div className="flex flex-row flex-wrap gap-3 w-full justify-start mt-2 mb-6">
                      <button className="w-auto flex justify-center items-center text-center bg-white text-black px-6 py-2.5 rounded-lg text-[13px] sm:text-sm font-medium transition-transform active:scale-95 hover:bg-gray-100 whitespace-nowrap">
                        Start a Build
                      </button>
                      <button className="w-auto flex justify-center items-center text-center liquid-glass border border-white/20 text-white px-6 py-2.5 rounded-lg text-[13px] sm:text-sm font-light transition-all hover:bg-white hover:text-black active:scale-95 whitespace-nowrap">
                        Explore Projects
                      </button>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Column */}
                <div className="flex items-end justify-start lg:justify-end mt-12 lg:mt-0">
                  <FadeIn delay={1400} className="w-full lg:w-auto">
                    <div className="w-full sm:w-auto text-center sm:text-left liquid-glass border border-white/20 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-light mt-0">
                      <span className="tracking-wide">
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
      <main className="bg-[#F0E7D5] text-[#212842] w-full relative z-20">
        
        {/* SECTION 2: OUR PROJECTS */}
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight text-[#212842]">Engineered to Perfection.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" 
                  alt="Modern Luxury Residential" 
                  className="w-full aspect-video object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-[#212842]">The 19.8 Lacs Dream Home</h3>
                    <span className="px-3 py-1 border border-[#212842]/20 rounded-full text-[10px] uppercase tracking-wider text-[#212842]/60">Completed</span>
                  </div>
                  <p className="text-[#212842]/80 font-light leading-relaxed mb-6">A high-end residential package blending architectural precision with optimized cost engineering.</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl overflow-hidden group cursor-pointer hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
                  alt="Modern Commercial Architecture" 
                  className="w-full aspect-video object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-[#212842]">Luxury Commercial Builds</h3>
                    <span className="px-3 py-1 border border-[#212842]/20 rounded-full text-[10px] uppercase tracking-wider text-[#212842]/60">In Progress</span>
                  </div>
                  <p className="text-[#212842]/80 font-light leading-relaxed mb-6">Large-scale structural projects designed to anchor urban centers across the Northeast.</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LEADERSHIP */}
        <section id="leadership" className="py-24 px-6 md:px-12 lg:px-16 bg-[#212842]/[0.02]">
          <div className="max-w-[1400px] mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              {/* Quote Area */}
              <div className="mb-12 lg:mb-0 relative">
                <span className="absolute -top-16 -left-10 text-[12rem] text-[#212842]/5 font-serif leading-none select-none pointer-events-none">"</span>
                <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#212842] mb-6 relative z-10 tracking-tight">
                  We don't just pour concrete; we anchor dreams.
                </h2>
                <div className="flex items-center gap-4 text-[#212842]/60 mt-6 relative z-10">
                  <div className="w-8 h-[1px] bg-[#212842]/20"></div>
                  <p className="font-medium text-sm">Nayanav Das, Chief Growth Officer</p>
                </div>
              </div>

              {/* Profiles */}
              <div className="space-y-6">
                {/* Nayanav Das Card */}
                <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-8 relative overflow-hidden group cursor-pointer hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                  <div className="flex items-center gap-6 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200" 
                      alt="Nayanav Das" 
                      className="w-16 h-16 rounded-full object-cover border border-[#212842]/20 group-hover:border-[#212842]/50 transition-colors"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-[#212842]">Nayanav Das</h4>
                      <p className="text-[#212842]/60 text-sm mb-2 uppercase tracking-wider font-light">Chief Growth Officer</p>
                      <p className="text-sm text-[#212842]/70 max-w-sm leading-relaxed font-light">Pioneering growth and purpose-driven building across emerging markets through strategic vision.</p>
                    </div>
                  </div>
                </div>

                {/* Achintya Sinha Card */}
                <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-8 relative overflow-hidden group cursor-pointer hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                  <div className="flex items-center gap-6 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" 
                      alt="Achintya Sinha" 
                      className="w-16 h-16 rounded-full object-cover border border-[#212842]/20 group-hover:border-[#212842]/50 transition-colors"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-[#212842]">Achintya Sinha</h4>
                      <p className="text-[#212842]/60 text-sm mb-2 uppercase tracking-wider font-light">Founder</p>
                      <p className="text-sm text-[#212842]/70 max-w-sm leading-relaxed font-light">16 years of engineering legacy, scaling technical mastery to define the Northeast Skyline with precision.</p>
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-16 tracking-tight text-[#212842]">Precision in every metric.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Box size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-[#212842]">3D VR Visualization</h3>
                <p className="text-[#212842]/80 font-light text-sm leading-relaxed">Immersive previews of your space before ground is broken. Walk alongside your future.</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Crosshair size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-[#212842]">Core Cutting & Drilling</h3>
                <p className="text-[#212842]/80 font-light text-sm leading-relaxed">Precision cutting technology ensures structural integrity while allowing for advanced modifications.</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Droplet size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-[#212842]">Advanced Plumbing</h3>
                <p className="text-[#212842]/80 font-light text-sm leading-relaxed">Engineered hydraulic solutions. Invisible networks integrated flawlessly within architectural marvels.</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-8 hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <Building size={32} color="#212842" className="mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3 text-[#212842]">Structural Consulting</h3>
                <p className="text-[#212842]/80 font-light text-sm leading-relaxed">Calculation meets art. Ensuring timeless durability through advanced structural analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: REGIONAL PRESENCE */}
        <section 
          id="presence" 
          className="py-32 px-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent relative overflow-hidden"
        >
          {/* Decorative absolute text */}
          <div className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black text-[#212842]/5 whitespace-nowrap flex justify-center items-center select-none pointer-events-none absolute inset-0 z-0 tracking-tighter uppercase">
            Joi Ai Axom
          </div>

          <div className="max-w-[1400px] mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-20 tracking-tight text-[#212842]">Rooted in Assam. Building the Northeast.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <p className="text-5xl font-light mb-3 text-[#212842]">40+</p>
                <p className="text-[#212842]/60 tracking-[0.2em] text-xs uppercase font-light">Active Sites</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <p className="text-5xl font-light mb-3 text-[#212842]">15</p>
                <p className="text-[#212842]/60 tracking-[0.2em] text-xs uppercase font-light">Years Guarantee</p>
              </div>
              <div className="bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-white/60 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
                <p className="text-5xl font-light mb-3 text-[#212842]">Dibrugarh</p>
                <p className="text-[#212842]/60 tracking-[0.2em] text-xs uppercase font-light">Headquarters</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: START YOUR BUILD & FOOTER */}
        <section id="contact" className="pt-16 pb-32 px-6">
          <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-md border border-[#212842]/10 shadow-sm rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 gap-16 relative z-10">
              {/* Info side */}
              <div className="">
                <h2 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-[#212842]">Ready to break ground?</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-[#212842]/10 flex items-center justify-center text-[#212842]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#212842]/50 uppercase tracking-widest mb-1 font-light">Call Us</p>
                      <p className="text-lg text-[#212842] font-semibold">+91 6002766537</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-[#212842]/10 flex items-center justify-center text-[#212842]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#212842]/50 uppercase tracking-widest mb-1 font-light">Email</p>
                      <p className="text-lg text-[#212842] font-semibold">office@grihakaaj.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-[#212842]/10 flex items-center justify-center text-[#212842]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[#212842]/50 uppercase tracking-widest mb-1 font-light">Visit</p>
                      <p className="text-lg text-[#212842] font-semibold">HQ: Dibrugarh, Assam</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form side */}
              <div className="">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="bg-transparent border-b border-[#212842]/20 py-4 text-[#212842] placeholder:text-[#212842]/50 focus:outline-none focus:border-[#212842] w-full mb-8 text-lg transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-transparent border-b border-[#212842]/20 py-4 text-[#212842] placeholder:text-[#212842]/50 focus:outline-none focus:border-[#212842] w-full mb-8 text-lg transition-all"
                  />
                  <select 
                    className="bg-transparent border-b border-[#212842]/20 py-4 text-[#212842] text-lg focus:outline-none focus:border-[#212842] w-full mb-12 transition-all appearance-none"
                  >
                    <option className="bg-[#F0E7D5]">Project Type</option>
                    <option className="bg-[#F0E7D5]">Residential</option>
                    <option className="bg-[#F0E7D5]">Commercial</option>
                    <option className="bg-[#F0E7D5]">Advisory</option>
                  </select>
                  <button className="bg-[#212842] text-[#F0E7D5] px-8 py-4 rounded-xl font-medium w-full hover:bg-[#212842]/90 transition-colors text-lg mt-4 shadow-lg active:scale-95">
                    Request a Callback
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#212842]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#212842]/40 text-[10px] uppercase tracking-[0.2em] font-light">
            <p>© 2026 Griha Kaaj Construction. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#212842] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#212842] transition-colors">Terms</a>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        /* Custom spacing for the main heading since letter-spacing is so specific */
        #main-heading {
          letter-spacing: -0.04em;
        }
      `}</style>
    </div>
  );
};

export default App;
