import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles, Server, Database, Cloud, HelpCircle } from 'lucide-react';

export default function PlatformComparison() {
  const [selectedIndustry, setSelectedIndustry] = useState('Manufacturing');
  const [companySize, setCompanySize] = useState('50-250');

  const platforms = [
    {
      name: 'SAP Business One',
      path: '/solutions/sap-business-one',
      bestFor: 'Growing SMEs & Manufacturing Plants',
      deployment: 'Cloud or On-Premise (HANA)',
      mrp: 'Deep (BOM, Routing, Capacity, Quality)',
      multiEntity: 'Multi-branch & Intercompany',
      targetSize: '20 – 500 Employees',
      timeline: '8 – 16 Weeks',
      costProfile: 'Moderate / Highest Value for Mfg',
      highlight: true,
      color: 'border-brand-orange text-brand-orange',
    },
    {
      name: 'SAP S/4HANA',
      path: '/solutions/sap-s4hana',
      bestFor: 'Large Enterprises & Conglomerates',
      deployment: 'Cloud Private / Public / Hybrid',
      mrp: 'Global Enterprise Scale',
      multiEntity: 'Global Multi-Country / Multi-Currency',
      targetSize: '500+ Employees',
      timeline: '6 – 18 Months',
      costProfile: 'Enterprise Investment',
      highlight: false,
      color: 'border-blue-500 text-blue-500',
    },
    {
      name: 'Oracle NetSuite',
      path: '/solutions/oracle-netsuite',
      bestFor: 'Fast-Growth Retail, E-Com & Tech',
      deployment: '100% True Cloud Multi-Tenant',
      mrp: 'Standard / Light Manufacturing',
      multiEntity: 'Native OneWorld Global Consolidation',
      targetSize: '50 – 1000+ Employees',
      timeline: '12 – 24 Weeks',
      costProfile: 'Subscription-based (SaaS)',
      highlight: false,
      color: 'border-purple-500 text-purple-500',
    },
    {
      name: 'Zoho Enterprise / CRM',
      path: '/solutions/zoho-enterprise',
      bestFor: 'Agile SMEs, Service Firms & Startups',
      deployment: '100% Cloud (SaaS / Mobile)',
      mrp: 'Inventory / Light Assembly',
      multiEntity: 'Multi-organization support',
      targetSize: '5 – 150 Employees',
      timeline: '3 – 8 Weeks',
      costProfile: 'Highly Cost-Effective',
      highlight: false,
      color: 'border-emerald-500 text-emerald-500',
    },
  ];

  // Logic for recommendation engine
  const getRecommendation = () => {
    if (selectedIndustry === 'Manufacturing') {
      if (companySize === '250+') {
        return {
          rec: 'SAP S/4HANA or SAP Business One Enterprise',
          reason: 'Your discrete manufacturing scale and shop-floor scheduling benefit most from in-depth Bill of Materials (BOM), multi-level MRP, and live HANA machine planning.',
        };
      }
      return {
        rec: 'SAP Business One',
        reason: 'Recommended for discrete and process manufacturing. Built-in MRP, batch/serial tracking, quality control, and Crystal Reports deliver high ROI without tier-one enterprise overhead.',
      };
    } else if (selectedIndustry === 'Retail & E-commerce') {
      return {
        rec: 'Oracle NetSuite or Zoho One',
        reason: 'Cloud-native multi-store point-of-sale, automated Shopify/Amazon sync, and real-time omnichannel inventory management make NetSuite or Zoho the top performer.',
      };
    } else if (selectedIndustry === 'Distribution & Logistics') {
      return {
        rec: 'SAP Business One or Oracle NetSuite',
        reason: 'Demands multi-warehouse bin management, automated barcode integration, and carrier API logistics synchronization.',
      };
    } else {
      return {
        rec: 'Zoho One or SAP Business One',
        reason: 'Offers rapid time-to-value, low upfront infrastructure requirements, and streamlined quote-to-cash workflows.',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-slate-100/60 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Vendor-Independent Fitment Analysis
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Which ERP Platform Fits{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A reasoned recommendation covering architectural fit, implementation effort, and total cost of ownership. We advise on the right platform, not what is easiest to sell.
          </p>
        </div>

        {/* Interactive Fitment Finder Widget */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-brand-orange" />
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              Interactive ERP Match Calculator
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                1. Select Your Primary Industry:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Manufacturing', 'Retail & E-commerce', 'Distribution & Logistics', 'Services & Trading'].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                      selectedIndustry === ind
                        ? 'bg-brand-deepBlue text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                2. Company Size / User Count:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['10-50', '50-250', '250+'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setCompanySize(sz)}
                    className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                      companySize === sz
                        ? 'bg-brand-orange text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {sz} Employees
                  </button>
                ))}
              </div>

              {/* Recommendation Callout */}
              <div className="mt-4 p-4 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                  Recommended Architecture:
                </span>
                <div className="font-heading font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                  {rec.rec}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-snug">
                  {rec.reason}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-800/90">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Feature / Parameter
                </th>
                {platforms.map((p) => (
                  <th key={p.name} className="p-5 text-sm font-bold font-heading text-slate-900 dark:text-white">
                    <div className="flex items-center gap-1.5">
                      <span>{p.name}</span>
                      {p.highlight && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-orange text-white font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs sm:text-sm">
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Best Fit Operational Profile</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5 text-slate-600 dark:text-slate-300 font-medium">
                    {p.bestFor}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Target Organization Size</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5 text-slate-600 dark:text-slate-300">
                    {p.targetSize}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Deployment Architecture</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5 text-slate-600 dark:text-slate-300">
                    {p.deployment}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Manufacturing & MRP Depth</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5 text-slate-600 dark:text-slate-300">
                    {p.mrp}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Multi-Entity & Consolidation</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5 text-slate-600 dark:text-slate-300">
                    {p.multiEntity}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Typical Go-Live Timeline</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5 font-bold text-brand-orange">
                    {p.timeline}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-semibold text-slate-700 dark:text-slate-300">Dedicated Platform Deep-Dive</td>
                {platforms.map((p) => (
                  <td key={p.name} className="p-5">
                    <Link
                      to={p.path}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 transition-all shadow-sm group"
                    >
                      <span>Explore Inside</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
