import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const whatsappNumber = "919098693674";
    const message = "Hello HighRise Research! I need some assistance.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[9998] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-shadow group"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="fill-current" />
            
            {/* Tooltip-like badge */}
            <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl border border-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bold text-sm hidden md:block">
                Chat with us!
            </div>

            {/* Pulsing effect */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
        </motion.a>
    );
};

export default WhatsAppButton;
