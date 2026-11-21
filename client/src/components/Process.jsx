import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Terminal, ShieldCheck, Rocket, RefreshCcw } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & System Blueprinting',
      desc: 'We dissect your technical bottlenecks, define data boundaries, calculate latency thresholds, and map out a comprehensive architecture diagram before writing a single line of code.',
      icon: Search,
      tag: 'Phase 1: Architecture',
    },
    {
      num: '02',
      title: 'Rapid Agile Sprints & CI/CD',
      desc: 'Bi-weekly milestones with functioning preview environments. You review working software, inspect clean code, and participate in interactive sprint demos with our engineers.',
      icon: Terminal,
      tag: 'Phase 2: Execution',
    },
    {
      num: '03',
      title: 'Vulnerability Scanning & Hardening',
      desc: 'Continuous automated SAST/DAST testing, penetration validation, load testing up to 100k requests/sec, and strict compliance alignment (SOC 2, HIPAA, ISO).',
      icon: ShieldCheck,
      tag: 'Phase 3: Verification',
    },
    {
      num: '04',
      title: 'Zero-Downtime Deployment',
      desc: 'Blue/green or canary production releases governed by GitOps and infrastructure-as-code scripts, ensuring complete operational continuity and instant rollback capabilities.',
      icon: Rocket,
      tag: 'Phase 4: Launch',
    },
    {
      num: '05',
      title: 'Telemetry & Proactive SLA Support',
      desc: 'Distributed Grafana and Prometheus monitoring, automated alerting thresholds, proactive cloud cost optimization, and 24/7 engineering incident response.',
      icon: RefreshCcw,
      tag: 'Phase 5: Scale',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Engineering Methodology
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            How We Deliver With{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Speed & Precision
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A transparent, battle-tested engineering pipeline designed to eliminate ambiguity, mitigate risk, and ship production code predictably.
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
