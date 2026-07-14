import { Link } from 'react-router-dom';
import { Play, ArrowRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-white">
      {/* 1. Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-[30%] opacity-80"
        >
          {/* Replace with your actual stock market video URL */}
          <source
            src="videos/stock.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft Light Overlay (Apple Style) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600"
              variants={itemVariants}
            >
              <span className="text-xs font-black uppercase tracking-widest"></span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]"
              variants={itemVariants}
            >
              Elevate your  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                trading intelligence
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 max-w-lg font-medium leading-relaxed"
              variants={itemVariants}
            >
              Equity and index research based on structured data analysis and market insights.
              Advanced frameworks tailored for retail participants across India.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <Link to="/services">
                <motion.button
                  className="relative px-8 py-4 bg-slate-900 text-white rounded-full font-bold flex items-center gap-2 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-700" />
                  </span>

                  {/* Subtle glow overlay */}
                  <span className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />

                  <span className="relative z-10 flex items-center gap-2">
                    View Premium Plans
                    <motion.span whileHover={{ x: 4 }}>
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>

              <Link to="/about">
                <motion.button
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Play size={14} fill="currentColor" />
                  </div>
                  How we work
                </motion.button>
              </Link>
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div
              className="flex items-center gap-6 pt-8 border-t border-slate-100"
              variants={itemVariants}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="user"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
             
            </motion.div>
          </motion.div>

          {/* Right Content: Floating Card Mockup */}
          <motion.div
            className="hidden lg:block relative"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative z-10 bg-white/40 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
              animate={floatAnimation}
            >
              <div className="flex items-center justify-between mb-8">
                <motion.div
                  className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <BarChart3 size={24} />
                </motion.div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Live Performance</p>
                  <motion.p
                    className="text-xl font-black text-emerald-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    +24.5%
                  </motion.p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Recent Research Wins</p>
                {[
                  { label: 'Nifty Options', profit: '+120 Pts', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { label: 'Equity Cash', profit: '+8.4%', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { label: 'Equity Future', profit: '+45 Pts', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/50 border border-slate-100/50 hover:bg-white transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[11px] font-bold text-slate-600">{item.label}</span>
                    <span className={`text-[10px] font-black ${item.color} ${item.bg} px-2 py-1 rounded-lg`}>{item.profit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Small Decorative Card */}
            <motion.div
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
            >
              <motion.div
                className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Globe size={20} />
              </motion.div>
              <div>
                <p className="text-xs font-black text-slate-900">Nifty 50 Expert</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Real-time Analysis</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;