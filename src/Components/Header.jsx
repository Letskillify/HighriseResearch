import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { Menu, X, MessageCircle, ChevronRight, Zap, ShieldCheck, ShieldAlert, ChevronDown, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [services, setServices] = useState([]);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isPoliciesHovered, setIsPoliciesHovered] = useState(false);
  const { isPaused, toggleAnimation } = useAnimation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/services' },
    { name: 'Investor Charter', href: '/investor' },
    { name: 'Complaints', href: '/complaints' },
    { name: 'More', href: '#' },
  ];

  const policyLinks = [
    // { name: 'Privacy Policy', href: '/privacy' },
    // { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Pay Now', href: '/payment' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'AML Policy', href: '/aml' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'KYC & Agreement', href: '/kyc' },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, "services"));
      const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Sort by indexNumber
      servicesData.sort((a, b) => (Number(a.indexNumber) || 0) - (Number(b.indexNumber) || 0));
      setServices(servicesData);
    };
    fetchServices();

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion Variants for Mobile Menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring", stiffness: 400, damping: 30,
        staggerChildren: 0.05, delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8 py-4 md:py-6 pointer-events-none flex justify-center">
      {/* Floating Island Container */}
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`relative w-full max-w-7xl pointer-events-auto transition-colors duration-500
          ${isScrolled || isOpen
            ? 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem]'
            : 'bg-transparent border-transparent'
          }`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">

          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
  {/* <div className="relative">
    <motion.div
      whileHover={{ rotate: 12, scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-200"
    >
      <Zap size={22} fill="currentColor" className="text-blue-400" />
    </motion.div>
    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
  </div> */}

  <div className="flex flex-col justify-center">
    <div className="flex flex-col">
      <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 leading-none">
        HIGHRISE <span className="text-blue-600">RESEARCH</span>
      </span>
      
    </div>
    <span className="text-[9px] font-bold tracking-wider text-slate-600 flex items-center gap-1 uppercase mt-1.5 opacity-90">
      <ShieldCheck size={11} className="text-emerald-500" /> Research Analyst
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-slate-100/60 p-1.5 rounded-full border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => (
              link.name === 'Research' ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setIsServicesHovered(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsServicesHovered(false);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsServicesHovered(prev => !prev)}
                    onFocus={() => setIsServicesHovered(true)}
                    aria-expanded={isServicesHovered}
                    aria-haspopup="true"
                    aria-label="Research services menu"
                    className="relative flex items-center gap-1 px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 focus-visible:text-blue-600 transition-colors duration-300 group/link rounded-full outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 relative z-10 ${isServicesHovered ? 'rotate-180' : ''}`} />
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 scale-90 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-300 shadow-sm border border-slate-100/50" />
                  </button>
                  <AnimatePresence>
                    {isServicesHovered && (
                      <motion.div
                        role="menu"
                        aria-label="Research services"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50"
                      >
                        <Link
                          to="/services"
                          role="menuitem"
                          onClick={() => setIsServicesHovered(false)}
                          className="block px-4 py-2.5 text-sm font-black text-blue-600 hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-none rounded-lg transition-colors border-b border-slate-100 mb-1"
                        >
                          View All Services →
                        </Link>
                        {services.map(service => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            role="menuitem"
                            onClick={() => setIsServicesHovered(false)}
                            className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 focus-visible:bg-slate-100 focus-visible:text-blue-600 focus-visible:outline-none rounded-lg transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.name === 'More' ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsPoliciesHovered(true)}
                  onMouseLeave={() => setIsPoliciesHovered(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setIsPoliciesHovered(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setIsPoliciesHovered(false);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setIsPoliciesHovered(prev => !prev)}
                    onFocus={() => setIsPoliciesHovered(true)}
                    aria-expanded={isPoliciesHovered}
                    aria-haspopup="true"
                    aria-label="More legal policies and compliance links"
                    className="relative flex items-center gap-1 px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 focus-visible:text-blue-600 transition-colors duration-300 group/link rounded-full outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 relative z-10 ${isPoliciesHovered ? 'rotate-180' : ''}`} />
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 scale-90 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-300 shadow-sm border border-slate-100/50" />
                  </button>
                  <AnimatePresence>
                    {isPoliciesHovered && (
                      <motion.div
                        role="menu"
                        aria-label="Legal policies"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50"
                      >
                        {policyLinks.map(policy => (
                          <Link
                            key={policy.name}
                            to={policy.href}
                            role="menuitem"
                            onClick={() => setIsPoliciesHovered(false)}
                            className="block px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 focus-visible:bg-slate-100 focus-visible:text-blue-600 focus-visible:outline-none rounded-lg transition-colors"
                          >
                            {policy.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="relative px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors duration-300 group/link"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Hover Pill Background */}
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 scale-90 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-300 shadow-sm border border-slate-100/50" />
                </Link>
              )
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* WCAG 2.2.2: Pause/Play animations toggle */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleAnimation}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-full transition-all border shadow-sm cursor-pointer ${
                isPaused
                  ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                  : 'bg-slate-100/90 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
              title={isPaused ? "Play animations" : "Pause animations"}
              aria-label={isPaused ? "Play animations" : "Pause animations"}
              aria-pressed={isPaused}
            >
              {isPaused ? (
                <>
                  <Play size={13} className="fill-amber-700 text-amber-700" />
                  <span className="hidden sm:inline">Play animation</span>
                </>
              ) : (
                <>
                  <Pause size={13} className="fill-slate-700 text-slate-700" />
                  <span className="hidden sm:inline">Pause animation</span>
                </>
              )}
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/alerts"
                className="hidden sm:flex items-center justify-center w-10 h-10 text-red-500 bg-red-50 hover:bg-red-100 border border-red-100 rounded-full transition-colors relative"
                title="Security Alerts"
                aria-label="Security Alerts"
              >
                <ShieldAlert size={18} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse border-2 border-white"></span>
              </Link>
            </motion.div>

            <Link to="/contact" className="hidden sm:block" aria-label="Contact us">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group px-6 py-2.5 bg-slate-900 text-white rounded-full overflow-hidden"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <span className="relative z-10 flex items-center gap-2 text-sm font-bold tracking-wide">
                  Contact us
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2.5 text-slate-600 bg-slate-100/80 hover:bg-slate-200 rounded-xl transition-colors"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-white/95 backdrop-blur-3xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden p-4"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.div
                    variants={mobileItemVariants}
                    key={link.name}
                  >
                    {link.name === 'Policies' ? (
                      <div className="flex flex-col">
                        <div className="px-5 py-4 text-lg font-bold text-slate-400 uppercase tracking-widest text-[10px] mt-4">
                          {link.name}
                        </div>
                        {policyLinks.map((policy) => (
                          <Link
                            key={policy.name}
                            to={policy.href}
                            className="px-8 py-3 text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-2xl transition-colors flex items-center justify-between group"
                            onClick={() => setIsOpen(false)}
                          >
                            {policy.name}
                            <ChevronRight size={16} className="text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="px-5 py-4 text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-2xl transition-colors flex items-center justify-between group"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div variants={mobileItemVariants} className="pt-3 mt-2 border-t border-slate-100 px-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={toggleAnimation}
                    className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-bold rounded-2xl border transition-all ${
                      isPaused
                        ? 'bg-amber-50 text-amber-900 border-amber-300'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                    aria-pressed={isPaused}
                  >
                    {isPaused ? <Play size={15} className="fill-current text-amber-700" /> : <Pause size={15} className="fill-current text-slate-700" />}
                    <span>{isPaused ? "Play animations" : "Pause animations"}</span>
                  </button>

                  <Link to="/contact" onClick={() => setIsOpen(false)} aria-label="Join Premium Access">
                    <button className="w-full flex items-center justify-center gap-2 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-all">
                      Join Premium Access
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Global Style for the shimmer effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default Navbar;