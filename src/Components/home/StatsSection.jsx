import React from "react";
import { TrendingUp, Users, ShieldCheck, BarChart3, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0], // Premium cubic bezier
      },
    },
  };

  const statsData = [
    {
      icon: BarChart3,
      value: "10 Years",
      label: "Market Experience",
      color: "text-blue-600",
      bg: "bg-blue-50",
      glow: "group-hover:shadow-blue-500/10",
    },
    {
      icon: Zap,
      value: "Real-time",
      label: "Instant Alerts",
      color: "text-amber-600",
      bg: "bg-amber-50",
      glow: "group-hover:shadow-amber-500/10",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Active Clients",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      glow: "group-hover:shadow-indigo-500/10",
    },
    {
      icon: ShieldCheck,
      value: "SEBI Reg.",
      label: "Research Analyst",
      color: "text-sky-600",
      bg: "bg-sky-50",
      glow: "group-hover:shadow-sky-500/10",
    },
  ];

  return (
    <section className="pt-16 md:py-15 bg-[#fafafa] relative overflow-hidden">
      {/* Background Premium Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group relative p-5 md:p-8 rounded-2xl md:rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_12px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] ${stat.glow} transition-all duration-500 ease-out flex flex-col justify-between h-full`}
              >
                {/* Subtle top-light gradient effect on hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon Container with Glassmorphic touch */}
                    <div
                      className={`w-10 h-10 md:w-14 md:h-14 ${stat.bg} ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm`}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                    </div>

                    {/* Value */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                      {stat.value}
                    </h3>
                  </div>

                  {/* Label */}
                  <p className="mt-1 md:mt-2 text-[10px] md:text-xs font-semibold text-slate-400 uppercase tracking-wider truncate">
                    {stat.label}
                  </p>
                </div>

                {/* Corner accent border line on hover */}
                <div className="absolute top-0 right-0 w-0 h-[1px] bg-gradient-to-r from-transparent to-slate-200 transition-all duration-500 group-hover:w-full rounded-tr-2rem" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-l from-transparent to-slate-200 transition-all duration-500 group-hover:w-full rounded-bl-2rem" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;