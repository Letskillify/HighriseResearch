import React, { useState } from "react";
import {
  Copy,
  CheckCircle2,
  Lock,
  ShieldCheck,
  CreditCard,
  Building2,
  Fingerprint,
  Check,
  QrCode,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const PaymentSection = () => {
  const [copied, setCopied] = useState(null);

  const bankDetails = {
    accountName: "HIGHRISE RESEARCH",
    accountNumber: "50200116853029",
    ifsc: "HDFC0006155",
    bankName: "HDFC Bank, Nipaniya Branch",
    upiId: "highriseresearch.ra@validhdfc",
  };

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(field);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
           

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
            Get Access to <span className="text-blue-600">Structured Market Research</span>
          </h2>

          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Select your preferred payment method. Payments are accepted only through authorized company accounts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Method 1: UPI QR Scan */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] p-8 md:p-12 overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Quick Scan
                    </h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                      UPI Payment
                    </p>
                  </div>
                </div>

                {/* QR Container */}
                <div className="relative mx-auto w-full max-w-[350px] aspect-square rounded-[2rem] bg-slate-50 p-6 border border-slate-100 mb-10 group-hover:bg-white transition-colors duration-500">
                  <div className="absolute inset-0 bg-blue-600/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-[2rem]"></div>
                  <img
                    src="img/upi-qr.png"
                    alt="UPI QR Code"
                    className="w-full h-full object-contain relative z-10 grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-blue-600 rounded-tl-xl opacity-40"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-blue-600 rounded-br-xl opacity-40"></div>
                </div>

                <div className="mt-auto space-y-4">
                  <p className="text-center text-[11px] text-slate-400 font-medium">
                    Supports Google Pay, PhonePe, Paytm & BHIM
                  </p>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-50 rounded-full -z-0"></div>
            </div>
          </motion.div>

          {/* Method 2: Bank Transfer */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 rounded-[3rem] shadow-2xl shadow-blue-900/10 p-8 md:p-12 h-full relative overflow-hidden group">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center border border-white/10">
                      <Building2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Corporate Banking
                      </h3>
                      <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">
                        IMPS / NEFT / RTGS
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <CheckCircle2 size={12} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      HDFC Verified
                    </span>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Account Number */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-[2rem] bg-white/5 border border-white/10 group/item hover:bg-white/10 transition-colors">
                    <div>
                      <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em] mb-2">
                        Account Holder Name
                      </p>
                      <p className="text-xl font-bold text-white">
                        {bankDetails.accountName}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopy(bankDetails.accountName, "name")}
                      className="w-fit p-3 rounded-xl bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition"
                    >
                      {copied === "name" ? (
                        <Check size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em]">
                          Account Number
                        </p>
                        <button
                          onClick={() =>
                            handleCopy(bankDetails.accountNumber, "acc")
                          }
                          className="text-white/40 hover:text-white transition"
                        >
                          {copied === "acc" ? (
                            <Check size={16} />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                      <p className="text-xl font-mono font-bold text-white">
                        {bankDetails.accountNumber}
                      </p>
                    </div>

                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-[10px] text-blue-400 font-black uppercase tracking-[0.2em]">
                          IFSC Code
                        </p>
                        <button
                          onClick={() => handleCopy(bankDetails.ifsc, "ifsc")}
                          className="text-white/40 hover:text-white transition"
                        >
                          {copied === "ifsc" ? (
                            <Check size={16} />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                      <p className="text-xl font-mono font-bold text-white uppercase">
                        {bankDetails.ifsc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-[2rem] bg-blue-600/10 border border-blue-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">Processing Time</p>
                        <p className="text-sm font-bold text-white">
                          Instant (IMPS)
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="text-white/20" />
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="text-blue-500" size={24} />
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">
                      Encrypted <br /> Transfer
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-emerald-500" size={24} />
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">
                      SEBI <br /> Compliant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        {/* <motion.div
          className="mt-12 p-6 rounded-[2rem] bg-blue-50 border border-blue-100 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <Smartphone size={20} />
          </div>
         
        </motion.div> */}
      </div>
    </section>
  );
};

export default PaymentSection;