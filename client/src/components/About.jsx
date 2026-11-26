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
    'Direct As-Is vs To-Be business process blueprinting before writing a single configuration',
    'Clean master data extraction, deduplication, and reconciliation from Tally, Excel & legacy ERPs',
    'Role-based hands-on UAT training for storekeepers, machine operators, billing teams & finance heads',
    'Custom add-ons for GST e-Invoicing, E-Way bills, barcode labeling, and weighbridge automation',
    'SLA-backed on-site & remote post-go-live hypercare and ongoing annual maintenance (AMC)',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/75 dark:bg-slate-950/75 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Corporate Video */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-950 group aspect-video flex items-center justify-center">
              <video
                src="/about-corporate.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                className="w-full h-full object-contain object-center pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left">
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
