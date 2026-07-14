import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Components/PageHero';
import {
  AlertTriangle, ShieldCheck, FileText,
  WifiOff, PhoneCall, Scale, Lock, Globe
} from 'lucide-react';

const Disclaimer = () => {
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
        title="Legal Disclaimer"
        subtitle="Please read these terms of service, non-responsibility statements, and regulatory disclosures carefully."
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
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

            {/* CARD 1: SEBI Registration & Core Identity (Large Accent Card) */}
            <motion.div
              className="lg:col-span-8 p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/30 blur-[60px] group-hover:bg-blue-600/50 transition-colors" />
              <ShieldCheck size={32} className="text-blue-400 mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-2">SEBI Registration</h3>
              <h4 className="text-2xl font-bold mb-4">HighRise Research</h4>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  We are SEBI Registration as a Research Entity under SEBI (Research Analyst) Regulations, 2014. <span className="text-white font-bold">SEBI Research Analyst No: INH000009427</span>.
                </p>
                <p>
                  We are also enlisted with BSE under the <span className="text-white font-bold">BSE Enlistment No: 5543</span>.
                </p>
                <p>
                  The entity or its associates have not been debarred/suspended by SEBI or any other regulatory authority for accessing/dealing in securities Market.
                </p>
              </div>
            </motion.div>


            {/* CARD 2: Quick Notice / CTA style */}
            <motion.div
              className="lg:col-span-4 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <FileText size={28} className="text-blue-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">Terms & Conditions</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Terms and conditions of Research and Recommendation Services are detailed in our full terms document. Please refer to the same for in-depth details.
                </p>
              </div>
              <button className="w-full py-3 bg-[#F8FAFC] text-slate-900 text-sm font-bold rounded-xl uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
                View Terms Doc
              </button>
            </motion.div>


            {/* CARD 3: Nature of Research Information */}
            <motion.div
              className="lg:col-span-6 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Globe size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Research Dissemination</h4>
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed font-medium">
                <p>The information on this website is believed to be reliable, but we do not represent or warrant its accuracy, completeness, or reliability. Sincere efforts have been made to present the right investment perspective.</p>
                <p>Research material does not constitute an offer or solicitation to buy or sell any securities. It should not form the basis of, or be relied on in connection with, any contract whatsoever.</p>
                <p>Our analysts or related persons might hold positions in the recommended securities. Predictions on market or stock directions may prove incorrect.</p>
              </div>
            </motion.div>


            {/* CARD 4: Technological Risks (SMS & Internet) */}
            <motion.div
              className="lg:col-span-6 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 blur-[30px]" />
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 relative z-10">
                <WifiOff size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Network & Software Risks</h4>
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed relative z-10 font-medium">
                <p>There are risks associated with utilizing internet and SMS-based research dissemination. Services can fail due to hardware, software, and localized Internet connection failures.</p>
                <p>While we try our best to deliver messages on time, SMS may be delayed or not delivered owing to technical reasons strictly under the client's Mobile Network authority. We cannot be held responsible for the same.</p>
              </div>
            </motion.div>


            {/* CARD 5: Client Obligations (Strict Privacy Notice) */}
            <motion.div
              className="lg:col-span-5 p-8 bg-white border border-rose-100 rounded-[2rem] shadow-sm relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 blur-[30px]" />
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
                <Lock size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Usage Restrictions</h4>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-medium">
                <p className="font-bold text-rose-700">Forwarding research materials, SMS alerts, or calls directly or indirectly to unpaid third parties is strictly prohibited.</p>
                <p>If found doing so, serious legal action can be taken. The contents of this site are meant purely for educational and private personal information.</p>
                <p>Never share your login credentials or trading/demat passwords with the Research Analyst. We hold zero liability for damages caused by unauthorized access to personal accounts.</p>
              </div>
            </motion.div>


            {/* CARD 6: Consent to Communication & DND Override */}
            <motion.div
              className="lg:col-span-7 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <PhoneCall size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Consent to Contact (DND Override)</h4>
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed font-medium">
                <p>By filling out forms like 'Quick Registration' or 'Free Trial', you give us consent to call and send transactional/promotional SMS on the provided mobile number.</p>
                <p>You provide your authorization for HighRise Research to contact you even if you are registered on the National Do Not Call Registry or the National Customer Preference Register.</p>
              </div>
            </motion.div>


            {/* CARD 7: Jurisdiction & Legal Authority (Full Width Accent) */}
            <motion.div
              className="lg:col-span-12 p-10 bg-[#F8FAFC] border border-slate-100 rounded-[2.5rem] relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="text-blue-600" size={24} />
                    <h4 className="text-2xl font-black text-slate-900">Jurisdiction & Arbitration</h4>
                  </div>
                  <div className="space-y-4 text-sm text-slate-600 font-medium">
                    <p>We consider ourselves and intend to be subject strictly to the jurisdiction only of the courts of <span className="font-bold text-slate-900">Indore, Madhya Pradesh, India</span>.</p>
                    <p className="mt-4 text-sm font-bold text-slate-400">REGISTERED OFFICE: A-172 Kanak Avenue Colony, lasudiya Mori Indore</p>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm uppercase font-black text-slate-400 tracking-widest mb-2">Regulatory Authority</p>
                      <p className="text-sm text-slate-500 leading-relaxed font-bold">
                        SEBI Office Details : SEBI Bhavan BKC Address : Plot No.C4-A, 'G' Block Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra | Tel : +91-22-26449000 / 40459000 | Fax : +91-22-26449019-22 / 40459019-22 Email: sebi@sebi.gov.in | Toll Free Investor Helpline: 1800 22 7575
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center flex-col text-center">
                  <AlertTriangle size={24} className="text-amber-500 mb-2" />
                  <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Notice</p>
                  <p className="text-sm text-slate-500 font-medium">If you do not agree with any of the terms, please exit the site.</p>
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
            <p className="text-slate-400 font-bold uppercase tracking-widest">Compliance First</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Disclaimer;
