import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Activity, ShieldCheck, Cpu } from 'lucide-react';

const StockPreloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Mock Ticker Data
  const tickers = [
    { s: "NIFTY 50", v: "+1.24%", c: "text-emerald-500" },
    { s: "SENSEX", v: "+0.88%", c: "text-emerald-500" },
    { s: "RELIANCE", v: "-0.42%", c: "text-rose-500" },
    { s: "HDFC BANK", v: "+2.15%", c: "text-emerald-500" },
    { s: "INFY", v: "-1.10%", c: "text-rose-500" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          className="fixed inset-0 z-[250] flex items-center justify-center bg-[#05070a] overflow-hidden"
        >
          {/* Background Ticker Stream */}
          <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex flex-col gap-8 justify-center rotate-[-15-deg] scale-125">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`flex gap-12 whitespace-nowrap text-6xl font-black tracking-tighter ${i % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
                {tickers.map((t, idx) => (
                  <span key={idx}>{t.s} {t.v}</span>
                ))}
              </div>
            ))}
          </div>

          {/* Glowing Scanner Line */}
          <motion.div 
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent z-0"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Candlestick Logo */}
            <div className="flex items-end gap-1.5 h-16 mb-8">
              {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 100}%` }}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5, delay: i * 0.1 }}
                  className={`w-3 rounded-t-sm ${i === 3 ? 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]' : 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]'}`}
                />
              ))}
            </div>

            {/* Branding */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-black tracking-tighter text-white">
                HIGHR<span className="text-blue-500">ISE</span>
              </h1>
              <div className="flex items-center justify-center gap-3 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <Activity size={12} className="text-blue-400 animate-pulse" />
                <span className="text-[10px] font-mono text-blue-400 tracking-[0.2em] uppercase">
                  Analyzing Market Volatility
                </span>
              </div>
            </div>

            {/* Data Diagnostics */}
            <div className="mt-12 w-80">
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest">
                <span>Core.Status: {progress > 80 ? 'Optimal' : 'Syncing'}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <motion.div 
                  className="h-full bg-blue-600"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600">
                  <ShieldCheck size={10} /> SEBI_AUTH_VERIFIED
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-600">
                  <Cpu size={10} /> QUANT_ALGO_V3
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Required CSS for the ticker background */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 30s linear infinite; }
        .animate-scroll-right { animation: scroll-right 30s linear infinite; }
      `}} />
    </AnimatePresence>
  );
};

export default StockPreloader;