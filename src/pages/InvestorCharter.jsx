import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';
import {
  Shield, Target, Eye, BookOpen, Briefcase,
  Scale, MessageSquare, Bell, CheckCircle2,
  XCircle, AlertTriangle, ArrowRight, MapPin, Phone, Mail
} from 'lucide-react';

const InvestorCharter = () => {
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
    <div className="bg-[#F8FAFC] min-h-screen font-sans antialiased text-slate-900">
      <PageHero
        title="Investor Charter"
        subtitle="Your Rights and Our Responsibilities as a SEBI Registration Research Analyst."
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 1. Vision & Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/30 blur-[60px] group-hover:bg-blue-600/50 transition-colors" />
              <Eye size={32} className="text-blue-400 mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-blue-400 mb-2">Our Vision</h3>
              <p className="text-2xl font-bold leading-relaxed">
                Invest with knowledge & safety.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 blur-[50px]" />
              <Target size={32} className="text-blue-600 mb-6" />
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-2">Our Mission</h3>
              <p className="text-lg font-medium text-slate-700 leading-relaxed">
                Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* 2. BUSINESS TRANSACTED & SERVICES PROVIDED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Business Transacted */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-10">
                <p className="text-sm font-black tracking-widest text-blue-600 uppercase mb-3">Section B</p>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Business <br />Transacted</h2>
                <p className="text-slate-500 max-w-sm mb-8">
                  Core operations and obligations of the Research Analyst with respect to the investors.
                </p>

                <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-slate-100 flex gap-4 items-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Briefcase className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Strictly Independent</p>
                    <p className="text-sm text-slate-500">Unbiased views on all market securities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Business List */}
            <motion.div
              className="lg:col-span-7 space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "To publish research report based on the research activities of the RA.",
                "To provide an independent unbiased view on securities.",
                "To offer unbiased recommendations, disclosing the financial interests in recommended securities.",
                "To provide research recommendations, based on analysis of publicly available information and known observations.",
                "To conduct an audit annually.",
                "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
                "To maintain records of interactions with all clients including prospective clients."
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-5 bg-[#F8FAFC] border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors flex gap-4"
                >
                  <span className="text-blue-600 font-bold text-sm">0{idx + 1}.</span>
                  <p className="text-sm font-medium text-slate-700">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <hr className="my-24 border-slate-100" />

          {/* Services Provided Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side Header */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-black tracking-widest text-blue-600 uppercase mb-3">Section C</p>
              <h2 className="text-4xl font-black text-slate-900 mb-4">Services Provided</h2>
              <p className="text-slate-500">
                Outlining clear operational standards for seamless client onboarding and strictly fair disclosures.
              </p>
            </motion.div>

            {/* Right Side Bento Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Onboarding Box */}
              <div className="p-8 bg-[#F8FAFC] border border-slate-100 rounded-[2rem] md:col-span-2">
                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" /> Client Onboarding
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Sharing of terms and conditions of research services.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Completing KYC of fee paying clients.</li>
                </ul>
              </div>

              {/* Disclosures Box */}
              <div className="p-8 bg-[#F8FAFC] border border-slate-100 rounded-[2rem] md:col-span-2">
                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" /> Disclosures & Ethics
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 font-medium">
                  <p className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5" /> Disclose all material information for informed decisions.</p>
                  <p className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5" /> Disclose extent of Artificial Intelligence tools used.</p>
                  <p className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5" /> Treat all clients with honesty, integrity & no discrimination.</p>
                  <p className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5" /> Maintain high data privacy rights and full confidentiality.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* 3. GRIEVANCE REDRESSAL MECHANISM */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-black tracking-widest text-blue-600 uppercase mb-3">Section D</p>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Grievance Redressal</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We aim to resolve any discrepancies promptly. If a query arises, here are the structured steps to seek a resolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Step 1 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm relative group">
              <span className="absolute top-6 right-6 text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Level 01</span>
              <MessageSquare className="text-blue-600 mb-6" size={28} />
              <h4 className="text-lg font-bold mb-2">Reach Out to RA</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Approach the concerned Research Analyst directly. Grievances will be addressed immediately, or definitely within **21 days** of receipt.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm relative group">
              <span className="absolute top-6 right-6 text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Level 02</span>
              <Scale className="text-blue-600 mb-6" size={28} />
              <h4 className="text-lg font-bold mb-2">RAASB or SCORES 2.0</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                If not satisfied, file a complaint on SEBI's SCORES 2.0 or directly email RAASB. This triggers two reviews: designated body first, then SEBI.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl relative group">
              <span className="absolute top-6 right-6 text-sm font-black text-blue-400 bg-slate-800 px-3 py-1 rounded-full">Level 03</span>
              <Shield className="text-blue-400 mb-6" size={28} />
              <h4 className="text-lg font-bold mb-2">SMARTODR Platform</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Opt to file the complaint on the SMARTODR platform for resolutions driven through highly transparent online conciliation or arbitration.
              </p>
            </div>

          </div>

          <div className="mt-12 p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <h4 className="text-xl font-black text-slate-900 mb-2">SEBI Regulator Office</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4">
                Physical complaints can be dispatched straight to the Office of Investor Assistance at the SEBI Bhavan.
              </p>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0"><MapPin size={18} className="text-blue-600" /></div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed uppercase">
                    SEBI Bhavan BKC Address : Plot No.C4-A, 'G' Block Bandra-Kurla Complex, Bandra (East), Mumbai - 400051, Maharashtra
                  </p>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-blue-500" />
                    <span className="text-sm font-black text-slate-500 tracking-wider">+91-22-26449000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-blue-500" />
                    <span className="text-sm font-black text-slate-500 tracking-wider uppercase">sebi@sebi.gov.in</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-emerald-500" />
                    <span className="text-sm font-black text-slate-900 tracking-wider">HELPLINE: 1800 22 7575</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. RIGHTS & EXPECTATIONS */}
      <section className="py-24 bg-white relative overflow-hidden">

        {/* Abstract Glow */}
        <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] bg-blue-100/30 blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: Rights */}
            <div>
              <p className="text-sm font-black tracking-widest text-blue-600 uppercase mb-3">Section E</p>
              <h2 className="text-4xl font-black text-slate-900 mb-8">Rights of Investors</h2>

              <div className="space-y-4">
                {[
                  "Right to Privacy and Confidentiality",
                  "Right to Transparent Practices and Fair Treatment",
                  "Right to Adequate Information and Continuing Disclosures",
                  "Right to Fair & True Advertisements",
                  "Right to Awareness about Service Parameters and Turnaround Times",
                  "Right to be Heard and have Satisfactory Grievance Redressal",
                  "Right to Exit from Financial products or services according to agreed terms",
                  "Right to access services in a suitable manner even if differently abled"
                ].map((right, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-4 bg-[#F8FAFC] rounded-2xl border border-slate-50">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-bold text-slate-700">{right}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Do's & Don'ts */}
            <div>
              <p className="text-sm font-black tracking-widest text-blue-600 uppercase mb-3">Section F</p>
              <h2 className="text-4xl font-black text-slate-900 mb-8">Do's & Don'ts</h2>

              {/* Do's Box */}
              <div className="mb-6 p-8 bg-[#F8FAFC] border border-emerald-100 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 blur-[30px]" />
                <h4 className="font-black text-emerald-700 mb-4 flex items-center gap-2">
                  The Do's
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Always deal with SEBI Registration Research Analysts.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Pay Research Analysts through secure banking channels only.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Clear all doubts before acting on recommendations.</li>
                  <li className="flex gap-2 items-start"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" /> Inform SEBI about RAs offering assured returns.</li>
                </ul>
              </div>

              {/* Don'ts Box */}
              <div className="p-8 bg-[#F8FAFC] border border-rose-100 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50 blur-[30px]" />
                <h4 className="font-black text-rose-700 mb-4 flex items-center gap-2">
                  The Don'ts
                </h4>
                <ul className="space-y-3 text-sm font-medium text-slate-600">
                  <li className="flex gap-2 items-start"><XCircle size={16} className="text-rose-500 mt-0.5 flex-shrink-0" /> Do not provide funds for investment to the Research Analyst.</li>
                  <li className="flex gap-2 items-start"><XCircle size={16} className="text-rose-500 mt-0.5 flex-shrink-0" /> Don't fall prey to luring advertisements or market rumors.</li>
                  <li className="flex gap-2 items-start"><XCircle size={16} className="text-rose-500 mt-0.5 flex-shrink-0" /> Do not get attracted to limited period discounts or gifts.</li>
                  <li className="flex gap-2 items-start"><XCircle size={16} className="text-rose-500 mt-0.5 flex-shrink-0" /> Do not share trading/bank login credentials or passwords.</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 5. FOOTER NOTICE */}
      <footer className="py-10 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>© 2026 HighRise Research. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">SEBI Registration</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default InvestorCharter;