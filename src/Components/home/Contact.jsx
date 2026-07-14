import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [activeField, setActiveField] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      const whatsappMessage = `Hello HighRise Research, I have an inquiry: \n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/919098693674?text=${encodedMessage}`;

      setSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        window.location.href = whatsappUrl;
        setSuccess(false);
      }, 1000);
    } catch (error) {
      console.error("Error submitting homepage contact form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-blue-50/50 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Contact Info & Map Placeholder */}
          <motion.div
            className="lg:col-span-5 space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
            
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">
                Let’s Discuss Your <br />
                <span className="text-slate-400 font-light text-4xl">Research Requirements</span>
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                Have questions about our research services? Our team is here to assist you with the information you need.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <Phone size={20} />, label: "Call Us", value: "+91 90986 93674", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: <Mail size={20} />, label: "Email Support", value: "pavanraghuvanshi2014@gmail.com", color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: <MapPin size={20} />, label: "Our Office", value: "A-172 Kanak Avenue Colony, lasudiya Mori Indore", color: "text-emerald-600", bg: "bg-emerald-50" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className={`w-12 h-12 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shadow-sm`}
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-900 font-bold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="relative h-48 w-full rounded-[2rem] bg-slate-100 overflow-hidden border border-slate-200 group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm">
                <Globe size={14} className="text-blue-600" />
                <span className="text-[10px] font-bold text-slate-700 uppercase">View on Google Maps</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Modern Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative p-1 md:p-10 lg:p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <motion.input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none ${activeField === 'name' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                  </motion.div>
                  {/* Phone Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none ${activeField === 'phone' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                  </motion.div>
                </div>

                {/* Email Input */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none ${activeField === 'email' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <motion.textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can our research help you?"
                    onFocus={() => setActiveField('msg')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border transition-all duration-300 outline-none resize-none ${activeField === 'msg' ? 'border-blue-500 bg-white shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-transparent'}`}
                    whileFocus={{ scale: 1.02 }}
                    required
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ backgroundColor: '#2563eb', boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      Send Inquiry
                      <motion.div
                        className="transition-transform duration-300"
                        whileHover={{ translateX: 4, translateY: -4 }}
                      >
                        <Send size={18} />
                      </motion.div>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {success && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center gap-3 text-emerald-700 font-bold text-sm text-center"
                    >
                      <CheckCircle2 size={18} /> Inquiry sent! We'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.p
                  className="text-center text-[11px] text-slate-400 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  By clicking send, you agree to our <Link to="/privacy" className="text-blue-600 underline cursor-pointer">Privacy Policy</Link>.
                </motion.p>
              </form>

              {/* Decorative Icon */}
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MessageSquare size={28} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact