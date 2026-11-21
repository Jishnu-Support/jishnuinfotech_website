import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-brand-deepBlue via-blue-900 to-slate-950 text-white">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-brightBlue rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Expert ERP Advisory in Hosur & Across India</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Ready to Modernize Your Business Systems?
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Schedule a confidential 45-minute platform assessment with our certified SAP, NetSuite & Zoho consultants.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="tel:+919566823219"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-brand-orange" />
              <span>+91 95668 23219</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
