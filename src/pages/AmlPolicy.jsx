import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Components/PageHero';
import {
  ShieldAlert, Fingerprint, Search, FileWarning,
  Users, Activity, CreditCard, BarChart3, Globe, ExternalLink
} from 'lucide-react';

const AMLPolicy = () => {
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
        title="AML Policy"
        subtitle="Provisions, frameworks, and strict protocols aligned with the Prevention of Money Laundering Act, 2002."
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. CORE BENTO GRID CONTENT */}
      <section className="pb-16 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* CARD 1: PMLA 2002 Core Framework (Large Accent Card) */}
            <motion.div
              className="lg:col-span-8 p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/30 blur-[60px] group-hover:bg-blue-600/50 transition-colors" />
              <ShieldAlert size={32} className="text-blue-400 mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-2">Legal Framework</h3>
              <h4 className="text-2xl font-bold mb-4">Prevention of Money Laundering Act, 2002</h4>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  PMLA forms the core of the legal framework put in place by India against money laundering, terrorist financing, and allied crimes. Under PMLA, all entities registered with <span className="text-white font-bold">SEBI</span> are required to furnish information on all suspicious transactions to FIU-IND.
                </p>
                <p>
                  HighRise Research strictly adheres to these regulations to ensure the integrity of the financial system.
                </p>
              </div>
            </motion.div>


            {/* CARD 2: FIU-IND Role */}
            <motion.div
              className="lg:col-span-4 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <Globe size={28} className="text-blue-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">FIU-IND Authority</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                  The Financial Intelligence Unit-India is the central national agency responsible for receiving, processing, and disseminating information on suspect financial operations.
                </p>
              </div>
              <button className="w-full py-3 bg-[#F8FAFC] text-slate-900 text-sm font-bold rounded-xl uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all border border-slate-100 flex items-center justify-center gap-2">
                Learn More <ExternalLink size={14} />
              </button>
            </motion.div>


            {/* CARD 3: Definition of Suspicious Transactions */}
            <motion.div
              className="lg:col-span-12 p-10 bg-white border border-slate-100 rounded-[2.5rem] relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[40px]" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileWarning className="text-blue-600" size={24} />
                    <h4 className="text-2xl font-black text-slate-900">Suspicious <br />Activities</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    Defined under Section 2 (1) (g) of PMLA Rules. Transactions are flagged if a person acting in good faith notes specific red flags.
                  </p>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Proceeds of crime: Reasonable grounds pointing to potential crime asset utilization.",
                    "Complexity: Unusual or unjustified complexity detected in operational steps.",
                    "No Rationale: Appears to have no economic rationale or bonafide purpose.",
                    "Terrorism: Reasonable grounds pointing directly to financing terrorist channels."
                  ].map((item, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-5 rounded-xl border border-slate-50 flex gap-3 items-start">
                      <span className="text-blue-600 font-black text-sm">0{idx + 1}.</span>
                      <p className="text-sm font-bold text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* 3. SUSPICIOUS TRANSACTION EXAMPLES (Stacked Cards instead of clunky table) */}
      <section className="pb-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-sm font-black tracking-widest text-blue-600 uppercase mb-3">Red Flags</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Examples of Suspicious Transactions</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">
              Categorized data parameters routinely mapped and reported directly to the FIU-IND system protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Category 1 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-100 transition-colors">
              <Fingerprint className="text-blue-600 mb-4" size={24} />
              <h4 className="text-lg font-bold text-slate-900 mb-3">Identity of Clients</h4>
              <ul className="text-sm text-slate-500 font-medium space-y-2 leading-relaxed">
                <li className="flex gap-2">• Identification documents found to be forged.</li>
                <li className="flex gap-2">• False address details furnished by holder.</li>
                <li className="flex gap-2">• Doubts over the real beneficiary of the account.</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-100 transition-colors">
              <Search className="text-blue-600 mb-4" size={24} />
              <h4 className="text-lg font-bold text-slate-900 mb-3">Suspicious Background</h4>
              <ul className="text-sm text-slate-500 font-medium space-y-2 leading-relaxed">
                <li className="flex gap-2">• Positive matches of names/DOB on watchlist.</li>
                <li className="flex gap-2">• Heavily linked accounts of publicly known criminals.</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-100 transition-colors">
              <Users className="text-blue-600 mb-4" size={24} />
              <h4 className="text-lg font-bold text-slate-900 mb-3">Multiple Accounts</h4>
              <ul className="text-sm text-slate-500 font-medium space-y-2 leading-relaxed">
                <li className="flex gap-2">• Massive grid of accounts sharing common signatories without rationale.</li>
                <li className="flex gap-2">• Unexplained cross-transfers with zero logic applied.</li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-100 transition-colors">
              <Activity className="text-blue-600 mb-4" size={24} />
              <h4 className="text-lg font-bold text-slate-900 mb-3">Activity in Accounts</h4>
              <ul className="text-sm text-slate-500 font-medium space-y-2 leading-relaxed">
                <li className="flex gap-2">• Sudden unexplained activity in long-dormant accounts.</li>
                <li className="flex gap-2">• Activity strictly inconsistent with declared business lines.</li>
              </ul>
            </div>

            {/* Category 5 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-100 transition-colors">
              <CreditCard className="text-blue-600 mb-4" size={24} />
              <h4 className="text-lg font-bold text-slate-900 mb-3">Nature of Transactions</h4>
              <ul className="text-sm text-slate-500 font-medium space-y-2 leading-relaxed">
                <li className="flex gap-2">• Doubtful sources of funds or overseas transfers.</li>
                <li className="flex gap-2">• Dispersed ATM or deposit drops in multi-locations.</li>
                <li className="flex gap-2">• Suspicious off-market operations in demat.</li>
              </ul>
            </div>

            {/* Category 6 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-100 transition-colors">
              <BarChart3 className="text-blue-600 mb-4" size={24} />
              <h4 className="text-lg font-bold text-slate-900 mb-3">Value of Transactions</h4>
              <ul className="text-sm text-slate-500 font-medium space-y-2 leading-relaxed">
                <li className="flex gap-2">• Layered values keeping just below reporting thresholds.</li>
                <li className="flex gap-2">• Large values inconsistent with client's mapped financial standing.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* 4. SUB FOOTER */}
      <footer className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
         <div>
            <p className="text-slate-900 font-black">HighRise Research</p>
            <p>RE No. BF00075176</p>
          </div>
          <div className="flex gap-6 flex-shrink-0">
            <p className="text-slate-400 font-bold uppercase tracking-widest">Compliance First</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AMLPolicy;
