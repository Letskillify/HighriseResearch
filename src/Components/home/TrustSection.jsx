// import React from 'react';
// import { ShieldCheck, Award, CheckCircle, FileText, Lock } from 'lucide-react';

// const TrustSection = () => {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Background radial glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>

//       <div className="max-w-4xl mx-auto px-4 text-center">
//         {/* Section Header */}
//         <div className="mb-12">
//           <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
//             Authorized & <span className="text-blue-600">Regulated</span>
//           </h2>
//           <p className="text-slate-500 font-medium">Operating with complete transparency and regulatory compliance.</p>
//         </div>

//         {/* The Certificate Card */}
//         <div className="relative group mx-auto max-w-2xl">
//           {/* Animated Glow Border */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-amber-400 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

//           <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
//             {/* Watermark Icon */}
//             <ShieldCheck className="absolute -right-8 -bottom-8 text-slate-50/50 w-64 h-64 -rotate-12" />

//             <div className="relative z-10">
//               <div className="flex flex-col items-center">
//                 <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg mb-6 shadow-amber-200/50">
//                   <Award size={40} />
//                 </div>

//                 <h3 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">
//                   SEBI Registration Research Analyst
//                 </h3>
//                 <div className="h-1 w-20 bg-blue-600 rounded-full mb-8"></div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
//                   <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
//                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Registration No.</span>
//                     <span className="text-xl font-mono font-bold text-slate-800">INH000009427</span>
//                   </div>
//                   <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center">
//                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Certificate No.</span>
//                     <span className="text-xl font-mono font-bold text-slate-800">1155</span>
//                   </div>
//                 </div>

//                 {/* Trust Badges */}
//                 <div className="flex flex-wrap justify-center gap-4">
//                   {[
//                     { icon: <CheckCircle size={14}/>, text: "Verified Identity" },
//                     { icon: <Lock size={14}/>, text: "Secure Advisory" },
//                     { icon: <FileText size={14}/>, text: "Compliant" }
//                   ].map((badge, i) => (
//                     <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 shadow-sm transition-transform hover:scale-105">
//                       {badge.icon}
//                       {badge.text}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustSection;

import { Link } from "react-router-dom";
import {
  Target,
  ShieldCheck,
  BarChart4,
  Zap,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: BarChart4,
      color: "text-blue-600",
      title: "Structured Analysis",
      desc: "Data-driven research across equity and index markets.",
      size: "lg:col-span-4",
    },
    {
      icon: ShieldCheck,
      color: "text-emerald-600",
      title: "Regulatory Compliance",
      desc: "SEBI-registered research framework focused on transparency.",
      size: "lg:col-span-4",
    },
    {
      icon: Zap,
      color: "text-amber-500",
      title: "Timely Communication",
      desc: "Updates aligned with evolving market conditions.",
      size: "lg:col-span-4",
    },
    {
      icon: Target,
      color: "text-indigo-600",
      title: "Risk Awareness",
      desc: "Focus on evaluating risks alongside opportunities.",
      size: "lg:col-span-6",
    },
    {
      icon: Clock,
      color: "text-rose-500",
      title: "Research Continuity",
      desc: "Ongoing tracking and analysis of covered markets.",
      size: "lg:col-span-6",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-blue-100/40 blur-[120px] animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between mb-16 gap-8"
        >
          <div>
           

            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Why Investors Choose <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                HighRise Research
              </span>
            </h2>
          </div>

          {/* <p className="text-slate-500 max-w-sm">
            We focus on delivering structured, research-driven insights to support informed decision-making in dynamic market conditions.
          </p> */}
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  rotateY: -3,
                }}
                className={`${f.size} group relative p-8 rounded-[2.5rem] bg-[#F8FAFC] border border-slate-100 shadow-sm hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500`}
              >
                {/* Glow Hover Effect */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6"
                >
                  <Icon className={f.color} size={24} />
                </motion.div>

                {/* Title */}
                <h4 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-2">
                  {f.title}
                  <CheckCircle2
                    size={16}
                    className="text-blue-500 opacity-0 group-hover:opacity-100 transition"
                  />
                </h4>

                {/* Desc */}
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.desc}
                </p>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </motion.div>
            );
          })}

          {/* CTA CARD */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-12 mt-4 p-10 rounded-[3rem] bg-slate-900 relative overflow-hidden group"
          >
            {/* Animated Glow */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 blur-[100px]"
            ></motion.div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to trade with precision?
                </h4>
                <p className="text-slate-400">
                  Start your premium journey today.
                </p>
              </div>

              <Link to="/services">
                <motion.button
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 0px 25px rgba(59,130,246,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest transition-all"
                >
                  Join Premium
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;