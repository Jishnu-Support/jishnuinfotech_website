import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Cloud,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  Check,
  ExternalLink,
  Layers,
  Smartphone,
  Cpu,
  Database,
} from 'lucide-react';
import { addons, mobileApps } from '../data/sapAddonsData';

export default function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedAddon, setSelectedAddon] = useState(null);
  const [activeAddonTab, setActiveAddonTab] = useState('all'); // 'all' | 'addons' | 'mobile-apps'

  const solutions = [
    {
      id: 'jit-erp',
      title: 'JIT ERP',
      path: '#contact',
      platformBadge: 'Proprietary Manufacturing ERP',
      subtitle: 'Discrete Manufacturing, BOM, Job-Work & Shop-Floor Governance',
      description:
        'A comprehensive, modular cloud ERP designed from the ground up for automotive ancillaries, fabrication plants, and precision engineering factories.',
      keyCapabilities: [
        'Multi-level BOM & routing with cycle time tracking',
        'Subcontracting & Job-Work DC reconciliation (Annexure IV)',
        'Batch & heat number traceability from inward to dispatch',
        'Direct Machine OEE & IoT shop-floor integration',
      ],
      suitableFor: 'Automotive Components, Precision Tooling, Sheet Metal, Foundries & Assembly Plants',
      color: 'from-blue-600 to-indigo-700',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      icon: Cpu,
      ctaText: 'Explore JIT ERP',
    },
    {
      id: 'sap-b1',
      title: 'SAP Business One (SAP B1)',
      path: '/solutions/sap-business-one',
      platformBadge: 'SAP Partner',
      subtitle: 'Discrete Manufacturing MRP & Operations',
      logo: '/logos/sap-b1.png',
      description:
        'Affordable, comprehensive ERP engineered for growing mid-market manufacturers, connecting shop-floor BOM, supply chain, and financials via in-memory analytics.',
      keyCapabilities: [
        'Complete discrete manufacturing MRP with multi-level BOM',
        'Real-time HANA in-memory analytics & interactive dashboards',
        'Batch, serial & heat number tracking from inward to dispatch',
        'Integrated GST, e-Way bill & direct e-Invoicing compliance',
      ],
      suitableFor: 'Manufacturing, Automotive, Pharma, and Growing Mid-Market Enterprises',
      color: 'from-blue-600 to-brand-deepBlue',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300',
      icon: Server,
      ctaText: 'Enter SAP B1',
    },
    {
      id: 'sap-s4hana',
      title: 'SAP S/4HANA',
      path: '/solutions/sap-s4hana',
      platformBadge: 'SAP Enterprise Partner',
      subtitle: 'Real-Time In-Memory Digital Core',
      logo: '/logos/sap-s4hana.png',
      description:
        'Flagship next-generation intelligent ERP suite delivering real-time enterprise visibility across multi-plant manufacturing, global supply chains, and predictive operations.',
      keyCapabilities: [
        'Universal Journal (ACDOCA) for real-time period financial close',
        'Integrated PP/DS advanced production planning & detailed scheduling',
        'Multi-entity corporate consolidation & global supply chain core',
        'Modern Fiori role-based UX with real-time operational insights',
      ],
      suitableFor: 'Large Enterprises, Multi-Plant Manufacturers & Global Conglomerates',
      color: 'from-indigo-600 to-blue-800',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300',
      icon: Database,
      ctaText: 'Enter SAP S/4HANA',
    },
    {
      id: 'netsuite',
      title: 'Oracle NetSuite Solutions',
      path: '/solutions/oracle-netsuite',
      platformBadge: 'Oracle NetSuite Partner',
      subtitle: 'Comprehensive Enterprise ERP Suite',
      description:
        'We help businesses implement and customize NetSuite for better control, scalability, and performance.',
      keyCapabilities: [
        'Native multi-subsidiary financials & OneWorld consolidation',
        'Real-time automated inventory, billing & revenue recognition',
        'SuiteCloud custom workflows, SuiteScript & API integration',
        'Automated multi-currency & tax compliance management',
      ],
      suitableFor: 'Retail, E-commerce, SaaS, Multi-entity Wholesale & Rapidly Scaling Tech',
      color: 'from-orange-600 to-amber-700',
      badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300',
      icon: Cloud,
      ctaText: 'Explore NetSuite',
    },
    {
      id: 'zoho',
      title: 'Zoho Solutions',
      path: '/solutions/zoho-enterprise',
      platformBadge: 'Zoho Enterprise Partner',
      subtitle: 'Zoho One, CRM & Financial Operations',
      description:
        'We design and implement Zoho CRM and business applications to enhance customer engagement, automate workflows, and improve team productivity.',
      keyCapabilities: [
        'End-to-end sales pipeline automation & customer journeys',
        'Zoho Books GST accounting & automated banking integration',
        'Zoho Creator low-code custom mobile & web enterprise apps',
        'Omnichannel support desk, marketing automation & analytics',
      ],
      suitableFor: 'Fast-moving SMEs, Service Companies, Omnichannel Brands & Lean Operations',
      color: 'from-emerald-600 to-teal-800',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
      icon: Sparkles,
      ctaText: 'Explore Zoho',
    },
  ];

  const closeAddonModal = () => {
    setSelectedAddon(null);
    if (window.location.hash && window.location.hash.toLowerCase().includes('addon')) {
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch (e) {}
    }
  };

  // Listen for explicit custom open events (e.g. from Navbar dropdown clicks)
  useEffect(() => {
    if (window.location.hash && window.location.hash.toLowerCase().includes('addon')) {
      try {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch (e) {}
    }

    const handleCustomOpen = (e) => {
      if (e.detail?.addonId) {
        const target = [...addons, ...mobileApps].find(
          (a) => a.id === e.detail.addonId || a.code.toLowerCase().includes(e.detail.addonId.toLowerCase())
        );
        if (target) {
          setActiveAddonTab(target.category === 'mobile-apps' ? 'mobile-apps' : 'addons');
          setSelectedAddon(target);
        }
      }
    };

    window.addEventListener('open-addon', handleCustomOpen);
    return () => {
      window.removeEventListener('open-addon', handleCustomOpen);
    };
  }, []);

  const displayedExtensions =
    activeAddonTab === 'all'
      ? [...addons, ...mobileApps]
      : activeAddonTab === 'addons'
      ? addons
      : mobileApps;

  return (
    <section id="solutions" className="scroll-mt-28 py-24 relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-brand-brightBlue text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our ERP Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            End-to-End Enterprise Solutions{' '}
            <span className="text-brand-orange">Tailored to Your Business</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Enterprise partner expertise delivering resilient, scalable business applications configured to your unique operating model.
          </p>
        </div>

        {/* 5 Core Enterprise Solutions Cards: JIT ERP, SAP B1, SAP S/4HANA, NetSuite, Zoho */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Banner & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${sol.badgeColor}`}>
                      {sol.platformBadge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {sol.logo && (
                    <div className="mb-3">
                      <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-xl border border-slate-200/90 dark:border-slate-700 shadow-xs">
                        <img
                          src={sol.logo}
                          alt={sol.title}
                          className="h-7 w-auto object-contain max-w-[170px]"
                        />
                      </div>
                    </div>
                  )}

                  <Link to={sol.path}>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white hover:text-brand-orange transition-colors whitespace-nowrap">
                      {sol.title}
                    </h3>
                  </Link>
                  <div className="text-xs font-semibold text-brand-orange mt-1">
                    {sol.subtitle}
                  </div>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[56px]">
                    {sol.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    {sol.keyCapabilities.slice(0, 4).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <Link
                    to={sol.path}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 px-4 py-2.5 rounded-xl shadow-md transition-all group shrink-0"
                  >
                    <span>{sol.ctaText || 'Explore Solution'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => setSelectedSolution(sol)}
                    className="text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Quick Specs
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* BELOW ERP SOLUTIONS: SAP B1 ADD-ONS & MOBILE APPLICATIONS */}
        {/* ============================================================== */}
        <div id="solutions-addons" className="pt-8 border-t border-slate-200/90 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/25 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>SAP Business One Deep-Vertical Extensions</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Proprietary <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700">SAP B1 Add-ons</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Mobile Apps</span>
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              13 production-ready, shop-floor tested add-ons and 5 native handheld mobile applications engineered specifically for SAP Business One (SQL &amp; SAP HANA) across manufacturing, steel processing, logistics, and quality management.
            </p>

            {/* Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: `All Extensions (${addons.length + mobileApps.length})` },
                { id: 'addons', label: `SAP B1 Add-ons (${addons.length})` },
                { id: 'mobile-apps', label: `Handheld Mobile Apps (${mobileApps.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveAddonTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    activeAddonTab === tab.id
                      ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/25 ring-2 ring-amber-600/50'
                      : 'bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-700/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Add-ons & Mobile Apps Grid (2 columns with standardized heights) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {displayedExtensions.map((item) => {
              const Icon = item.icon;
              const isMobile = item.category === 'mobile-apps';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedAddon(item)}
                  className="rounded-3xl bg-white hover:bg-slate-50/90 dark:bg-slate-900/90 dark:hover:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 flex flex-col h-full hover:border-amber-500/50 dark:hover:border-slate-700 transition-all duration-300 shadow-xs hover:shadow-xl dark:shadow-none group relative overflow-hidden cursor-pointer"
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
                        <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                          {item.code || item.name}
                        </h4>
                        <div>
                          <span className={`inline-block mt-0.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${item.badgeColor || 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300/60'}`}>
                            {item.badge || 'SAP B1 Ready'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-100/80 dark:bg-amber-400/10 px-2.5 py-1 rounded-xl border border-amber-300/80 dark:border-amber-400/20 shrink-0">
                      Click inside to inspect
                    </span>
                  </div>

                  {/* Tagline & Short Description with normalized heights */}
                  <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2 min-h-[2.75rem] flex items-center leading-snug line-clamp-2">
                    {item.tagline}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 min-h-[4rem] sm:min-h-[4.25rem] line-clamp-3">
                    {item.shortDesc}
                  </p>

                  {/* Key Stats Counter row with uniform height */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-700/60 shadow-xs mb-5 min-h-[66px] items-center">
                    {item.stats.map((st, i) => (
                      <div key={i} className="text-center px-1 flex flex-col justify-center">
                        <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate" title={st.value}>
                          {st.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5" title={st.label}>
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
                      {item.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-snug">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-amber-500 dark:text-amber-400" />
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedAddon(item);
                        }}
                        className="h-10 px-4 rounded-xl font-bold text-xs sm:text-sm text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/80 dark:hover:bg-amber-900 dark:border-amber-500/40 transition-colors inline-flex items-center justify-center gap-1.5 shrink-0"
                      >
                        <span>View Architecture Inside</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Modal for Solution Specification (SAP / NetSuite / Zoho) */}
        <AnimatePresence>
          {selectedSolution && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-slate-200 dark:border-slate-700 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${selectedSolution.badgeColor}`}>
                    {selectedSolution.platformBadge}
                  </span>
                  {selectedSolution.logo && (
                    <div className="inline-flex items-center bg-white px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-xs">
                      <img
                        src={selectedSolution.logo}
                        alt={selectedSolution.title}
                        className="h-5 w-auto object-contain max-w-[130px]"
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  {selectedSolution.title}
                </h3>
                <p className="text-xs font-semibold text-brand-orange mt-0.5">
                  {selectedSolution.subtitle}
                </p>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedSolution.description}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                    Full Implementation Capabilities:
                  </h4>
                  <div className="space-y-2.5">
                    {selectedSolution.keyCapabilities.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500">Best Suited For:</span>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 mt-1">
                    {selectedSolution.suitableFor}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedSolution(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900"
                  >
                    Close
                  </button>
                  <Link
                    to={selectedSolution.path}
                    onClick={() => setSelectedSolution(null)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-orange hover:bg-orange-600 transition-colors shadow-md"
                  >
                    <span>Go Inside {selectedSolution.title} Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal for SAP B1 Add-on / Mobile App Detail Inspection */}
        <AnimatePresence>
          {selectedAddon && (
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) closeAddonModal();
              }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-5 sm:p-8 text-slate-900 dark:text-white shadow-2xl relative"
              >
                {/* Modal Header Row: Title & High-Contrast Close Button */}
                <div className="flex items-start justify-between gap-3 mb-5 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className={`p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br ${selectedAddon.gradient} text-white shrink-0 shadow-md`}>
                      <Cpu className="w-5 h-5 sm:w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h3 className="text-base sm:text-xl font-black text-slate-900 dark:text-white">
                          {selectedAddon.name}
                        </h3>
                        <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/25 dark:border-amber-500/30 shrink-0">
                          {selectedAddon.badge || selectedAddon.version || 'SAP B1 Ready'}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5 leading-snug">
                        {selectedAddon.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Clear Close Button */}
                  <button
                    onClick={closeAddonModal}
                    aria-label="Close add-on detail modal"
                    className="p-2 sm:p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 border border-slate-300 dark:border-slate-600 shadow-md transition-all shrink-0 focus:outline-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Compatibility Strip */}
                <div className="mb-6 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Platform Compatibility:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{selectedAddon.compatibility || 'SAP Business One (SQL & HANA / Android & iOS)'}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {selectedAddon.desc || selectedAddon.shortDesc}
                </p>

                {/* Process Flow */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    <span>Integrated Manufacturing &amp; System Workflow:</span>
                  </div>
                  <div className="space-y-2">
                    {selectedAddon.processFlow?.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Features Checklist */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Full Functional Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedAddon.features.map((feat, fIdx) => (
                      <div key={fIdx} className="p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-400 shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span>Target Industry: </span>
                    <span className="text-slate-800 dark:text-slate-200 font-semibold">{selectedAddon.idealFor}</span>
                  </div>

                  <a
                    href="#contact"
                    onClick={closeAddonModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 transition-all shrink-0 shadow-md"
                  >
                    <span>Inquire for {selectedAddon.code || selectedAddon.name}</span>
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
