import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Server, Cpu, MessageSquare, Zap } from 'lucide-react';

export default function MobileQuickDock() {
  const location = useLocation();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200/80 dark:border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-2 py-1.5 safe-area-pb">
      <div className="grid grid-cols-5 gap-1 text-center">
        {/* 1. Direct Call */}
        <a
          href="tel:+919566823219"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-orange active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-orange-50 dark:bg-orange-950/60 text-brand-orange">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">Call</span>
        </a>

        {/* 2. SAP B1 Link */}
        <Link
          to="/solutions/sap-business-one"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-700 dark:text-slate-300 hover:text-brand-brightBlue active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue">
            <Server className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">SAP B1</span>
        </Link>

        {/* 3. Our Products */}
        <button
          onClick={() => {
            if (location.pathname !== '/') {
              window.location.href = '/#products';
            } else {
              scrollTo('products');
            }
          }}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-700 dark:text-slate-300 hover:text-purple-600 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">Products</span>
        </button>

        {/* 4. WhatsApp */}
        <a
          href="https://wa.me/919566823219?text=Hi%20Jishnu%20Infotech,%20I%20would%20like%20to%20know%20more%20about%20your%20ERP%20solutions%20and%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-slate-700 dark:text-slate-300 hover:text-emerald-500 active:scale-95 transition-all"
        >
          <div className="p-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 tracking-tight">Chat</span>
        </a>

        {/* 5. Quote / Contact */}
        <button
          onClick={() => {
            if (location.pathname !== '/') {
              window.location.href = '/#contact';
            } else {
              scrollTo('contact');
            }
          }}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-white bg-gradient-to-r from-brand-orange to-orange-500 rounded-xl shadow-sm active:scale-95 transition-all"
        >
          <div className="p-0.5 text-white">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold tracking-tight">Quote</span>
        </button>
      </div>
    </div>
  );
}
