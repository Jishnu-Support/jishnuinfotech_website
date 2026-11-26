import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import api from '../api/client';
import SpotlightCard from './SpotlightCard';

const defaultPlans = [
  {
    id: 'plan_001',
    name: 'Growth SME Core',
    popular: false,
    priceMonthly: '₹28,000',
    priceAnnual: '₹22,400',
    description: 'Tailored for growing fabrication units, assembly workshops, and discrete manufacturers transitioning from Tally/Busy to modern ERP.',
    features: [
      'Core Financials, GST e-Invoice & e-Way Bill',
      'Inventory, Multi-Warehouse & Batch Tracking',
      'Standard BOM & Production Order Workflows',
      'Up to 10 Named Users & Cloud Hosting',
      'Dedicated AMC SLA & Business Hours Support',
    ],
  },
  {
    id: 'plan_002',
    name: 'Enterprise Scale (SAP / NetSuite)',
    popular: true,
    priceMonthly: '₹65,000',
    priceAnnual: '₹52,000',
    description: 'Comprehensive ERP deployment for established tier-1/tier-2 suppliers, multi-plant engineering companies, and scaling brands.',
    features: [
      'Multi-Level MRP, Routing & Capacity Scheduling',
      'Quality Inspection & Job-Work Annexure IV Reconciliations',
      'Custom HANA / Fiori Executive Dashboards & Analytics',
      'Full API Middleware for Banking & Shop-floor Machines',
      '24/7 Priority SLA Support & Named Solution Architect',
    ],
  },
  {
    id: 'plan_003',
    name: 'Custom Transformation',
    popular: false,
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    description: 'Enterprise advisory, greenfield SAP S/4HANA migration, complex multi-subsidiary consolidation, or turnkey bespoke software engineering.',
    features: [
      'Full As-Is / To-Be Business Process Re-engineering (BPR)',
      'Enterprise SAP S/4HANA, NetSuite OneWorld or Zoho Enterprise',
      'Zero Data Loss historical ledger migration guarantee',
      'Custom ABAP, SuiteScript or Cloud Microservices Development',
      'Dedicated On-Site Implementation Team & Change Management',
    ],
  },
];

export default function Pricing() {
  const [plans, setPlans] = useState(defaultPlans);
  const [isAnnual, setIsAnnual] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await api.get('/pricing');
        if (res.data?.data && res.data.data.length > 0) {
          setPlans(res.data.data);
        }
      } catch (err) {
        console.warn('Pricing fallback load:', err.message);
      }
    };
    fetchPricing();
  }, []);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Predictable Engagement Models
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Transparent Pricing for{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Ambitious Roadmaps
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Scale your engineering capacity on demand with dedicated squads, zero hidden overheads, and full intellectual property ownership.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                !isAnnual
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly Sprints
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                isAnnual
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Annual Partnership</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold ${isAnnual ? 'bg-white/20 text-white' : 'bg-orange-500/20 text-brand-orange'}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <SpotlightCard
                key={plan.id || idx}
                spotlightColor={plan.popular ? 'rgba(255, 122, 0, 0.25)' : 'rgba(30, 144, 255, 0.15)'}
                spotlightBorder={plan.popular ? '#FF7A00' : 'rgba(30, 144, 255, 0.4)'}
                className={`relative p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white dark:bg-slate-800/95 border-2 border-brand-orange shadow-2xl scale-105 z-10'
                    : 'bg-white/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 shadow-lg'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-orange to-brand-lightOrange text-white shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 min-h-[40px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      / month
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                    {isAnnual ? 'Billed annually with dedicated lead' : 'Billed monthly with flexible cancellation'}
                  </p>

                  {/* Features List */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      What's Included:
                    </p>
                    {(plan.features || []).map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60">
                  <a
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md ${
                      plan.popular
                        ? 'bg-gradient-to-r from-brand-orange to-brand-lightOrange text-white hover:shadow-orange-500/30'
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-brand-deepBlue dark:hover:bg-slate-100'
                    }`}
                  >
                    <span>{plan.ctaText || 'Get Started'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
