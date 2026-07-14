import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../Components/PageHero';
import {
  ShieldCheck, Lock, HardDrive, BellRing,
  Smartphone, MessageSquareHeart, UserCheck, Scale
} from 'lucide-react';

const PrivacyPolicy = () => {
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
        title="Privacy Policy"
        subtitle="We understand the confidentiality of your personal information and maintain it forever."
        backgroundImage="https://plus.unsplash.com/premium_photo-1700830452563-e3f3e6ce1439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJpdmFjeXxlbnwwfHwwfHx8MA%3D%3D"
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

            {/* CARD 1: Core Commitment (Large Accent Card) */}
            <motion.div
              className="lg:col-span-7 p-10 bg-slate-900 text-white rounded-[2.5rem] relative overflow-hidden group shadow-xl"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/30 blur-[60px] group-hover:bg-blue-600/50 transition-colors" />
              <ShieldCheck size={32} className="text-blue-400 mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-2">Our Promise</h3>
              <h4 className="text-2xl font-bold mb-4">HighRise Research</h4>
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  We heavily prioritize the security of information given to us. We keep up the strict promise that we will perpetually safeguard the personal data of our clients, whether old or new.
                </p>
                <p>
                  Information like your <span className="text-white font-bold">name, mobile number, email ID, and address</span> is required exclusively to foster seamless and accurate communication regarding our services.
                </p>
              </div>
            </motion.div>


            {/* CARD 2: Physical & Electronic Safeguards */}
            <motion.div
              className="lg:col-span-5 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <Lock size={28} className="text-blue-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">Layered Safeguards</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                  We maintain rigorous physical, electronic, and procedural safeguards to protect your personal information. All your specific account information is highly password-protected.
                </p>
              </div>
              <div className="p-4 bg-[#F8FAFC] border border-slate-50 rounded-xl text-sm text-slate-400 font-medium flex items-center gap-2">
                <HardDrive size={14} className="text-blue-600" /> Infrastructure is securely managed.
              </div>
            </motion.div>


            {/* CARD 3: No Selling / Renting Clause */}
            <motion.div
              className="lg:col-span-4 p-8 bg-white border border-emerald-100 rounded-[2rem] shadow-sm relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 blur-[30px]" />
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 relative z-10">
                <UserCheck size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Data Integrity</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium relative z-10">
                Your personal information will <span className="text-slate-900 font-bold">never</span> be rented, sold, exchanged, given, or transferred to any third party person or company without your direct consent or valid reason.
              </p>
            </motion.div>


            {/* CARD 4: Purpose of Use */}
            <motion.div
              className="lg:col-span-4 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Scale size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Service Focus</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Information provided by you will solely be used for rendering the precise services for which you have actively subscribed with us, and not for any other outside purposes.
              </p>
            </motion.div>


            {/* CARD 5: Voluntary Feedback & Polls */}
            <motion.div
              className="lg:col-span-4 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <MessageSquareHeart size={20} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Polls & Contests</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                We may occasionally invite you to participate in polls, contests, or feedback strings. Replying to such outreach or participating in these interactions is entirely voluntary with no obligations.
              </p>
            </motion.div>


            {/* CARD 6: Communications & DND Override (Full Width Accent) */}
            <motion.div
              className="lg:col-span-12 p-10 bg-[#F8FAFC] border border-blue-100 rounded-[2.5rem] relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[40px]" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="text-blue-600" size={24} />
                    <h4 className="text-2xl font-black text-slate-900">Communication <br />& DND Policies</h4>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">
                    By submitting your active details on this site, you acknowledge and agree to our direct outreach protocols.
                  </p>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BellRing size={16} className="text-blue-600" />
                      <p className="text-sm font-bold text-slate-900">SMS & Calling Authorization</p>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      Registering implies you are authorizing us to reach out via SMS and voice calls whenever natively needed to properly facilitate your active services.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Scale size={16} className="text-blue-600" />
                      <p className="text-sm font-bold text-slate-900">DND Registry Override</p>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      We reserve the right to contact you via SMS notifications, even if your specific mobile number is actively registered under the national Do Not Disturb (DND) facility.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* 3. SUB FOOTER */}
      <footer className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <div>
            <p className="text-slate-900 font-black">HighRise Research</p>
            <p>© 2026 All Rights Reserved.</p>
          </div>
          <div className="flex gap-6 flex-shrink-0">
            <p className="text-slate-400 font-bold uppercase">SEBI Registration Research Analyst</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default PrivacyPolicy;
