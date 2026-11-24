import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const placeholderNumber = "919876543210";
  const defaultMessage = encodeURIComponent(
    "Hello PAWS & POLISH! I would like to inquire about grooming services and pet products."
  );
  const whatsappUrl = `https://wa.me/${placeholderNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="hidden sm:block px-4 py-2 rounded-full bg-[#1B3329] text-white text-xs font-bold shadow-elevated border border-white/10 whitespace-nowrap"
        >
          <span>🐾 Chat with PAWS & POLISH</span>
        </motion.div>
      )}

      {/* Button with gentle float and pulse ring */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-transform duration-300 relative group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Soft pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      </motion.a>
    </aside>
  );
}