import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Server,
  Cloud,
  Code2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
  X,
  CheckCircle2,
} from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const coreServices = [
    {
      id: 'bpr',
      title: 'Business Process Re-engineering',
      category: 'Process Optimization',
      shortDesc:
        'As-Is and To-Be analysis, workflow redesign and process standardisation. We improve the process before anyone automates it.',
      features: [
        'Detailed As-Is bottleneck diagnosis & value stream mapping',
        'Standardized To-Be digital workflow blueprint',
        'Elimination of redundant manual handoffs before ERP rollout',
        'KPI definition, compliance alignment & change management',
      ],
      icon: Layers,
    },
    {
      id: 'consulting',
      title: 'ERP Consulting & Selection',
      category: 'Strategic Advisory',
      shortDesc:
        'Business and technology assessment, ERP fitment advisory and platform selection matched to your size, complexity and growth plans.',
      features: [
        'Independent multi-vendor fitment matrix & scorecards',
        'Total Cost of Ownership (TCO) & 5-year ROI modeling',
        'Infrastructure sizing & cloud vs. on-premise evaluation',
        'Executive roadmap & phased milestone planning',
      ],
      icon: Server,
    },
    {
      id: 'implementation',
      title: 'ERP Implementation',
      category: 'Turnkey Rollout',
      shortDesc:
        'End-to-end implementation of SAP Business One, SAP S/4HANA, Oracle NetSuite and Zoho, configured around your business processes.',
      features: [
        'Turnkey configuration aligned to industry workflows',
        'Core module setup: Finance, Supply Chain, MRP, Sales & CRM',
        'Rigorous User Acceptance Testing (UAT) & pilot sign-offs',
        'Guaranteed zero-business-disruption go-live cutover',
      ],
      icon: Cloud,
    },
    {
      id: 'customization',
      title: 'ERP Customization & Development',
      category: 'Custom Engineering',
      shortDesc:
        'Add-ons, reports and dashboards, workflow automation, API and third-party integrations, and web or mobile extensions.',
      features: [
        'Custom Crystal Reports, SAP HANA calculation views & SQL dashboards',
        'Custom SuiteScript, Zoho Deluge & custom web portals',
        'E-commerce & payment gateway custom connectors',
        'Barcode, RFID & mobile warehouse scanner apps',
      ],
      icon: Code2,
    },
    {
      id: 'migration',
      title: 'ERP Migration & Upgrade',
      category: 'Data & Cloud Transition',
      shortDesc:
        'Legacy ERP migration, master and transaction data migration, data cleansing and validation, cutover planning and upgrades.',
      features: [
        'Zero-data-loss extraction from legacy ERPs (Tally, Busy, QuickBooks)',
        'Automated master data deduplication & cleansing rules',
        'Historical financial balances & inventory cutover validation',
        'Rollback contingency planning & audit compliance',
      ],
      icon: ShieldCheck,
    },
    {
      id: 'support',
      title: 'ERP Support & Managed Services',
      category: '24/7 SLA & Maintenance',
      shortDesc:
        'Application and user support, enhancements and optimisation, preventive maintenance, AMCs and continuous process improvement.',
      features: [
        'Dedicated SLA ticket resolution with 15-minute critical response',
        'Preventive health checks, patch updates & database tuning',
        'Continuous user refresher training & onboarding support',
        'Quarterly business reviews & ongoing feature enhancements',
      ],
      icon: Sparkles,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white/75 dark:bg-slate-950/75 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-brand-brightBlue text-xs font-bold uppercase tracking-wider mb-3">
              <span>Our Core Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              End-to-End Enterprise Services{' '}
              <span className="text-brand-orange">Tailored to Your Business</span>
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-brand-deepBlue dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Icon Cards in a 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-slate-900/90 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-brightBlue dark:group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[64px]">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 dark:border-slate-800 pt-4">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-brightBlue dark:text-brand-orange hover:underline focus:outline-none"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    Consult &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Specifications */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-slate-200 dark:border-slate-700 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
                  <span>{selectedService.category}</span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedService.shortDesc}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    Deliverables & Highlights:
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.features.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-orange hover:bg-orange-600 transition-colors shadow-md"
                  >
                    <span>Schedule Technical Discussion</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
