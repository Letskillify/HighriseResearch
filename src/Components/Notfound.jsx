import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col justify-center items-center relative overflow-hidden px-6">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      {/* Background Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      {/* Large Decorative "404" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[25rem] md:text-[40rem] font-black leading-none tracking-tight">
          404
        </h1>
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Error Icon */}
        <div className="mb-10 flex justify-center">
            <div className="p-6 rounded-[2rem] bg-blue-600/10 border border-blue-500/20 shadow-2xl shadow-blue-500/5 transition-transform hover:scale-110 duration-500">
                <AlertCircle size={56} className="text-blue-500" strokeWidth={1.5} />
            </div>
        </div>

        <span className="text-[12px] uppercase tracking-[0.8em] text-blue-500 font-black block mb-6">
            Error: Page Out of Range
        </span>
        
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Market <span className="text-blue-500 italic">Halt</span>.
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium mb-16 max-w-lg mx-auto">
            The data you are looking for has been moved or delisted. Let's redirect you to a more stable index.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/" 
            className="group flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-2xl text-sm font-black transition-all duration-500 hover:bg-blue-700 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-[0.98]"
          >
            <Home size={18} className="transition-transform group-hover:-translate-y-1" />
            Back to Dashboard
          </Link>
          
          <Link 
            to="/contact" 
            className="group flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl text-sm font-black hover:bg-white hover:text-black transition-all duration-500 active:scale-[0.98]"
          >
            <Compass size={18} className="transition-transform group-hover:rotate-180 duration-700" />
            Contact Support
          </Link>
        </div>

        {/* Navigation Map */}
        <div className="mt-24 pt-10 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
                {[
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Services', path: '/services' },
                    { name: 'Contact', path: '/contact' }
                ].map((item) => (
                    <Link 
                        key={item.name}
                        to={item.path}
                        className="text-[11px] uppercase tracking-[0.3em] font-black text-slate-500 hover:text-white transition-colors flex items-center group"
                    >
                        {item.name}
                        <ArrowLeft size={10} className="ml-2 opacity-0 group-hover:opacity-100 transition-all rotate-180" />
                    </Link>
                ))}
            </div>
        </div>
      </div>

      {/* Lateral Branding */}
      <div className="absolute bottom-12 left-12 hidden lg:block overflow-hidden h-32">
        <p className="text-[10px] tracking-[0.8em] text-white/5 uppercase vertical-text font-black select-none">
            HighRise Research Systems
        </p>
      </div>

      <div className="absolute top-12 right-12 hidden lg:block overflow-hidden h-32">
        <p className="text-[10px] tracking-[0.8em] text-white/5 uppercase vertical-text-inv font-black select-none">
            Precision Intelligence
        </p>
      </div>
    </div>
  );
};

// CSS for the vertical text branding
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .vertical-text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  .vertical-text-inv {
    writing-mode: vertical-rl;
  }
`;
document.head.appendChild(styleSheet);

export default NotFound;