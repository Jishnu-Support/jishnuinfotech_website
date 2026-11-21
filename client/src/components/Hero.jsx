import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
  Building2,
  PhoneCall,
} from 'lucide-react';

export default function Hero() {
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);

  const dynamicPhrases = [
    { text: 'Accelerated Digital Expansion', color: 'from-brand-orange via-amber-400 to-orange-500' },
    { text: 'Seamless Enterprise Agility', color: 'from-blue-500 via-cyan-400 to-indigo-600' },
    { text: 'High-Velocity Cloud Scale', color: 'from-emerald-500 via-teal-400 to-green-500' },
    { text: 'Predictable Business Growth', color: 'from-purple-500 via-violet-400 to-indigo-500' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const platforms = [
    { name: 'SAP Business One', path: '/solutions/sap-business-one', badge: 'SME Leader' },
    { name: 'SAP S/4HANA', path: '/solutions/sap-s4hana', badge: 'Cloud Enterprise' },
    { name: 'Oracle NetSuite', path: '/solutions/oracle-netsuite', badge: 'Cloud Native' },
    { name: 'Zoho Enterprise', path: '/solutions/zoho-enterprise', badge: 'Agile Ops' },
  ];


  return (
    <section id="hero" className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Headline, Executive Quote, Platforms, CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Main Punchy Dynamic H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-tight"
            >
              <span className="block text-slate-900 dark:text-white">Transforming Business Operations.</span>
              <span className="block text-brand-brightBlue mt-1 sm:mt-1.5">Engineered for High-Growth Enterprises.</span>
              <div className="mt-2 sm:mt-3 flex flex-wrap items-baseline gap-x-2">
                <span className="text-slate-900 dark:text-white font-bold">Powering</span>
                <span className="inline-grid grid-cols-1 grid-rows-1 items-baseline">
                  {/* Invisible spacer: locks maximum width & height so the layout below NEVER jitters or shifts */}
                  <span className="invisible select-none pointer-events-none col-start-1 row-start-1" aria-hidden="true">
                    Accelerated Digital Expansion.
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activePhraseIndex}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`col-start-1 row-start-1 inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${dynamicPhrases[activePhraseIndex].color}`}
                    >
                      {dynamicPhrases[activePhraseIndex].text}.
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </motion.h1>

            {/* Executive Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-l-4 border-l-brand-orange border-y border-r border-slate-200/90 dark:border-slate-800 shadow-md relative overflow-hidden"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10 text-brand-orange shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                    &ldquo;Bridging complex industrial shop-floors with world-class cloud ERP &mdash; turning operational friction into measurable enterprise velocity.&rdquo;
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    Jishnu Infotech empowers mid-market manufacturers and large enterprises with institutional-grade ERP deployments, custom SAP B1 add-ons, and certified end-to-end digital transformation across SAP, Oracle NetSuite, and Zoho.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Platform Tag Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold"
            >
              <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider text-[11px] font-extrabold mr-1">
                Platforms:
              </span>
              {platforms.map((p, idx) => (
                <Link
                  key={idx}
                  to={p.path}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-orange-50/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-brand-orange/40 transition-all duration-150"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>{p.name}</span>
                  <span className="text-[10px] opacity-70 ml-0.5">({p.badge})</span>
                </Link>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-brand-orange via-orange-500 to-amber-500 hover:from-orange-600 hover:to-orange-500 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Schedule Free ERP Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-800 dark:text-slate-200 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-300 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200"
              >
                <span>Explore Solutions</span>
              </a>

              <a
                href="tel:+919566823219"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-bold text-sm text-brand-orange bg-orange-500/10 hover:bg-orange-500/20 border border-brand-orange/30 transition-colors"
                title="Direct Phone Consultation"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 95668 23219</span>
              </a>
            </motion.div>

            {/* Quick Trust Checks */}
            <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Zero Data Loss Migration Guaranteed
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-orange" />
                Certified SAP &amp; NetSuite Technical Team
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-brand-brightBlue" />
                Hosur Operational Delivery Center
              </span>
            </div>
          </div>

          {/* Right Column: Clean Premium Enterprise Video Visual (Aligned to Top) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-950 group">
              <video
                src="/hero-enterprise.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                className="w-full h-[340px] sm:h-[400px] lg:h-[480px] object-cover object-center pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Global Key Metrics Strip below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: '150+', label: 'Enterprise Implementations', sub: 'Across Manufacturing & Supply Chain' },
              { number: '15+', label: 'Years Combined Expertise', sub: 'Institutional BPR & ERP Delivery' },
              { number: '13', label: 'Certified SAP Add-ons', sub: 'Engineered for Discrete & Process Lines' },
              { number: '99.98%', label: 'Go-Live Reliability', sub: 'Strict Zero-Data-Loss Standards' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 text-left hover:border-brand-orange/40 transition-colors shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
