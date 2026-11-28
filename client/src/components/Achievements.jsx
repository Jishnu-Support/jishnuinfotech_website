import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';

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

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/60 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Achievements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Delivering Excellence{' '}
            <span className="text-brand-brightBlue">at Every Step</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Our proven track record reflects tangible business transformation, seamless migrations, and continuous client value creation.
          </p>
        </div>

        {/* Counters Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-14">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all text-center sm:text-left flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white flex items-baseline justify-center sm:justify-start">
                <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
                  <Counter end={item.value} suffix={item.suffix} />
                </span>
              </div>
              <div className="mt-3">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
