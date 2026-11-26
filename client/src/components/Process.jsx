import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings2, Database, Users, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Process Audit & As-Is / To-Be Blueprinting',
      desc: 'We conduct thorough on-site walkthroughs across your procurement, stores, production, job-work, dispatch, and finance operations. We document current bottlenecks and map every workflow into an approved To-Be functional blueprint.',
      icon: Search,
      tag: 'Phase 1: Discovery & Blueprint',
    },
    {
      num: '02',
      title: 'Platform Configuration & Custom Localization',
      desc: 'Configuring multi-level Bills of Materials (BOM), routings, work centers, GST tax engines, e-Invoicing, approval hierarchies, and building bespoke industry add-ons.',
      icon: Settings2,
      tag: 'Phase 2: Configuration',
    },
    {
      num: '03',
      title: 'Master Data Cleansing & Financial Reconciliation',
      desc: 'Extracting, deduplicating, and normalizing chart of accounts, vendor/customer ledgers, opening stock valuations, and open orders from Tally, Excel, or legacy ERPs with strict trial balance reconciliation.',
      icon: Database,
      tag: 'Phase 3: Data Migration',
    },
    {
      num: '04',
      title: 'Departmental UAT & Hands-On User Training',
      desc: 'Simulating full business cycles with real transaction batches. We conduct hands-on training for storekeepers, machine operators, billing clerks, and finance heads until they operate the system comfortably.',
      icon: Users,
      tag: 'Phase 4: UAT & Training',
    },
    {
      num: '05',
      title: 'Cutover Go-Live, Floor Hypercare & AMC Support',
      desc: 'Executing a controlled live cutover during a scheduled maintenance window. Our functional consultants stand on your shop floor during initial entries and the first month-end closing, backed by SLA-driven ongoing AMC.',
      icon: Rocket,
      tag: 'Phase 5: Go-Live & Support',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Implementation Lifecycle
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            How We Deliver With{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Accountability &amp; Precision
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A battle-tested 5-phase ERP deployment methodology designed to eliminate operational friction, safeguard historical data, and ensure seamless cutover without halting your daily business.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-deepBlue via-brand-brightBlue to-brand-orange -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-slate-900 border-4 border-brand-brightBlue text-white items-center justify-center font-bold text-sm shadow-xl">
                    {step.num}
                  </div>

                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`w-full lg:w-1/2 ${
                      isEven ? 'lg:pl-16' : 'lg:pr-16'
                    }`}
                  >
                    <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-lg hover:shadow-2xl hover:border-brand-orange/40 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                          {step.tag}
                        </span>
                        <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue border border-blue-200/50 dark:border-blue-800/50 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-brightBlue dark:group-hover:text-brand-orange transition-colors">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
