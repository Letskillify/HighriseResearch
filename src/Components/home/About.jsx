import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    { title: "Expert Market Analysis", desc: "Research-driven insights based on data, market trends, and analytical frameworks.", icon: <Award size={18} /> },
    { title: "Risk Management", desc: "Focus on disciplined analysis with consideration of risk factors in investment decisions.", icon: <Target size={18} /> },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Image Placeholder with Glass Effect */}
          <motion.div
            className="w-full lg:w-1/2 relative group"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Decorative Orbs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/40 blur-[80px] -z-10 group-hover:bg-blue-300/50 transition-colors"></div>

            <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-[3rem] border-[12px] border-white shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="HighRise Research - Expert Analysis"
                className="w-full h-full object-cover grayscale-[20%]"
                whileHover={{ grayscale: 0, scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              {/* Floating ID Card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Lead Research Analyst</p>
                <h4 className="text-xl font-bold text-slate-900">HighRise Research</h4>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white border border-slate-200 shadow-sm"
              variants={itemVariants}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-600">The Analyst Behind HighRise</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-8 leading-tight"
              variants={itemVariants}
            >
              Empowering Investors with <br />
              <span className="text-blue-600">Structured Market Insights</span>
            </motion.h2>

            <motion.p
              className="text-lg text-slate-600 mb-10 leading-relaxed font-medium"
              variants={itemVariants}
            >
              HighRise Research, led by SEBI-registered Research Analyst, is built on the principles of transparency and disciplined analysis. We aim to simplify complex market data into well-researched investment perspectives.
            </motion.p>

            {/* Bullet Points */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 items-start group"
                  variants={itemVariants}
                >
                  <motion.div
                    className="mt-1 p-2 rounded-xl bg-blue-50 text-blue-600"
                    whileHover={{ scale: 1.1, backgroundColor: '#2563eb', color: '#ffffff' }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-lg mb-0.5">{item.title}</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link to="/about">
                <motion.button
                  className="relative flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg shadow-slate-200 overflow-hidden group transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                   
                    boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-700" />
                  </span>

                  {/* Soft glow */}
                  <span className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />

                  <span className="relative z-10 flex items-center gap-2">
                    Read More
                    <motion.span whileHover={{ scale: 1.2 }}>
                      <CheckCircle2 size={18} />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;