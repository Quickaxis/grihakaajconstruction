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
  ArrowRight,
  ShieldCheck,
  Map
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-white selection:bg-white selection:text-black">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex flex-col">
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
          <div className="relative z-10 flex flex-col flex-1 mt-auto pt-24 pb-8 sm:pb-12 md:px-12 lg:px-16 lg:pb-16 w-full">
            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:items-end gap-12 lg:gap-0">
                
                {/* Left Column */}
                <div className="flex flex-col">
                  <AnimatedHeading 
                    text="Shaping the Northeast\nwith vision and action." 
                    className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight mb-2 text-white"
                  />
                  
                  <FadeIn delay={800} duration={1000}>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-6 font-light max-w-sm leading-relaxed">
                      16 Years of Precision Engineering.
                    </p>
                  </FadeIn>
                  
                  <FadeIn delay={1200}>
                    <div className="flex flex-row gap-3 w-full mt-2 mb-8 lg:mb-0">
                      <button className="flex-1 flex justify-center items-center text-center bg-white text-black px-2 py-3 rounded-lg text-[13px] sm:text-sm font-medium transition-transform active:scale-95 hover:bg-gray-100 whitespace-nowrap">
                        Start a Build
                      </button>
                      <button className="flex-1 flex justify-center items-center text-center liquid-glass border border-white/20 text-white px-2 py-3 rounded-lg text-[13px] sm:text-sm font-light transition-all hover:bg-white hover:text-black active:scale-95 whitespace-nowrap">
                        Explore Projects
                      </button>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Column */}
                <div className="flex items-end justify-start lg:justify-end mt-12 lg:mt-0">
                  <FadeIn delay={1400} className="w-full lg:w-auto">
                    <div className="w-full sm:w-auto text-center liquid-glass border border-white/20 px-4 py-2 rounded-xl text-xs sm:text-sm font-light mt-auto">
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

      {/* CONTINUOUS CONTENT BELOW HERO */}
      <main className="bg-black text-white w-full">
        
        {/* SECTION 2: OUR PROJECTS */}
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight">Engineered to Perfection.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="liquid-glass rounded-2xl group cursor-pointer border border-white/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600" 
                  alt="Modern Luxury Residential" 
                  className="w-full aspect-video object-cover rounded-t-xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-normal">The 19.8 Lacs Dream Home</h3>
                    <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-gray-400">Completed</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">A high-end residential package blending architectural precision with optimized cost engineering.</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="liquid-glass rounded-2xl group cursor-pointer border border-white/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
                  alt="Modern Commercial Architecture" 
                  className="w-full aspect-video object-cover rounded-t-xl opacity-90 hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-normal">Luxury Commercial Builds</h3>
                    <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-wider text-gray-400">In Progress</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">Large-scale structural projects designed to anchor urban centers across the Northeast.</p>
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    View Project <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LEADERSHIP */}
        <section id="leadership" className="py-24 px-6 md:px-12 lg:px-16 bg-white/[0.02]">
          <div className="max-w-[1400px] mx-auto">
            <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
              {/* Quote Area */}
              <div className="mb-12 lg:mb-0 relative">
                <span className="absolute -top-16 -left-10 text-[12rem] text-white/[0.03] font-serif leading-none select-none pointer-events-none">"</span>
                <h2 className="text-4xl lg:text-5xl font-light leading-tight text-white mb-6 relative z-10 tracking-tight">
                  We don't just pour concrete; we anchor dreams.
                </h2>
                <div className="flex items-center gap-4 text-gray-400 mt-6 relative z-10">
                  <div className="w-8 h-[1px] bg-white/20"></div>
                  <p className="font-medium text-sm">Nayanav Das, Chief Growth Officer</p>
                </div>
              </div>

              {/* Profiles */}
              <div className="space-y-6">
                {/* Nayanav Das Card */}
                <div className="liquid-glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group cursor-pointer hover:border-white/30 hover:-translate-y-1 transition-all duration-500 bg-gradient-to-br from-white/[0.05] to-transparent">
                  <div className="flex items-center gap-6 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200" 
                      alt="Nayanav Das" 
                      className="w-16 h-16 rounded-full object-cover border border-white/20 group-hover:border-white/50 transition-colors"
                    />
                    <div>
                      <h4 className="text-xl font-medium text-white">Nayanav Das</h4>
                      <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-light">Chief Growth Officer</p>
                      <p className="text-sm text-gray-500 max-w-sm leading-relaxed">Pioneering growth and purpose-driven building across emerging markets through strategic vision.</p>
                    </div>
                  </div>
                </div>

                {/* Achintya Sinha Card */}
                <div className="liquid-glass p-8 rounded-2xl border border-white/10 relative overflow-hidden group cursor-pointer hover:border-white/30 hover:-translate-y-1 transition-all duration-500 bg-gradient-to-br from-white/[0.05] to-transparent">
                  <div className="flex items-center gap-6 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200" 
                      alt="Achintya Sinha" 
                      className="w-16 h-16 rounded-full object-cover border border-white/20 group-hover:border-white/50 transition-colors"
                    />
                    <div>
                      <h4 className="text-xl font-medium text-white">Achintya Sinha</h4>
                      <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-light">Founder</p>
                      <p className="text-sm text-gray-500 max-w-sm leading-relaxed">16 years of engineering legacy, scaling technical mastery to define the Northeast Skyline with precision.</p>
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
            <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">Precision in every metric.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="liquid-glass p-8 rounded-xl border border-white/5 hover:border-white/20 transition-colors group">
                <Box size={32} className="text-white mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-normal mb-3">3D VR Visualization</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Immersive previes of your space before ground is broken. Walk alongside your future through VR environments.</p>
              </div>
              <div className="liquid-glass p-8 rounded-xl border border-white/5 hover:border-white/20 transition-colors group">
                <Crosshair size={32} className="text-white mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-normal mb-3">Core Cutting & Drilling</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Precision cutting technology ensures structural integrity while allowing for advanced modifications.</p>
              </div>
              <div className="liquid-glass p-8 rounded-xl border border-white/5 hover:border-white/20 transition-colors group">
                <Droplet size={32} className="text-white mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-normal mb-3">Advanced Plumbing</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Engineered hydraulic solutions. Invisible networks integrated flawlessly within architectural marvels.</p>
              </div>
              <div className="liquid-glass p-8 rounded-xl border border-white/5 hover:border-white/20 transition-colors group">
                <Building size={32} className="text-white mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-lg font-normal mb-3">Structural Consulting</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Calculation meets art. Ensuring timeless durability against nature's forces through لوڈ-بائرنگ analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: REGIONAL PRESENCE */}
        <section 
          id="presence" 
          className="py-32 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black relative overflow-hidden"
        >
          {/* Decorative absolute text */}
          <div className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black text-white/[0.03] whitespace-nowrap flex justify-center items-center select-none pointer-events-none absolute inset-0 z-0 tracking-tighter uppercase">
            Joi Ai Axom
          </div>

          <div className="max-w-[1400px] mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-20 tracking-tight">Rooted in Assam. Building the Northeast.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="liquid-glass p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-1">
                <p className="text-5xl font-light mb-3">40+</p>
                <p className="text-gray-400 tracking-[0.2em] text-xs uppercase">Active Sites</p>
              </div>
              <div className="liquid-glass p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-1">
                <p className="text-5xl font-light mb-3">15</p>
                <p className="text-gray-400 tracking-[0.2em] text-xs uppercase">Years Guarantee</p>
              </div>
              <div className="liquid-glass p-10 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-1">
                <p className="text-5xl font-light mb-3">Dibrugarh</p>
                <p className="text-gray-400 tracking-[0.2em] text-xs uppercase">Headquarters</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: START YOUR BUILD & FOOTER */}
        <section id="contact" className="pt-16 pb-32 px-6">
          <div className="max-w-6xl mx-auto liquid-glass rounded-3xl p-10 lg:p-16 border border-white/10 relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] before:from-white/10 before:to-transparent before:pointer-events-none">
            <div className="lg:grid lg:grid-cols-2 gap-16 relative z-10">
              {/* Info side */}
              <div className="">
                <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-tight">Ready to break ground?</h2>
                <div className="flex flex-col gap-6 text-gray-300">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg text-white font-normal">+91 6002766537</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg text-white font-normal">office@grihakaaj.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Visit</p>
                      <p className="text-lg text-white font-normal">HQ: Dibrugarh, Assam</p>
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
                    className="bg-transparent border-b border-white/20 py-4 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:border-white focus:bg-white/5 w-full mb-8 transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-transparent border-b border-white/20 py-4 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:border-white focus:bg-white/5 w-full mb-8 transition-all"
                  />
                  <select 
                    className="bg-transparent border-b border-white/20 py-4 text-white text-lg focus:outline-none focus:border-white focus:bg-white/5 w-full mb-12 transition-all appearance-none"
                  >
                    <option className="bg-black">Project Type</option>
                    <option className="bg-black">Residential</option>
                    <option className="bg-black">Commercial</option>
                    <option className="bg-black">Advisory</option>
                  </select>
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-medium w-full hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-95 text-lg mt-4">
                    Request a Callback
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            <p>© 2026 Griha Kaaj Construction. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
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
