import React, { useState, useCallback, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FadeIn, AnimatedHeading } from './components/Animations';
import { Preloader } from './components/Preloader';
import { Reveal } from './components/Reveal';
import { BackToTop } from './components/BackToTop';
import { 
  Road, 
  Droplets, 
  FileCheck, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Maximize
} from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setLoading(false), []);

  const leaders = [
    {
      name: "Ashok Kr Neog",
      title: "FOUNDER & PROPRIETOR",
      bio: "With over 8 years of dedicated experience in land plotting and infrastructure development, Mr. Ashok Kr Neog has established Tora Developers as a beacon of trust in Upper Assam. His vision is to provide every family with a legally secure and world-class foundation for their dream home.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const locations = [
    { name: 'Dibrugarh', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Tinsukia', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Sivsagar', img: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop' }
  ];

  const [currentLoc, setCurrentLoc] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLoc((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [locations.length]);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
    <div className="relative min-h-screen w-full flex flex-col bg-brand-cloud selection:bg-brand-cyprus selection:text-brand-cloud">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100dvh] w-full flex flex-col overflow-hidden text-white">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Tora Developers Land Plot" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-10 flex flex-col flex-1 w-full text-white">
          <Navbar />

          {/* Hero Content positioned at bottom */}
          <div className="relative z-10 flex-1 flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 lg:px-24 w-full mt-auto">
            <div className="max-w-[1400px] mx-auto w-full">
              <div className="lg:grid lg:grid-cols-2 lg:items-end gap-12 lg:gap-0">
                
                {/* Left Column */}
                <div className="flex flex-col">
                  <AnimatedHeading 
                    text="Building Legacies on Solid Ground." 
                    className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tighter mb-4 text-white"
                  />
                  
                  <FadeIn delay={800} duration={1000}>
                    <p className="text-lg md:text-xl text-white/90 mb-8 font-medium max-w-xl leading-relaxed">
                      Dibrugarh’s premier destination for planned residential plotting. Secure your future with clear titles and world-class infrastructure.
                    </p>
                  </FadeIn>
                  
                  <FadeIn delay={1200}>
                    <div className="flex flex-row flex-wrap gap-4 w-full justify-start mt-2 mb-6">
                      <a 
                        href="#projects"
                        className="w-auto flex justify-center items-center text-center bg-brand-cloud text-brand-cyprus px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl"
                      >
                        Explore Our Projects
                      </a>
                      <a 
                        href="https://wa.me/918471887311"
                        className="w-auto flex justify-center items-center text-center bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-white hover:text-brand-cyprus active:scale-95 whitespace-nowrap"
                      >
                        Contact Mr. Ashok Kr Neog
                      </a>
                    </div>
                  </FadeIn>
                </div>

                {/* Right Column */}
                <div className="flex items-end justify-start lg:justify-end mt-12 lg:mt-0 text-white">
                  <FadeIn delay={1400} className="w-full lg:w-auto">
                    <div className="w-full sm:w-auto text-center sm:text-left bg-brand-cyprus/80 backdrop-blur-lg border border-white/20 px-6 py-4 rounded-2xl text-sm md:text-base font-semibold mt-0 shadow-2xl">
                      <span className="tracking-wide text-brand-cloud flex items-center gap-2">
                        <TrendingUp size={20} /> 8 Years of Plotting Authority
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
      <main className="bg-brand-cloud text-brand-cyprus w-full relative z-20">
        
        {/* SECTION 2: ABOUT TORA DEVELOPERS */}
        <section id="about" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white relative z-20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
                    alt="Tora Developers Infrastructure" 
                    className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-brand-cyprus text-brand-cloud p-8 rounded-2xl hidden md:block">
                    <p className="text-4xl font-bold">8+</p>
                    <p className="text-sm font-medium opacity-80">Years of Trust</p>
                  </div>
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-cyprus mb-8 leading-tight">
                    8 Years of Excellence in Upper Assam
                  </h2>
                  <p className="text-brand-cyprus/70 text-xl font-medium leading-relaxed mb-8">
                    Unlike standard real estate firms, Tora Developers specializes exclusively in high-quality plotting. Led by Mr. Ashok Kr Neog, we transform raw land into ready-to-build, legally secure residential spaces.
                  </p>
                  <p className="text-brand-cyprus/70 text-xl font-medium leading-relaxed mb-12">
                    We don't just sell land; we provide the foundation for your dream home. Every project is a testament to our commitment to quality, legality, and community.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-3xl font-bold text-brand-cyprus mb-2">100+</h4>
                      <p className="text-brand-cyprus/60 font-semibold uppercase tracking-widest text-xs">Happy Families</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-brand-cyprus mb-2">100%</h4>
                      <p className="text-brand-cyprus/60 font-semibold uppercase tracking-widest text-xs">Legal Security</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        
        {/* SECTION 3: THE TORA STANDARD */}
        <section id="standards" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-brand-cloud">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-6xl font-bold text-brand-cyprus mb-6">The Tora Standard</h2>
                <p className="text-brand-cyprus/60 text-xl">We believe in "Proper Plotting"—where every detail is engineered for a premium living experience.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Reveal delay={100}>
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-brand-cyprus/5">
                  <div className="w-16 h-16 bg-brand-cyprus/5 rounded-2xl flex items-center justify-center text-brand-cyprus mb-8 group-hover:bg-brand-cyprus group-hover:text-brand-cloud transition-colors duration-500">
                    <Road size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Metalled Internal Roads</h3>
                  <p className="text-brand-cyprus/60 leading-relaxed font-medium">Wide, durable roads designed for easy access within every project. Built to last generations.</p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-brand-cyprus/5">
                  <div className="w-16 h-16 bg-brand-cyprus/5 rounded-2xl flex items-center justify-center text-brand-cyprus mb-8 group-hover:bg-brand-cyprus group-hover:text-brand-cloud transition-colors duration-500">
                    <Droplets size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Drainage</h3>
                  <p className="text-brand-cyprus/60 leading-relaxed font-medium">Engineered systems to ensure your plot remains flood-free during Assam's monsoons.</p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-brand-cyprus/5">
                  <div className="w-16 h-16 bg-brand-cyprus/5 rounded-2xl flex items-center justify-center text-brand-cyprus mb-8 group-hover:bg-brand-cyprus group-hover:text-brand-cloud transition-colors duration-500">
                    <FileCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Legal Integrity</h3>
                  <p className="text-brand-cyprus/60 leading-relaxed font-medium">Every plot comes with a clear title and 100% verified documentation for a hassle-free transfer.</p>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-brand-cyprus/5">
                  <div className="w-16 h-16 bg-brand-cyprus/5 rounded-2xl flex items-center justify-center text-brand-cyprus mb-8 group-hover:bg-brand-cyprus group-hover:text-brand-cloud transition-colors duration-500">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Boundary Security</h3>
                  <p className="text-brand-cyprus/60 leading-relaxed font-medium">Clearly defined perimeters and project-wide boundary walls for absolute peace of mind.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECT SIZES */}
        <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-brand-cyprus text-brand-cloud overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-24"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="lg:grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <Reveal>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8">Tailored to Your Needs</h2>
                  <p className="text-brand-cloud/80 text-xl font-medium leading-relaxed mb-12">
                    We offer flexible plot sizes to suit your vision, including 1 Bigha and 2.5 Bigha variations. Perfect for private villas, family estates, or long-term investment.
                  </p>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-brand-cloud text-brand-cyprus flex items-center justify-center">
                        <Maximize size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">1 Bigha Plots</h4>
                        <p className="text-brand-cloud/60 text-sm">Ideal for modern residential homes.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl border border-white/10">
                      <div className="w-12 h-12 rounded-full bg-brand-cloud text-brand-cyprus flex items-center justify-center">
                        <Maximize size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">2.5 Bigha Estates</h4>
                        <p className="text-brand-cloud/60 text-sm">Perfect for sprawling family villas.</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="mt-16 lg:mt-0">
                <Reveal delay={200}>
                  <img 
                    src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2000&auto=format&fit=crop" 
                    alt="Plot Sizes" 
                    className="rounded-3xl shadow-2xl w-full aspect-square object-cover"
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FEATURED PROJECT / COMING SOON */}
        <section id="projects" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                  <h2 className="text-4xl md:text-6xl font-bold text-brand-cyprus mb-4">Featured Project</h2>
                  <p className="text-brand-cyprus/60 text-xl">The newest addition to our legacy of trust.</p>
                </div>
                <div className="bg-brand-cyprus/5 px-6 py-3 rounded-full text-brand-cyprus font-bold tracking-widest text-sm border border-brand-cyprus/10">
                  COMING SOON
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative group rounded-[40px] overflow-hidden shadow-2xl bg-brand-cyprus">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
                  alt="Dibrugarh Meadows" 
                  className="w-full aspect-[21/9] object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24 bg-gradient-to-t from-brand-cyprus via-brand-cyprus/40 to-transparent">
                  <h3 className="text-4xl md:text-6xl font-bold text-brand-cloud mb-6">Dibrugarh Meadows</h3>
                  <p className="text-brand-cloud/80 text-xl max-w-2xl mb-10 font-medium">
                    Our most ambitious project yet. 50+ premium plots with integrated green belts, solar lighting, and 24/7 security.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button className="bg-brand-cloud text-brand-cyprus px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl">
                      Join the Waitlist
                    </button>
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-brand-cloud px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-white/20">
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 6: CONTACT & FOOTER */}
        <section id="contact" className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-brand-cloud">
          <div className="max-w-7xl mx-auto">
            <div className="bg-brand-cyprus rounded-[40px] p-12 md:p-24 text-brand-cloud relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-32 pointer-events-none"></div>
              
              <div className="lg:grid lg:grid-cols-2 gap-24 relative z-10">
                <div>
                  <Reveal>
                    <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">Secure Your Future <br /> Today.</h2>
                    <div className="flex flex-col gap-10">
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-cloud border border-white/10">
                          <Phone size={28} />
                        </div>
                        <div>
                          <p className="text-xs text-brand-cloud/50 uppercase tracking-widest mb-1 font-bold">Call Mr. Ashok Kr Neog</p>
                          <p className="text-2xl font-bold">+91 84718 87311</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-cloud border border-white/10">
                          <Mail size={28} />
                        </div>
                        <div>
                          <p className="text-xs text-brand-cloud/50 uppercase tracking-widest mb-1 font-bold">Email Us</p>
                          <p className="text-2xl font-bold">ashokneog85@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-cloud border border-white/10">
                          <MapPin size={28} />
                        </div>
                        <div>
                          <p className="text-xs text-brand-cloud/50 uppercase tracking-widest mb-1 font-bold">Main Office</p>
                          <p className="text-2xl font-bold">Dibrugarh, Upper Assam</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                <div className="mt-20 lg:mt-0">
                  <Reveal delay={200}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[30px]">
                      <h3 className="text-3xl font-bold mb-10">Request a Site Visit</h3>
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const name = formData.get('name');
                          const phone = formData.get('phone');
                          const size = formData.get('size');
                          
                          const message = `Hello Tora Developers! I would like to request a callback for land plotting.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Preferred Size:* ${size}`;
                          const whatsappUrl = `https://wa.me/918471887311?text=${encodeURIComponent(message)}`;
                          
                          window.open(whatsappUrl, '_blank');
                        }}
                        className="flex flex-col gap-8"
                      >
                        <div className="border-b border-white/20 pb-4">
                          <input 
                            type="text" 
                            name="name"
                            required
                            placeholder="Your Full Name" 
                            className="bg-transparent text-white placeholder:text-white/40 focus:outline-none w-full text-xl transition-all"
                          />
                        </div>
                        <div className="border-b border-white/20 pb-4">
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            placeholder="WhatsApp Number" 
                            className="bg-transparent text-white placeholder:text-white/40 focus:outline-none w-full text-xl transition-all"
                          />
                        </div>
                        <div className="border-b border-white/20 pb-4">
                          <select 
                            name="size"
                            required
                            className="bg-transparent text-white focus:outline-none w-full text-xl transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="text-brand-cyprus">Interested Plot Size</option>
                            <option value="1 Bigha" className="text-brand-cyprus">1 Bigha</option>
                            <option value="2.5 Bigha" className="text-brand-cyprus">2.5 Bigha</option>
                            <option value="Custom" className="text-brand-cyprus">Other / Custom</option>
                          </select>
                        </div>
                        <button 
                          type="submit"
                          className="bg-brand-cloud text-brand-cyprus py-6 rounded-2xl font-bold text-xl hover:bg-white transition-all transform active:scale-95 shadow-xl mt-4"
                        >
                          Book Your Visit
                        </button>
                      </form>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm font-medium tracking-widest">
                <p>© 2026 TORA DEVELOPERS. All rights reserved.</p>
                <div className="flex gap-12">
                  <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
                  <a href="#" className="hover:text-white transition-colors">TERMS</a>
                  <a href="#" className="hover:text-white transition-colors">DOCUMENTATION</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <BackToTop />
    </div>
    </>  
  );
};

export default App;
