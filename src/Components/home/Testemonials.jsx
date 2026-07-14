import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: "Arjun Mehta",
      role: "Portfolio Investor",
      img: "https://i.pravatar.cc/150?u=arjun",
      text: "The Index Option calls are incredibly precise. I've been following HighRise's research for 2 years, and the risk management is top-notch.",
      rating: 5
    },
    {
      name: "Sneha Kapoor",
      role: "Day Trader",
      img: "https://i.pravatar.cc/150?u=sneha",
      text: "HighRise Research changed how I look at market trends. Their institutional-grade analysis is far superior to regular telegram tips.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Equity Trader",
      img: "https://i.pravatar.cc/150?u=rahul",
      text: "Highly transparent service. Unlike others, they are honest about stop-losses, and their risk-reward management is genuinely institutional-grade.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Trusted by growing base  <br />
              <span className="text-blue-600">of Clients</span>
            </h2>
          </div>
          <motion.div 
            className="hidden md:flex gap-2 mb-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
             <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200 text-xs font-bold text-slate-600">
               4.9/5 Average Rating
             </div>
          </motion.div>
        </motion.div>

        {/* Carousel / Grid Container */}
        <motion.div 
          className="flex overflow-x-auto pb-12 gap-8 scroll-smooth no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reviews.map((user, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="min-w-[320px] snap-center p-10 bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all group"
            >
              <motion.div 
                className="text-blue-100 mb-6"
                whileHover={{ scale: 1.1, color: '#93c5fd' }}
              >
                <Quote size={40} />
              </motion.div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(user.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className="text-slate-600 italic font-medium leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                "{user.text}"
              </motion.p>

              <motion.div 
                className="flex items-center gap-4 border-t border-slate-100 pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <motion.img 
                    src={user.img} 
                    alt={user.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm">{user.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;