import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What industries does Jishnu Infotech serve?',
      a: 'We work with a wide range of industries including manufacturing, logistics, retail, healthcare, financial services, and technology. Our domain specialists configure ERP workflows specifically tailored to discrete manufacturing, multi-channel distribution, and compliance-heavy sectors.',
    },
    {
      q: 'How long does an SAP or ERP implementation take?',
      a: 'Project timelines vary based on complexity, but typically range from a few weeks to several months. We ensure timely delivery with minimal disruption by executing structured discovery, pilot iterations, and risk-free data cutover methodologies.',
    },
    {
      q: 'Do you provide post-implementation support?',
      a: 'Yes, we offer continuous support, system optimization, and maintenance to ensure long-term performance and scalability. Our managed AMC contracts include 24/7 SLA ticket resolution, quarterly system health checks, patch updates, and ongoing user refresher training.',
    },
    {
      q: 'How do you prevent data loss during legacy ERP migration?',
      a: 'We implement a dual-phase data migration framework: automated extraction, deep deduplication, master schema normalization, and sample dry-run reconciliations. Live cutovers are executed over scheduled zero-impact maintenance windows with complete audit verification.',
    },
    {
      q: 'Which platform is best suited: SAP, NetSuite, or Zoho?',
      a: 'It depends on your business model, entity structure, and manufacturing requirements. SAP Business One is ideal for discrete manufacturing and deep MRP; Oracle NetSuite excels in multi-subsidiary cloud consolidation; and Zoho provides an agile, cost-effective CRM and books ecosystem. We conduct an independent fitment analysis to help you decide.',
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white/75 dark:bg-slate-950/75 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Side Block with Ticker */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-brand-brightBlue text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Have a question?{' '}
              <span className="text-brand-orange">We've got the answers you need.</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore key details about our ERP deployment methodology, platform fitment, post-go-live AMC, and migration assurances.
            </p>

            {/* Side Card with Ticker Strip */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 border border-slate-800 shadow-xl overflow-hidden relative">
              {/* Ticker Strip */}
              <div className="bg-brand-orange/20 border-y border-brand-orange/40 py-2 -mx-6 px-4 mb-6">
                <div className="text-[11px] font-bold tracking-widest text-brand-orange uppercase text-center flex items-center justify-center gap-3">
                  <span>ERP</span>
                  <span>&bull;</span>
                  <span>BUSINESS TRANSFORMATION</span>
                  <span>&bull;</span>
                  <span>CONSULTING</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-white">Have a specific architectural query?</h4>
              <p className="text-xs text-slate-300 mt-2">
                Our principal consultants in Hosur are available for direct technical clarifications.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="tel:+919566823219"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-orange hover:bg-orange-600 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call +91 95668 23219</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-50 dark:bg-slate-900/90 border-brand-orange/40 shadow-md'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <span
                      className={`p-2 rounded-full shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-brand-orange text-white rotate-180'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
