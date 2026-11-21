import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
} from 'lucide-react';

export default function ProductsSection() {
  // Proprietary Platforms (Bizearch, Egates, Astrojit)
  const flagshipProducts = [
    {
      id: 'bizearch',
      name: 'Bizearch',
      liveWebsite: 'https://bizearch.in/',
      websiteLabel: 'Open bizearch.in',
      badge: 'Live Platform ↗',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      tagline: 'Enterprise Vendor Discovery & Market Research Platform',
      shortDesc:
        'Next-gen B2B sourcing directory with 50,000+ verified suppliers, automated RFQ broadcast, and real-time raw material price analytics.',
      icon: Search,
      gradient: 'from-emerald-600 to-teal-700',
      accentColor: '#059669',
      stats: [
        { label: 'Suppliers', value: '50,000+' },
        { label: 'RFQ Speed', value: '45% Faster' },
        { label: 'Price Index', value: 'Live Trends' },
      ],
      features: [
        'AI-Powered Supplier Directory filtered by capability & ISO certs',
        'Automated RFQ broadcast & quotation comparison matrix',
        'Raw material commodity price index & historical forecasting',
        'Vendor reliability scoring with audit history & delivery SLAs',
      ],
      idealFor: 'Procurement Managers, Sourcing Directors & Supply Chain Heads',
    },
    {
      id: 'egates',
      name: 'Egates',
      liveWebsite: 'https://egates.jishnuinfotech.com/login',
      websiteLabel: 'Login to Egates',
      badge: 'Live Portal ↗',
      badgeColor: 'bg-orange-500/10 text-brand-orange border-orange-500/20',
      tagline: 'Automated Visitor & Material Gate Security Management',
      shortDesc:
        'Eliminate paper registers. Egates automates digital gate passes, visitor check-ins, vehicle weighbridge integration, and material DC tracking.',
      icon: ShieldCheck,
      gradient: 'from-brand-orange to-amber-600',
      accentColor: '#FF7A00',
      stats: [
        { label: 'Gate Speed', value: '< 45 Sec' },
        { label: 'Discrepancy', value: 'Zero Error' },
        { label: 'Pass Check', value: 'QR / OTP' },
      ],
      features: [
        'Digital Visitor Pass with instant WhatsApp/SMS alert & photo ID',
        'Inward / Outward Material DC tracking (Returnable & Non-Returnable)',
        'Vehicle weighbridge log with automated weight sync',
        'Contract labor biometric/RFID attendance & safety induction',
      ],
      idealFor: 'Manufacturing Plants, Tech Parks & Logistics Hubs',
    },
    {
      id: 'astrojit',
      name: 'Astrojit',
      liveWebsite: 'https://astrojit.co.in/',
      websiteLabel: 'Open astrojit.co.in',
      badge: 'Live Platform ↗',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      tagline: 'Predictive Operations & Decision-Support AI Engine',
      shortDesc:
        'Bridging advanced operational analytics and time-optimized decision intelligence for business founders, high-stakes contracts, and executive strategy.',
      icon: BrainCircuit,
      gradient: 'from-purple-600 to-indigo-800',
      accentColor: '#9333EA',
      stats: [
        { label: 'Precision', value: 'High' },
        { label: 'Forecasting', value: 'Multi-Quarter' },
        { label: 'Focus', value: 'Executive' },
      ],
      features: [
        'Time-optimized launch & agreement signing window calculations',
        'Operational stress-point prediction before capital allocation',
        'Executive decision matrix harmonizing leadership dynamics',
        'Macro-cycle alignment for merger, expansion & CapEx investments',
      ],
      idealFor: 'Managing Directors, Business Founders & C-Suite Leaders',
    },
  ];

  return (
    <section
      id="products"
      className="scroll-mt-28 py-20 sm:py-28 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xs text-slate-900 dark:text-white border-y border-slate-200/80 dark:border-slate-800 relative overflow-hidden transition-colors duration-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-brightBlue/20 dark:bg-brand-brightBlue/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-orange/15 dark:bg-brand-orange/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange/10 dark:bg-brand-orange/15 text-brand-orange border border-brand-orange/25 dark:border-brand-orange/30 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Proprietary Software Platforms</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-500">Products</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Purpose-built enterprise platforms engineered in-house by Jishnu Infotech for B2B sourcing intelligence, physical gate security governance, and executive decision intelligence.
          </p>
        </div>

        {/* 3 Products Grid (spacious 3-column layout without overlapping or clipping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {flagshipProducts.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-slate-50/70 hover:bg-white dark:bg-slate-900/80 dark:hover:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 flex flex-col h-full hover:border-brand-orange/40 dark:hover:border-slate-700 transition-all duration-300 shadow-xs hover:shadow-xl dark:shadow-none group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-15 dark:opacity-20 pointer-events-none group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: item.accentColor }}
                />

                {/* Top Bar: Icon + Badge + Name */}
                <div className="flex items-start justify-between gap-4 mb-4 min-h-[58px]">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-md shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      {item.liveWebsite ? (
                        <a
                          href={item.liveWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors group/title truncate"
                        >
                          <span className="truncate">{item.name}</span>
                          <ExternalLink className="w-4 h-4 text-emerald-500 dark:text-emerald-400 opacity-80 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 transition-all shrink-0" />
                        </a>
                      ) : (
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors truncate">
                          {item.name}
                        </h3>
                      )}
                      <div>
                        {item.liveWebsite ? (
                          <a
                            href={item.liveWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-block mt-0.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border hover:opacity-90 transition-opacity ${item.badgeColor}`}
                          >
                            {item.badge}
                          </a>
                        ) : (
                          <span className={`inline-block mt-0.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 min-h-[2.75rem] flex items-center leading-snug">
                  {item.tagline}
                </h4>

                {/* Short Description: Generous min-height with no awkward line-clamp overlapping */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 min-h-[4.5rem] flex items-start">
                  {item.shortDesc}
                </p>

                {/* Key Stats Counter row: Clean spacing and no truncation */}
                <div className="grid grid-cols-3 gap-1.5 p-3 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-700/60 shadow-xs mb-5 min-h-[72px] items-center">
                  {item.stats.map((st, i) => (
                    <div key={i} className="text-center px-1 flex flex-col justify-center">
                      <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-tight">
                        {st.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Capabilities Checklist */}
                <div className="flex-1 flex flex-col mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                    Core Functional Highlights:
                  </div>
                  <div className="space-y-2 flex-1">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-snug">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500 dark:text-emerald-400" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-auto pt-4 border-t border-slate-200/90 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 min-h-[58px]">
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex-1 pr-2 leading-relaxed line-clamp-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Ideal For: </span>
                    {item.idealFor}
                  </div>

                  <div className="flex items-center shrink-0">
                    {item.liveWebsite ? (
                      <a
                        href={item.liveWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-10 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r ${
                          item.id === 'bizearch'
                            ? 'from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-500/20'
                            : item.id === 'egates'
                            ? 'from-brand-orange to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-orange-500/20'
                            : 'from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-purple-500/20'
                        } shadow-md transition-all inline-flex items-center justify-center gap-1.5 shrink-0 active:scale-95 group/link`}
                      >
                        <span>{item.websiteLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        className="h-10 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 dark:text-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 transition-colors inline-flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <span>Contact Specialist</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-100 via-slate-50 to-orange-50/50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-brand-orange/15 text-brand-orange shrink-0">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Looking for Custom Enterprise Software or API Integrations?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Our engineering team builds custom web portals, mobile apps, and machine-floor IoT connectors tailored to your exact workflows.
              </p>
            </div>
          </div>

          <a
            href="tel:+919566823219"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-md shadow-orange-500/20 transition-all shrink-0 whitespace-nowrap active:scale-95"
          >
            <span>Speak with an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
