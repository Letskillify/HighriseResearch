import React from 'react';
import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Award, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  MousePointer2, 
  Search, 
  PieChart, 
  Briefcase,
  Layers,
  Activity,
  Lock
} from 'lucide-react';

const About = () => {
  const philosophyPoints = [
    { title: 'Capital Protection First', desc: 'Capital protection comes before profit generation.', icon: <Lock className="text-blue-600" /> },
    { title: 'Less is More', desc: 'Quality trades over quantity—we avoid overtrading.', icon: <Zap className="text-blue-600" /> },
    { title: 'Discipline Over Emotion', desc: 'Discipline beats emotions in the long run for sustainable success.', icon: <Target className="text-blue-600" /> },
    { title: 'Built Consistency', desc: 'Consistency is built through process, not chased through luck.', icon: <Activity className="text-blue-600" /> },
  ];

  const processSteps = [
    { title: 'Market Analysis', desc: 'Understanding trend, momentum, and key levels.', icon: <Search /> },
    { title: 'Trade Selection', desc: 'Identifying high-confluence opportunities.', icon: <MousePointer2 /> },
    { title: 'Risk Planning', desc: 'Defining stop-loss and capital allocation.', icon: <PieChart /> },
    { title: 'Execution Guidance', desc: 'Clear, actionable trade instructions.', icon: <TrendingUp /> },
  ];

  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <PageHero
        title="About Us."
        subtitle="Bringing Discipline, Clarity, and Structure to Trading"
        backgroundImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000"
      />

      {/* --- Introduction Section (DO NOT EDIT) --- */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* <span className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full">
              Who We Are
            </span> */}
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight text-slate-900">
              HighRise Research <span className="text-blue-600 italic">bridges the gap</span> between complex market data and structured market insights.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded with a vision to make high-quality financial research accessible, HighRise Research provides equity and index research services to retail participants across India. Our approach is built on transparency, data-driven analysis, and disciplined research frameworks.
            </p>
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Our Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-[2rem] text-white shadow-xl hidden md:block">
              <TrendingUp size={48} className="mb-4" />
              <p className="text-2xl font-black">10 Years</p>
              <p className="text-blue-100 font-medium">Market Experience</p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- End Introduction Section --- */}

      {/* --- Our Specialized Advisory Section --- */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              A SEBI-Registered <span className="text-blue-500">Advisory Firm.</span>
            </h2>
            {/* <p className="text-slate-400 text-lg leading-relaxed">
              We specialize in high-conviction intraday strategies and option signals, designed for precision and risk control.
            </p> */}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-700"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Index Futures</h3>
              <p className="text-slate-400 mb-6">Nifty 50 & Bank Nifty Intraday Strategies focused on trend momentum and key levels.</p>
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Intraday Precision
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-700"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Layers className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Index Options</h3>
              <p className="text-slate-400 mb-6">Focused Buy Signals in Call & Put Options, primarily utilizing ITM (In-The-Money) strikes for better risk-reward.</p>
              <div className="flex items-center gap-2 text-blue-400 font-bold">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                ITM Focused
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Our Philosophy --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            {/* <span className="text-blue-600 font-black tracking-widest text-xs uppercase">The Foundation</span> */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 tracking-tight">Our Philosophy</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Successful trading is not about chasing every move—it’s about waiting for the right opportunity and executing with discipline.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{point.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- What Makes Us Different --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">What Makes Us <br /><span className="text-blue-600">Different.</span></h2>
            <div className="space-y-6">
              {[
                { title: 'High-Probability Setups', desc: 'Clear entry and exit levels backed by logic.' },
                { title: 'Strict Risk Management', desc: 'Defined stop-loss and capital allocation in every trade.' },
                { title: 'Zero Overtrading', desc: 'Selective, high-conviction trades only.' },
                { title: 'No False Promises', desc: 'Clear communication without guaranteed return gimmicks.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="bg-slate-900 p-8 md:p-12 rounded-[3.5rem] text-white">
            <ShieldCheck size={48} className="text-blue-500 mb-8" />
            <h3 className="text-3xl font-bold mb-6 italic leading-tight">"We don’t believe in gambling in the markets—we believe in calculated, disciplined execution."</h3>
            <div className="h-1 w-20 bg-blue-500 rounded-full mb-8"></div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-black">Our Commitment</p>
          </div> */}
        </div>
      </section>

      {/* --- Who We Serve --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight text-left">Who We Serve.</h2>
              <p className="text-slate-600 text-lg">Our services are designed for those who value structure over noise.</p>
            </div>
            <div className="hidden md:block">
              <Users size={80} className="text-slate-100" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-10 rounded-[2.5rem] flex gap-6 items-start">
              <Briefcase className="text-blue-600 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Working Professionals</h3>
                <p className="text-slate-600">Designed for those with limited screen time who need clear, actionable signals.</p>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] flex gap-6 items-start">
              <TrendingUp className="text-slate-900 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Strategic Traders</h3>
                <p className="text-slate-600">Individuals looking for structured intraday strategies and long-term consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Process --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Our Structured Framework</h2>
            <p className="text-slate-400 text-lg">Every recommendation goes through a rigorous four-step process.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 hidden lg:block -z-0"></div>
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 text-center group">
                <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-700 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                  {React.cloneElement(step.icon, { size: 32, className: "group-hover:text-white transition-colors" })}
                </div>
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-12 mb-8 border-4 border-slate-900 text-xs font-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Transparency & Vision --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="text-blue-600" size={32} />
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Transparency & Compliance</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  'SEBI-Registered Entity',
                  'No Guaranteed Returns',
                  'Proper Risk Disclosure',
                  'Complete Transparency',
                  'Compliance-First Approach',
                  'Ethics Driven'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* <div className="space-y-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[2.5rem] bg-blue-600 text-white shadow-xl shadow-blue-100"
              >
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-80">Our Vision</h4>
                <p className="text-xl font-bold">To become a trusted name in the trading industry, known for discipline, integrity, and consistent performance.</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-xl shadow-slate-100"
              >
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 opacity-80">Our Mission</h4>
                <p className="text-lg font-bold">To help traders protect capital, trade with confidence, and build long-term consistency through research-driven strategies.</p>
              </motion.div>
            </div> */}
          </div>

          {/* <div className="mt-20 p-12 bg-blue-50 rounded-[3rem] text-center border border-blue-100">
            <p className="text-2xl font-bold text-slate-900 leading-relaxed max-w-4xl mx-auto">
              "We don’t chase profits—we focus on protecting capital and executing disciplined trades, because in the long run, <span className="text-blue-600 italic underline decoration-blue-200 underline-offset-4">consistency always outperforms speculation.</span>"
            </p>
          </div> */}
        </div>
      </section>

      {/* --- Legal Links Section --- */}
      {/* <section className="py-12 px-6 md:px-16 max-w-7xl mx-auto text-center border-t border-slate-100">
        <a 
          href="/rights-and-obligations" 
          className="text-lg font-black text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center gap-2 group"
        >
          Rights and Obligations of Clients and SEBI-Registered Research Analyst
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </section> */}
    </main>
  );
};

export default About;

