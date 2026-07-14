import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../Firebase';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Coins, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  PieChart, 
  Activity, 
  Briefcase, 
  LineChart,
  Wallet
} from 'lucide-react';

// --- Icon Mapping Helper ---
const getServiceIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('cash') || t.includes('equity')) {
    if (t.includes('option')) return <Target size={28} />;
    if (t.includes('future')) return <TrendingUp size={28} />;
    return <Coins size={28} />;
  }
  if (t.includes('index')) {
    if (t.includes('option')) return <Zap size={28} />;
    if (t.includes('future')) return <Layers size={28} />;
    return <BarChart3 size={28} />;
  }
  if (t.includes('portfolio') || t.includes('wealth')) return <Briefcase size={28} />;
  if (t.includes('analysis') || t.includes('research')) return <LineChart size={28} />;
  if (t.includes('crypto')) return <Wallet size={28} />;
  if (t.includes('trading') || t.includes('market')) return <Activity size={28} />;
  
  // Default icon
  return <PieChart size={28} />;
};

// --- Sub-Component: Spotlight Card ---
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onClick={() => navigate(`/services/${service.id}`)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
    >
      {/* Interactive Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.07),
              transparent 80%
            )
          `,
        }}
      />

      <div>
        {/* Icon Header */}
        <div className="flex items-start justify-between">
          <motion.div 
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg`}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            {getServiceIcon(service.title)}
          </motion.div>
          <motion.div 
            className="rounded-full border border-slate-100 p-2 text-slate-400 group-hover:text-blue-600 transition-colors"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="mt-8">
          <h4 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h4>
          <p className="mt-4 text-slate-500 leading-relaxed font-medium">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-10 flex items-center gap-3 overflow-hidden">
        <div className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
        <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
          View Strategy
        </span>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const q = query(collection(db, "services"), orderBy("indexNumber", "asc"));
        const querySnapshot = await getDocs(q);
        const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setServiceList(servicesData);
      } catch (error) {
        console.error("Error fetching services:", error);
        // Fallback to manual sort if query fails (e.g. missing index)
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        servicesData.sort((a, b) => (Number(a.indexNumber) || 0) - (Number(b.indexNumber) || 0));
        setServiceList(servicesData);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/20 rounded-full blur-[120px]" />
        {/* Fine Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full"
            >
           
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter"
            >
              Research Driven <br />
              <span className="text-slate-400/80 font-light italic">Insights</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-slate-500 font-medium leading-relaxed border-l-2 border-blue-600 pl-6"
          >
            Structured market analysis tailored for retail investors across equity and index segments.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* Institutional CTA Card - Distinct Premium Style */}
          
        </div>
      </div>
    </section>
  );
};

export default Services;