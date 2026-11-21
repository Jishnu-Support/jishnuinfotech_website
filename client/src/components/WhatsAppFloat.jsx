import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919566823219';
  const defaultMessage = encodeURIComponent(
    'Hello Jishnu Infotech! I would like to inquire about your SAP / NetSuite / Zoho ERP consulting and implementation services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-30 flex items-center">
      {isHovered && (
        <div className="mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium shadow-lg border border-slate-700/60 hidden sm:block whitespace-nowrap transition-opacity duration-200">
          Chat with an ERP Consultant
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Jishnu Infotech"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20ba59] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
