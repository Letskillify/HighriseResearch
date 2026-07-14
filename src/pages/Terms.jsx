import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Components/PageHero';
import { 
  FileText, ShieldCheck, UserCheck, AlertOctagon, 
  Info, Scale, Cpu, Mail, Phone
} from 'lucide-react';

const TermsAndConditions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans antialiased text-slate-900 pb-20">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Terms & Conditions"
        subtitle="Detailed terms of Research and Recommendation Services provided by HighRise Research."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. DISCIPLINARY & ASSOCIATE STATUS (Bento Grid) */}
      <section className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Disciplinary History */}
          <motion.div variants={itemVariants} className="lg:col-span-8 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><ShieldCheck size={24}/></div>
              <h2 className="text-2xl font-bold">Disciplinary History</h2>
            </div>
            <div className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
              <p>No penalties or directions have been issued by SEBI under the SEBI Act against the Research Analyst relating to services provided by HighRise Research.</p>
              <p>There are no pending material litigations, legal proceedings, or investigations initiated by any regulatory authority against HighRise Research or its employees.</p>
            </div>
          </motion.div>

          {/* Details of Associates */}
          <motion.div variants={itemVariants} className="lg:col-span-4 p-8 bg-slate-900 text-white rounded-[2rem] shadow-xl relative overflow-hidden">
             <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck size={24} className="text-blue-400"/>
                <h2 className="text-2xl font-bold">Associates</h2>
              </div>
              <p className="text-slate-400 text-sm font-medium">Currently, HighRise Research has <span className="text-white font-bold text-lg block mt-2">No Associates.</span></p>
             </div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600/20 blur-3xl" />
          </motion.div>

          {/* 3. DISCLOSURES SECTION */}
          <motion.div variants={itemVariants} className="lg:col-span-12 p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><Info size={24}/></div>
              <h2 className="text-2xl font-bold">Regulatory Disclosures</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "HighRise Research may have financial interest or beneficial ownership in recommended securities (disclosed at time of advice).",
                "No actual or potential conflicts of interest with issuers of products/securities.",
                "No compensation received from subject companies in the past 12 months.",
                "No investment banking, merchant banking, or brokerage services provided to subject companies in the past year.",
                "HighRise Research analysts have not served as an officer, director, or employee of the subject company.",
                "HighRise Research has not been engaged in market making activity for the subject company."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-slate-50 pb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-sm text-slate-600 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. THE "MOST IMPORTANT" TERMS (High Emphasis) */}
          <motion.div variants={itemVariants} className="lg:col-span-12 space-y-6">
            <div className="flex items-center gap-3 px-4">
              <AlertOctagon className="text-amber-500" />
              <h2 className="text-3xl font-black uppercase tracking-tight">Most Important Terms</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Point 1 & 11: Security & Trade Execution */}
              <div className="p-8 bg-rose-50 border border-rose-100 rounded-[2rem]">
                <h4 className="text-lg font-bold text-rose-900 mb-3">No Trade Execution</h4>
                <p className="text-sm text-rose-800 font-medium leading-relaxed">
                  HighRise Research cannot execute trades on your behalf. Never permit any analyst to carry out purchase/sell transactions. **Never share login credentials or OTPs** for your Bank or Demat accounts.
                </p>
              </div>

              {/* Point 2 & 3: Fees */}
              <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2rem]">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Fee Structure</h4>
                <p className="text-sm text-blue-800 font-medium leading-relaxed">
                  Fee limit is **₹1,51,000/- per annum** per family for individual/HUF clients. Advance fees shall not exceed one quarter as per SEBI norms. No cash payments allowed.
                </p>
              </div>

              {/* Point 5, 6, 7: Market Risk */}
              <div className="p-8 bg-amber-50 border border-amber-100 rounded-[2rem]">
                <h4 className="text-lg font-bold text-amber-900 mb-3">Zero Guarantee</h4>
                <p className="text-sm text-amber-800 font-medium leading-relaxed">
                  We never offer profit sharing, guaranteed profits, or "Sure Shots." Past performance does not guarantee future returns. Trading is subject to market risks.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5. GRIEVANCE REDRESSAL (Interactive Cards) */}
          <motion.div variants={itemVariants} className="lg:col-span-8 p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Scale className="text-blue-600" /> Grievance Redressal
            </h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-slate-900">Internal Resolution</h4>
                  <div className="mt-2 space-y-1 text-sm text-slate-500 font-medium">
                    <p className="flex items-center gap-2"><Phone size={14}/> +91-98272 16004</p>
                    <p className="flex items-center gap-2"><Mail size={14}/> compliance@highriseresearch.com</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-slate-900">SEBI SCORES</h4>
                  <p className="mt-1 text-sm text-slate-500 font-medium italic underline">www.scores.sebi.gov.in</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-slate-900">Smart ODR</h4>
                  <p className="mt-1 text-sm text-slate-500 font-medium italic underline">smartodr.in</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. AI DISCLOSURE (Modern Feature Card) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 p-8 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] flex flex-col justify-center text-center">
            <Cpu className="mx-auto text-indigo-600 mb-4" size={40} />
            <h4 className="text-xl font-bold text-indigo-900 mb-3">AI Use Disclosure</h4>
            <p className="text-sm text-indigo-800/80 font-medium leading-relaxed">
              In compliance with SEBI guidelines, we declare that **no Artificial Intelligence (AI) tools** are currently used in our research preparation. All outputs are derived via **human analysis.**
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* FOOTER DISCLOSURE */}
      
    </div>
  );
};

export default TermsAndConditions;
