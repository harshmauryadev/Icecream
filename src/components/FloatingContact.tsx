"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
  const phoneNumber = "918888888888"; // Replace with actual number
  const whatsappMessage = "Hello Daylily! I'd like to inquire about your ice creams.";

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Phone Button */}
      <a
        href={`tel:+${phoneNumber}`}
        className="w-10 h-10 bg-brand-brown text-brand-cream rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-primary transition-all duration-300 group relative"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={18} />
        {/* Blinking effect */}
        <span className="absolute inset-0 rounded-full bg-brand-brown animate-ping opacity-20 group-hover:bg-brand-primary"></span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group relative"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={18} />
        {/* Blinking/Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"></span>
      </a>
    </div>
  );
}
