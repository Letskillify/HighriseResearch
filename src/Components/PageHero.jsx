import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';

const PageHero = ({ title, subtitle, backgroundImage, className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`relative h-[400px] md:h-[480px] w-full bg-[#020617] overflow-hidden mt-24 md:mt-28 ${className}`}>
      
      {/* --- Ultra-Clear Background --- */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[8000ms] ease-out scale-110 ${
            isLoaded ? 'opacity-70 scale-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url('${backgroundImage || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"}')`,
          }}
        />
        
        {/* Radial Mask: Keeps the center image bright, darkens the edges for text pop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(2,6,23,0.8)_0%,_rgba(2,6,23,0.3)_50%,_rgba(2,6,23,0.1)_100%)]" />
        
        {/* Subtle Noise Texture for Premium Finish */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- Content: Compact & Balanced --- */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
        
        {/* Premium Badge Subtitle */}
        <div className={`mb-6 flex items-center gap-3 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="h-[1px] w-12 bg-blue-500" />
          <span className="text-sm font-black uppercase tracking-[0.5em] text-blue-500/90">
            {subtitle}
          </span>
        </div>

        {/* Headline: Tight & Powerful */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter max-w-2xl drop-shadow-sm">
          <Reveal delay={0.2}>
            {title}
          </Reveal>
        </h1>

        {/* Floating Meta Stats (Compact Row) */}
        {/* <div className={`mt-10 flex flex-wrap items-center gap-8 md:gap-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="group flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-blue-500 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            </div>
            <div>
              <p className="text-[14px] font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Status</p>
              <p className="text-[15px] font-semibold text-white tracking-tight">Active Coverage</p>
            </div>
          </div>

          
        </div> */}
      </div>

      {/* --- Luxury Accents --- */}
      {/* Corner "L" Frames (Very thin) */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-[0.5px] border-l-[0.5px] border-white/20 pointer-events-none" />
      
      {/* Vertical Side Tag */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
       
        <span className="h-20 w-[1px] bg-gradient-to-t from-transparent via-white/20 to-transparent" />
      </div>

    </section>
  );
};

export default PageHero;