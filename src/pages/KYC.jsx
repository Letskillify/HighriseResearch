import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Calendar, 
  CreditCard, FileText, Upload, CheckCircle2, 
  Loader2, ArrowRight, ShieldCheck, Lock 
} from 'lucide-react';
import PageHero from '../Components/PageHero';
import { db } from '../Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const KYC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    mobile: '',
    email: '',
    address: '',
    dob: '',
    panNumber: '',
  });
  
  const [files, setFiles] = useState({
    panUpload: null,
    aadharFront: null,
    aadharBack: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const uploadToCloudinary = async (file) => {
    if (!file) return null;
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'uglykgfd');
    data.append('cloud_name', 'duzwys877');

    try {
      const resp = await fetch(`https://api.cloudinary.com/v1_1/duzwys877/image/upload`, {
        method: 'POST',
        body: data
      });
      const res = await resp.json();
      return res.secure_url;
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload images in parallel
      const [panUrl, aadharFrontUrl, aadharBackUrl] = await Promise.all([
        uploadToCloudinary(files.panUpload),
        uploadToCloudinary(files.aadharFront),
        uploadToCloudinary(files.aadharBack)
      ]);

      await addDoc(collection(db, "kyc"), {
        ...formData,
        panUrl,
        aadharFrontUrl,
        aadharBackUrl,
        status: 'pending',
        timestamp: serverTimestamp()
      });

      setSuccess(true);
      setFormData({
        fullName: '',
        fatherName: '',
        mobile: '',
        email: '',
        address: '',
        dob: '',
        panNumber: '',
      });
      setFiles({
        panUpload: null,
        aadharFront: null,
        aadharBack: null,
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("KYC submission error:", error);
      alert("Submission failed. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = (name) => `
    w-full px-6 py-4 rounded-2xl bg-white border transition-all duration-300 outline-none font-bold text-slate-700
    ${activeField === name 
      ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-lg' 
      : 'border-slate-200 hover:border-slate-300'}
  `;

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 pb-24">
      <PageHero 
        title="KYC & Agreement" 
        subtitle="Verification & Compliance"
        description="Securely upload your identity documents to complete your verification and generate your investment agreement."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-100px] relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-white p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-10 border-b border-slate-100 pb-8">
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900">Personal Details</h2>
              <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Fields marked with * are mandatory</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name (As Per PAN Card) *</label>
                <div className="relative">
                  <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('fullName')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="John Doe"
                    className={`${inputClasses('fullName')} pl-14`}
                  />
                </div>
              </div>

              {/* Father Name */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Father's Name *</label>
                <input 
                  type="text" 
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  onFocus={() => setActiveField('fatherName')}
                  onBlur={() => setActiveField(null)}
                  required
                  placeholder="Enter father's name"
                  className={inputClasses('fatherName')}
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile Number *</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('mobile')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="+91 00000 00000"
                    className={`${inputClasses('mobile')} pl-14`}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="john@example.com"
                    className={`${inputClasses('email')} pl-14`}
                  />
                </div>
              </div>

              {/* DOB */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Date of Birth *</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('dob')}
                    onBlur={() => setActiveField(null)}
                    required
                    className={`${inputClasses('dob')} pl-14`}
                  />
                </div>
              </div>

              {/* PAN Number */}
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">PAN Card Number *</label>
                <div className="relative">
                  <CreditCard size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleInputChange}
                    onFocus={() => setActiveField('panNumber')}
                    onBlur={() => setActiveField(null)}
                    required
                    placeholder="ABCDE1234F"
                    className={`${inputClasses('panNumber')} pl-14 uppercase`}
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Address (As Per Aadhar Card) *</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-6 top-6 text-slate-400" />
                <textarea 
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleInputChange}
                  onFocus={() => setActiveField('address')}
                  onBlur={() => setActiveField(null)}
                  required
                  placeholder="Enter your full residential address..."
                  className={`${inputClasses('address')} pl-14 resize-none`}
                ></textarea>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10 pt-8 border-t border-slate-100">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                <Upload size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Document Upload</h2>
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Upload clear images of your documents</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* PAN Upload */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">PAN Card Upload *</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    name="panUpload"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    className="hidden" 
                    id="pan-upload"
                  />
                  <label 
                    htmlFor="pan-upload"
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    {files.panUpload ? (
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 size={32} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-600 truncate max-w-[150px]">{files.panUpload.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={32} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Upload PAN</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Aadhar Front */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Aadhar Front *</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    name="aadharFront"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    className="hidden" 
                    id="aadhar-front"
                  />
                  <label 
                    htmlFor="aadhar-front"
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    {files.aadharFront ? (
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 size={32} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-600 truncate max-w-[150px]">{files.aadharFront.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={32} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Aadhar Front</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Aadhar Back */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Aadhar Back *</label>
                <div className="relative group">
                  <input 
                    type="file" 
                    name="aadharBack"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                    className="hidden" 
                    id="aadhar-back"
                  />
                  <label 
                    htmlFor="aadhar-back"
                    className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    {files.aadharBack ? (
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 size={32} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-600 truncate max-w-[150px]">{files.aadharBack.name}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload size={32} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Aadhar Back</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01, backgroundColor: '#1d4ed8' }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-xl shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <FileText size={20} />
                    Generate & Submit Agreement
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-6 bg-emerald-50 border border-emerald-100 rounded-[2rem] flex items-center justify-center gap-3 text-emerald-700 font-bold"
                  >
                    <CheckCircle2 size={24} /> KYC & Agreement submitted successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>

          <p className="text-center mt-12 text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] flex items-center justify-center gap-2">
            <Lock size={14} /> End-to-End Encrypted Verification
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default KYC;
