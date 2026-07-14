import React from 'react';
import PaymentSection from '../Components/home/Payment';
import PageHero from '../Components/PageHero';
import { motion } from 'framer-motion';

const Payment = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Payment Gateway" 
        subtitle="Institutional Access" 
        backgroundImage="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop"
      />

      <PaymentSection />

      {/* Additional Help Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need help with payment?</h3>
            <p className="text-slate-500 mb-8">If you're facing any issues or have questions regarding our payment methods, feel free to contact our support team.</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a 
                    href="https://wa.me/919098693674" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
                >
                    WhatsApp Support
                </a>
                <a 
                    href="mailto:pavanraghuvanshi2014@gmail.com"
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                    Email Support
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
