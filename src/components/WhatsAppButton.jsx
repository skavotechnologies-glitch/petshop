import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Clearly configurable placeholder WhatsApp contact
  const placeholderNumber = "919876543210";
  const defaultMessage = encodeURIComponent(
    "Hello PAWORA! I would like to inquire about grooming services and pet products."
  );
  const whatsappUrl = `https://wa.me/${placeholderNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block px-3.5 py-1.5 rounded-full bg-[#111827] text-white text-xs font-bold shadow-lg animate-fadeIn whitespace-nowrap">
          <span>🐾 Chat with PAWORA</span>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"></span>
      </a>
    </aside>
  );
}
