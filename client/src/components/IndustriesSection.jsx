import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  Factory,
  Truck,
  ShoppingCart,
  Pill,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Building2,
  Layers,
  Award,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState('auto');

  // 12 Industry Client Logos directly from uploaded portfolio
  const clientLogos = [
    {
      id: 'renacon',
      name: 'Renacon AAC Blocks',
      logo: '/clients/renacon.png',
      industry: 'Building Materials & Manufacturing',
      desc: 'AAC blocks & light-weight construction manufacturing ERP',
    },
    {
      id: 'metcraft',
      name: 'Metcraft Engineering',
      logo: '/clients/metcraft.png',
      industry: 'Power Towers & Steel Structures',
      desc: 'Heavy structural engineering, power transmission & solar MMS',
    },
    {
      id: 'ascent-circuits',
      name: 'Ascent Circuits',
      logo: '/clients/ascent-circuits.png',
      industry: 'Electronics & PCB Manufacturing',
      desc: 'High-precision printed circuit board production & supply chain',
    },
    {
      id: 'spiral-engineering',
      name: 'Sunflow / S-Turbine Systems',
      logo: '/clients/spiral-engineering.png',
      industry: 'Industrial Ventilation & Turbines',
      desc: 'Precision turbine systems, ventilation engineering & component manufacturing',
    },
    {
      id: 'pv-group',
      name: 'PV Group',
      logo: '/clients/pv-group.png',
      industry: 'Diversified Industrial Group',
      desc: 'Multi-entity corporate finance, manufacturing & infrastructure',
    },
    {
      id: 'cd-group',
      name: 'CD Group',
      logo: '/clients/cd-group.png',
      industry: 'Chemicals & Industrial Manufacturing',
      desc: 'Chemical distribution, multi-plant raw material tracking & GST',
    },
    {
      id: 'fybros',
      name: 'Fybros',
      logo: '/clients/fybros.png',
      industry: 'Smart Electrical Creations',
      desc: 'Electrical switches, accessories & nationwide distribution ERP',
    },
    {
      id: 'kundan-cab',
      name: 'Kundan Cab',
      logo: '/clients/kundan-cab.png',
      industry: 'Cables & Heavy Engineering',
      desc: 'Premier cable manufacturer since 1968, shop-floor & copper MRP',
    },
    {
      id: 'mgm-group',
      name: 'MGM (M G Muthu Group)',
      logo: '/clients/mgm-group.png',
      industry: 'Conglomerate & Hospitality',
      desc: 'Diversified conglomerate operations, supply chain & logistics',
    },
    {
      id: 'balmer-lawrie',
      name: 'Balmer Lawrie - Van Leer',
      logo: '/clients/balmer-lawrie.png',
      industry: 'Industrial Packaging & Containers',
      desc: 'Steel packaging, container logistics & automated weighbridge sync',
    },
    {
      id: 'bethliving',
      name: 'Bethliving.com',
      logo: '/clients/bethliving.png',
      industry: 'Modular Stainless Steel Interiors',
      desc: 'Stainless steel home interiors, dealer network & retail branch ERP',
    },
    {
      id: 'safl',
      name: 'SAFL (Southern Agrifurane)',
      logo: '/clients/safl.png',
      industry: 'Specialty Chemicals & Bio-Products',
      desc: 'Chemical processing, distillery & continuous compliance audits',
    },
  ];

  const industries = [
    {
      id: 'auto',
      name: 'Automotive & Ancillaries',
      icon: Car,
      tagline: 'Precision ERP for OEM Tier-1 & Tier-2 Suppliers in the Hosur Corridor',
      desc: 'Hosur is India’s premier automotive manufacturing hub. We configure SAP Business One, SAP S/4HANA, and JIT ERP to address OEM dispatch schedules, sub-contracting job-work, and zero-defect quality standards.',
      challenges: [
        'Strict OEM delivery schedules with JIT/JIS sequence delivery',
        'Complex sub-contracting & job-work DC reconciliation (Annexure IV)',
        'Traceability from steel coil heat numbers to finished machined component',
      ],
      solutions: [
        'Automated OEM EDI & e-Invoicing integration',
        'Multi-level BOM with cycle-time & scrap variance control',
        'Real-time machine integration & shop-floor OEE tracking',
      ],
      erpFit: 'SAP Business One (HANA) + JIT ERP + Egates Gate Management',
      metrics: '42% Reduction in job-work reconciliation delays',
      featuredClients: ['Ascent Circuits', 'Kundan Cab', 'Balmer Lawrie - Van Leer'],
    },
    {
      id: 'discrete',
      name: 'Discrete Manufacturing',
      icon: Factory,
      tagline: 'End-to-End Production, BOM & Shop-Floor Governance',
      desc: 'Engineered for precision fabrication, sheet metal, foundries, and assembly plants. We bridge shop-floor machine data directly into your core general ledger and procurement schedule.',
      challenges: [
        'Fluctuating raw material metal pricing and scrap tracking',
        'Frequent engineering design revisions & routing changes',
        'Machine bottleneck identification and idle time losses',
      ],
      solutions: [
        'Dynamic multi-level BOM explosion and routing calculation',
        'Automated purchase requisition based on live MRP runs',
        'Preventive maintenance scheduling and tool-life tracking',
      ],
      erpFit: 'SAP Business One / NetSuite Manufacturing',
      metrics: '99.8% BOM calculation accuracy across revisions',
      featuredClients: ['Renacon AAC Blocks', 'Fybros', 'Bethliving.com', 'Kundan Cab'],
    },
    {
      id: 'logistics',
      name: 'Logistics & Supply Chain',
      icon: Truck,
      tagline: 'Automated 3PL, Fleet Dispatch & Inward-Outward Material Gate Tracking',
      desc: 'Streamline complex transport operations, fleet tracking, warehouse weighbridges, and container yard check-ins with our integrated ERP and Egates smart security system.',
      challenges: [
        'Manual paper logbooks causing gate congestion and truck overstay',
        'Weighbridge discrepancy between factory loading and destination unloading',
        'Lack of real-time consignment visibility across transit checkpoints',
      ],
      solutions: [
        'Egates automated digital gate pass with QR/RFID vehicle tracking',
        'Hardware weighbridge integration with automatic gross/tare weight logging',
        'E-Way bill automation and instant proof-of-delivery (POD) sync',
      ],
      erpFit: 'Egates + Oracle NetSuite OneWorld / SAP S/4HANA',
      metrics: '< 45 seconds turnaround per transport vehicle at gates',
      featuredClients: ['Balmer Lawrie - Van Leer', 'MGM (M G Muthu Group)', 'PV Group'],
    },
    {
      id: 'retail',
      name: 'Retail & Distribution',
      icon: ShoppingCart,
      tagline: 'Multi-Location Inventory, Omni-Channel Sales & Automated GST Compliance',
      desc: 'Empower retail chains, wholesale distributors, and FMCG brands with unified stock visibility across central warehouses and retail counters with zero inventory blackouts.',
      challenges: [
        'Stockouts during peak demand alongside overstocking on slow-moving SKUs',
        'Multi-tax rate GST filing errors across interstate retail branches',
        'Disconnected POS systems requiring manual reconciliation at day-end',
      ],
      solutions: [
        'Centralized cloud inventory replenishment with automated reorder levels',
        'Omnichannel order sync across retail counters, b2b portals & e-commerce',
        'Automated GST return filing, credit note validation & bank reconciliations',
      ],
      erpFit: 'Oracle NetSuite SuiteCommerce / Zoho Enterprise Suite',
      metrics: '35% Improvement in stock rotation efficiency',
      featuredClients: ['Fybros', 'Bethliving.com', 'MGM (M G Muthu Group)'],
    },
    {
      id: 'pharma',
      name: 'Pharma & Chemicals',
      icon: Pill,
      tagline: 'Batch-Heat Traceability, Expiry Management & Strict GMP Compliance',
      desc: 'Pharmaceutical and fine chemical operations demand uncompromising compliance, recipe confidentiality, batch segregation, and audit trails aligned with 21 CFR Part 11.',
      challenges: [
        'Stringent regulatory audits requiring instantaneous ingredient batch trace',
        'Strict expiration date management with first-expiry-first-out (FEFO) rules',
        'Recipe confidentiality and batch formulation consistency',
      ],
      solutions: [
        'End-to-end forward and reverse batch tracking with single-click recall reports',
        'Automated FEFO warehouse dispatch rules preventing expired stock dispatches',
        'Role-based electronic signatures and tamper-proof audit trails',
      ],
      erpFit: 'SAP Business One Pharma Edition / SAP S/4HANA',
      metrics: '100% Audit trail readiness compliant with GMP',
      featuredClients: ['SAFL (Southern Agrifurane)', 'CD Group'],
    },
    {
      id: 'services',
      name: 'Tech & Professional Services',
      icon: Briefcase,
      tagline: 'Project Accounting, Resource Utilization & Milestone Invoicing',
      desc: 'Built for IT services, EPC consulting, engineering design firms, and multi-entity agencies requiring transparent project profitability and automated client billing.',
      challenges: [
        'Project cost leakage from untracked billable consultant hours',
        'Delayed milestone billing leading to working capital strains',
        'Multi-currency revenue recognition across international client contracts',
      ],
      solutions: [
        'Real-time project timesheet and expense tracking with approval hierarchies',
        'Automated milestone and time-and-material billing with tax compliance',
        'Multi-entity financial consolidation with real-time currency revaluation',
      ],
      erpFit: 'Oracle NetSuite PSA / Zoho One Suite',
      metrics: '28% Acceleration in client payment settlement cycles',
      featuredClients: ['Ascent Circuits', 'PV Group'],
    },
  ];

  const current = industries.find((i) => i.id === activeIndustry) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-xs border-y border-slate-200/80 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-brand-brightBlue border border-blue-500/20 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Domain-Specific Enterprise Practices</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange">Transform</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every industry has unique process bottlenecks, statutory compliances, and shop-floor constraints. Jishnu Infotech delivers deep vertical-tailored ERP architecture trusted by industry leaders across India.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = ind.id === activeIndustry;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 text-brand-orange shadow-lg border-brand-orange/40 ring-2 ring-brand-orange/20 scale-[1.02]'
                    : 'bg-white/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-orange-50 dark:bg-orange-950/60 text-brand-orange' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left 7 Columns: Header, Description, Challenges & Solutions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-brand-orange">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                        {current.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-orange">
                        {current.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                    {current.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Common Bottlenecks */}
                  <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-2.5 flex items-center gap-1.5">
                      <span>Industry Pain Points</span>
                    </h4>
                    <ul className="space-y-2">
                      {current.challenges.map((c, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-red-500 font-bold shrink-0 mt-0.5">&bull;</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* JIT Engineered Solution */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2.5 flex items-center gap-1.5">
                      <span>Our Tailored Architecture</span>
                    </h4>
                    <ul className="space-y-2">
                      {current.solutions.map((s, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Featured Sector Clients */}
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Key Client Implementations in this Sector:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.featuredClients.map((clientName, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                        <span>{clientName}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 5 Columns: Tech Stack, Proven Impact, and Consultation Action */}
              <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-6 border border-slate-200/80 dark:border-slate-700/80 space-y-5">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-1">
                    Recommended Technology Stack:
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-orange" />
                    <span>{current.erpFit}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Measurable Operational Impact
                  </div>
                  <div className="text-lg font-extrabold text-brand-orange mt-0.5">
                    {current.metrics}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/solutions/sap-business-one"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-md shadow-orange-500/20 transition-all"
                  >
                    <span>Explore Industry Solution Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 transition-colors"
                  >
                    <span>Request Domain Specialist Consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 10 Industry Client Logos Showcase */}
        <div className="mt-8 pt-10 border-t border-slate-200/80 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-500/10 text-brand-orange border border-orange-500/20 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Industry Track Record</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Trusted by Industry Leaders Across Sectors
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Delivering ERP, business process re-engineering, and digital transformation for prominent manufacturing, electrical, building, and conglomerate brands.
            </p>
          </div>

          {/* Grid of 12 Client Logos in balanced 6-column desktop grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {clientLogos.map((client) => (
              <div
                key={client.id}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/70 shadow-sm hover:shadow-md hover:border-brand-orange/40 transition-all flex flex-col items-center justify-between text-center group min-h-[140px]"
              >
                {/* Logo Image */}
                <div className="h-14 w-full flex items-center justify-center p-1 bg-white rounded-xl">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement.querySelector('.logo-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="logo-fallback hidden h-10 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white font-extrabold text-xs px-2">
                    {client.name}
                  </div>
                </div>

                {/* Company & Domain Label */}
                <div className="mt-3 w-full">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {client.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
