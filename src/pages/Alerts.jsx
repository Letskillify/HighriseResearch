import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert, ShieldCheck, Mail, Phone, MessageSquare, AlertCircle, Info } from 'lucide-react';
import PageHero from '../Components/PageHero';

const Alerts = () => {
  const points = [
    {
      icon: <MessageSquare className="text-blue-500" />,
      title: "Official Communication Only",
      description: "Our service delivery is strictly via SMS only. HighRise Research does not use WhatsApp, Telegram, or any other social media platforms for service delivery or research tips."
    },
    {
      icon: <ShieldAlert className="text-amber-500" />,
      title: "Verify Credentials",
      description: "Always verify our SEBI Registration details (INH000009427) directly on the SEBI official website before entering into any transaction."
    },
    {
      icon: <AlertCircle className="text-red-500" />,
      title: "Authorized Payments",
      description: "We never authorize any individual to collect payments in their personal bank accounts. All transactions must be made only through our official company channels."
    }
  ];

  return (
    <main className="bg-[#020617] min-h-screen text-white pb-24">
      <PageHero 
        title="Fraud Alert" 
        subtitle="Protect Your Investments"
        description="Stay informed about fraudulent activities and learn how to protect yourself from scammers misusing the HighRise Research brand."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Main Warning Card */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <AlertTriangle size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest mb-6">
                <ShieldAlert size={14} /> Critical Security Notice
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">Be Aware of Frauds</h2>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  It has been brought to our attention that some fraudulent individuals are misusing our 
                  <span className="text-white font-bold ml-1">SEBI Registration Number (INH000009427)</span>, 
                  including our brand identity, PAN cards, and professional credentials, to carry out illegal activities and defraud unsuspecting investors.
                </p>
                <p>
                  Please be assured that these actions are <span className="text-white underline decoration-red-500">not connected to HighRise Research</span> in any way. We do not authorize any third party or individual to act on our behalf or perform transactions in our company's name.
                </p>
                <p className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-500/5 text-blue-100 italic rounded-r-2xl">
                  "HighRise Research is not responsible for any such fraudulent activities. These actions are being carried out without our knowledge or authorization."
                </p>
              </div>
            </div>
          </div>

          {/* Protection Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0f172a]/50 backdrop-blur-xl border border-slate-800 p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tight">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{point.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Report Section */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 md:p-16 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl shadow-blue-900/40">
                <ShieldCheck size={40} />
              </div>
              
              <div>
                <h2 className="text-3xl font-black mb-4 tracking-tight">Report Suspicious Activity</h2>
                <p className="text-slate-400 font-medium leading-relaxed">
                  If you have encountered any fraudulent activities or believe scammers have targeted you, please report them immediately through our official channels.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3">
                  <Phone className="text-blue-500" />
                  <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Phone Support</p>
                  <p className="text-lg font-bold">+91 90986 93674</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-3">
                  <Mail className="text-blue-500" />
                  <p className="text-sm font-black text-slate-500 uppercase tracking-widest">Email Address</p>
                  <p className="text-lg font-bold">pavanraghuvanshi2014@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-500">
                <Info size={20} />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Official SEBI Check: Visit sebi.gov.in</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Alerts;
