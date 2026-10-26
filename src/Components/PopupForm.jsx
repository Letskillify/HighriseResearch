import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, User, Mail, Send, Loader2 } from 'lucide-react';
import { db } from '../Firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PopupForm = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: ''
    });
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    useEffect(() => {
        // Show popup after 3 seconds ONLY on homepage
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
            const isHomePage = location.pathname === '/';
            if (!hasSeenPopup && isHomePage) {
                setIsOpen(true);
            }
        }, 3000);

        // Listen for manual triggers (works on any page)
        const handleManualOpen = () => setIsOpen(true);
        window.addEventListener('open-popup', handleManualOpen);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('open-popup', handleManualOpen);
        };
    }, [location.pathname]);

    // Accessibility: Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closePopup();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const { name, mobile, email } = formData;

            // 1. Save to Firestore
            await addDoc(collection(db, "consultations"), {
                ...formData,
                timestamp: serverTimestamp(),
                source: window.location.pathname
            });

            // 2. Prepare WhatsApp Redirection
            const message = `Hello, I'm interested in your services. \n\n*Name:* ${name}\n*Mobile:* ${mobile}\n*Email:* ${email}`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/919098693674?text=${encodedMessage}`;

            // Store that user has seen the popup in this session
            sessionStorage.setItem('hasSeenPopup', 'true');

            setTimeout(() => {
                window.location.href = whatsappUrl;
                setIsOpen(false);
                setLoading(false);
            }, 800);
        } catch (err) {
            console.error("Error saving consultation: ", err);
            setError("Something went wrong while submitting. Please try again or contact us directly.");
            setLoading(false);
        }
    };

    const closePopup = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenPopup', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                    role="region"
                    aria-label="Consultation Dialog Container"
                >
                    {/* Screen reader announcement */}
                    <div className="sr-only" role="status" aria-live="polite">
                        Free consultation popup dialog opened. Press Escape to close.
                    </div>

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    {/* Modal Dialog */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="popup-consultation-title"
                        aria-describedby="popup-consultation-desc"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={closePopup}
                            aria-label="Close consultation modal dialog"
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                        >
                            <X size={20} className="text-slate-500" />
                        </button>

                        <div className="p-8 pt-12">
                            <div className="mb-8 text-center">
                                <h3 id="popup-consultation-title" className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                                    Get <span className="text-blue-600">Free</span> Consultation
                                </h3>
                                <p id="popup-consultation-desc" className="text-slate-600 font-medium">Leave your details and we'll reach out to you.</p>
                            </div>

                            {error && (
                                <div role="alert" className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-bold rounded-xl flex items-center gap-2">
                                    <span>{error}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="popup-name" className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Full Name</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <User size={18} />
                                        </div>
                                        <input
                                            id="popup-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none font-bold text-slate-900"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="popup-mobile" className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Mobile Number</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            id="popup-mobile"
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none font-bold text-slate-900"
                                            placeholder="Your 10 digit number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="popup-email" className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Email ID</label>
                                    <div className="relative">
                                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                                            <Mail size={18} />
                                        </div>
                                        <input
                                            id="popup-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none font-bold text-slate-900"
                                            placeholder="Email address"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-70"
                                >
                                    {loading ? (
                                        <Loader2 className="animate-spin" size={20} />
                                    ) : (
                                        <>Connect on WhatsApp <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                            
                            <p className="mt-6 text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                * Your data is safe with us
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupForm;
