import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  ArrowRight,
  Server,
  Layers,
  Sparkles,
  Users,
} from 'lucide-react';

export default function About() {
  const checklist = [
    'Deep expertise in SAP & ERP and CRM ecosystems',
    'Customized solutions aligned to your business goals',
    'Proven methodology for implementation and migration',
    'Minimal downtime and risk-free transitions',
    'Dedicated support and long-term partnership approach',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/75 dark:bg-slate-950/75 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual / Graphic with Partner Badges */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-white border border-slate-800 shadow-2xl">
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-orange-500/10 text-brand-orange border border-orange-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Jishnu Infotech</h4>
                    <p className="text-xs text-slate-400">Hosur, Tamil Nadu &bull; Est. 2014</p>
                  </div>
                </div>

                {/* Two Certified Partner Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-brightBlue shrink-0" />
                    <span className="text-xs font-bold text-slate-200">SAP Certified Partner</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-xs font-bold text-slate-200">Oracle NetSuite Certified Partner</span>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Implementation Framework</span>
                    <span className="text-emerald-400 font-semibold">ISO 9001 Aligned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 font-medium">BPR</span>
                    <span className="text-slate-500">&rarr;</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-orange-500/20 text-orange-300 font-medium">Fit-Gap</span>
                    <span className="text-slate-500">&rarr;</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-medium">Cutover</span>
                    <span className="text-slate-500">&rarr;</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-medium">Go-Live</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-brand-orange" />
                    <span>35+ In-House Consultants</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">100% On-Time Go-Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/60 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
              <span>About Jishnu Infotech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              Driving Digital Transformation{' '}
              <span className="text-brand-orange">with Precision</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Jishnu Infotech is an ERP and Business Transformation consulting company helping organizations improve business processes, implement enterprise applications and achieve sustainable digital transformation. Our expertise spans SAP Business One, SAP S/4HANA, Oracle NetSuite and Zoho, supported by business process consulting, ERP customization, integration, migration and post-implementation support.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-3.5">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-lg shadow-orange-500/25 transition-all duration-200"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>Our Core Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
