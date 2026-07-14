import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Components/PageHero';
import { 
  RefreshCcw, ShieldCheck, AlertCircle, 
  ClipboardList, CreditCard, Scale, HelpCircle 
} from 'lucide-react';

const RefundPolicy = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans antialiased text-slate-900 pb-20">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Refund Policy"
        subtitle="We value our customers and are committed to providing the best services."
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. CORE BENTO GRID CONTENT */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* CARD 1: Core Commitment & Philosophy (Large Accent Card) */}
            <motion.div 
              className="lg:col-span-7 p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/30 blur-[60px] group-hover:bg-blue-600/50 transition-colors" />
              <HelpCircle size={32} className="text-blue-400 mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-2">Our Philosophy</h3>
              <h4 className="text-2xl font-bold mb-4">Service Commitment</h4>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  HighRise Research is heavily committed to maximizing satisfaction levels. However, clients must realize that <span className="text-white font-bold">we do not offer a 100% guarantee on our calls.</span>
                </p>
                <p>
                  If for some unforeseen reason you are not satisfied with our services, you may call us to seek direct guidance on future research calls. We will give our best effort to increase satisfaction and optimize the experience.
                </p>
              </div>
            </motion.div>


            {/* CARD 2: All Sales Final (Alert Block) */}
            <motion.div 
              className="lg:col-span-5 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <AlertCircle size={28} className="text-amber-500 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">General Sales Condition</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                  All sales are final. Before proceeding with any active subscriptions, please ensure that our listed products and services perfectly meet your investment needs.
                </p>
              </div>
              <div className="p-4 bg-[#F8FAFC] border border-slate-50 rounded-xl text-sm text-slate-400 font-medium">
                Detailed terms are mapped out in the general Terms & Conditions document.
              </div>
            </motion.div>


            {/* CARD 3: SEBI Suspension Protocols */}
            <motion.div 
              className="lg:col-span-6 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 blur-[30px]" />
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 relative z-10">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">SEBI Suspension Protections</h4>
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed relative z-10 font-medium">
                <p>HighRise Research reserves the right to suspend or terminate the provision of research services to clients in the event of suspension or cancellation of its registration with SEBI.</p>
                <p className="text-slate-900 font-bold">In case registration is suspended for over 60 days or cancelled, the Research Analyst shall refund subscription fees to the client on a pro-rata basis for the unexpired period.</p>
              </div>
            </motion.div>


            {/* CARD 4: Advance Fees & Premature Termination */}
            <motion.div 
              className="lg:col-span-6 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <CreditCard size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Advance Fees & Termination</h4>
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed font-medium">
                <p>We may charge fees in advance if agreed by you. Such advance protocol will not exceed the period stipulated by SEBI (presently capped at <span className="font-bold text-slate-900">one quarter</span>).</p>
                <p>In case of pre-mature termination of services by either the client or by our side, the client shall be entitled to seek a refund of proportionate fees only for the unexpired period.</p>
              </div>
            </motion.div>


            {/* CARD 5: Pre-payment Checklist (Full Width Accent) */}
            <motion.div 
              className="lg:col-span-12 p-10 bg-[#F8FAFC] border border-emerald-100 rounded-[2.5rem] relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 blur-[40px]" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <ClipboardList className="text-emerald-600" size={24} />
                    <h4 className="text-2xl font-black text-slate-900">Pre-payment Checklist</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    We strongly recommend that all visitors and potential clients review these elements before initiating any payments.
                  </p>
                </div>
                
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Read all information about our services and support.",
                    "Review our standard Terms and Conditions document.",
                    "Analyze our Data Privacy Policy rules.",
                    "Acknowledge all financial parameters mapped here."
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-emerald-50 flex gap-3 items-start">
                      <RefreshCcw size={14} className="text-emerald-600 mt-1 flex-shrink-0" />
                      <p className="text-sm font-bold text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* 3. SUB FOOTER */}
      <footer className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>© 2026 HighRise Research. All Rights Reserved.</p>
          <div className="flex gap-6">
            <p className="text-slate-400 font-bold uppercase tracking-widest">Trust & Transparency</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default RefundPolicy; 
