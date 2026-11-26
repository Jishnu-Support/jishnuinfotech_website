import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, ShieldCheck, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

function Counter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const metrics = [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Delivered',
      sub: 'Across India & international markets',
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction Rate',
      sub: 'Consistently maintained since inception',
    },
    {
      value: 40,
      suffix: '%+',
      label: 'Operational Cycle Time Reduction',
      sub: 'Achieved via process re-engineering & automation',
    },
    {
      value: 12,
      suffix: '+',
      label: 'Years of Experience',
      sub: 'Enterprise ERP & business consulting',
    },
  ];

  const avatars = [
    { name: 'Senior SAP HANA Architect', bg: 'bg-blue-600', initial: 'S' },
    { name: 'Lead NetSuite Consultant', bg: 'bg-orange-600', initial: 'N' },
    { name: 'BPR Practice Lead', bg: 'bg-emerald-600', initial: 'B' },
    { name: 'Integration Specialist', bg: 'bg-purple-600', initial: 'I' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Counters Grid */}
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/60 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
              <span>Achievements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Delivering Excellence{' '}
              <span className="text-brand-brightBlue">at Every Step</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Our proven track record reflects tangible business transformation, seamless migrations, and continuous client value creation.
            </p>

            {/* Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white flex items-baseline">
                    <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
                      <Counter end={item.value} suffix={item.suffix} />
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Expert People Side Block */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none" />

              <div className="p-3 rounded-2xl bg-orange-500/10 text-brand-orange w-fit border border-orange-500/20 mb-6">
                <Users className="w-6 h-6" />
              </div>

              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-3 mb-6">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    title={av.name}
                    className={`w-12 h-12 rounded-full ${av.bg} flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900 shadow-md`}
                  >
                    {av.initial}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-xs border-2 border-slate-900 shadow-md">
                  +30
                </div>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white">
                50+ Enterprise ERP Specialists &amp; Consultants
              </h3>

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Expert ERP solution architects, functional analysts, technical developers, and 24/7 SLA support engineers dedicated to your operational success.
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SAP & Oracle Specialized Professionals</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Hosur-Based Engineering & Advisory Hub</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow"
                >
                  <span>Connect with Our Experts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
