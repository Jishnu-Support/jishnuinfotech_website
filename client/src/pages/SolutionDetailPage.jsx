import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Database,
  Cloud,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Check,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  Code2,
  FileText,
  Clock,
  HelpCircle,
  ChevronDown,
  Building,
  Cpu,
  BarChart3,
  Award,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import api from '../api/client';
import { useToast } from '../context/ToastContext';

// Platform catalog data
const solutionsData = {
  'sap-business-one': {
    slug: 'sap-business-one',
    shortName: 'SAP B1',
    title: 'SAP Business One (SAP B1)',
    tagline: 'Complete, Scalable ERP Suite Designed for Growing SMEs & Discrete Manufacturing',
    partnerBadge: 'Enterprise SAP Partner • Hosur Operations',
    logo: '/logos/sap-b1.png',
    color: 'from-blue-600 via-brand-deepBlue to-slate-900',
    accentColor: '#1E90FF',
    heroStats: [
      { label: 'Implementation Time', value: '8 – 12 Wks' },
      { label: 'Target Company Size', value: '20 – 500 Users' },
      { label: 'Statutory Compliance', value: '100% GST & e-Way' },
      { label: 'Database Technology', value: 'SAP HANA In-Memory' },
    ],
    overview:
      'SAP Business One is an affordable, comprehensive enterprise resource planning (ERP) system designed specifically for small to mid-sized businesses. It connects and streamlines your core business functions—from financials and procurement to manufacturing MRP, inventory, and sales—into a single digital ecosystem powered by SAP HANA in-memory analytics.',
    whyJIT: [
      'Senior SAP Consultants with 10+ years experience in Hosur & Tamil Nadu industrial hubs.',
      'Proven expertise in discrete manufacturing, automotive tier-1 & tier-2 suppliers, electronics, and precision engineering.',
      'End-to-end turnkey delivery: Business Process Re-engineering, data cleansing, user training, and 24/7 SLA AMC support.',
      'Zero Data Loss guarantee when migrating from legacy systems like Tally, Busy, or QuickBooks.',
    ],
    modules: [
      {
        title: 'Financial Management & Banking',
        icon: BarChart3,
        desc: 'Automate core accounting processes, journal entries, accounts receivable/payable, multi-currency transactions, bank statement reconciliations, and direct GST e-invoicing compliance.',
        features: ['Automated Journal Entries & Ledgers', 'GST e-Invoice & e-Way Bill Integration', 'Multi-Currency Financial Consolidation', 'Automated Bank Reconciliations'],
      },
      {
        title: 'Production, MRP & BOM',
        icon: Cpu,
        desc: 'Manage discrete and process manufacturing with multi-level Bill of Materials (BOM), production routing, automated Material Requirements Planning (MRP), scrap tracking, and capacity scheduling.',
        features: ['Multi-Level Assembly & Disassembly BOM', 'Automated MRP Wizard Recommendations', 'Production Order Issue & Receipt', 'Shop-Floor Routing & Capacity Planning'],
      },
      {
        title: 'Inventory & Multi-Warehouse',
        icon: Layers,
        desc: 'Real-time visibility across multiple warehouse locations. Manage batch and serial numbers, bin locations, pick-and-pack workflows, and accurate inventory valuation (FIFO, Moving Average, Standard Cost).',
        features: ['Batch & Serial Number Traceability', 'Multi-Warehouse Transfers & Bin Locations', 'Real-Time Stock Valuation (FIFO/Avg)', 'Barcode & Mobile Scanner Support'],
      },
      {
        title: 'Sales & Customer Management (CRM)',
        icon: Sparkles,
        desc: 'Track sales opportunities and lead-to-cash pipelines from initial contact to final payment. Create professional quotations, sales orders, deliveries, and monitor customer payment performance.',
        features: ['Lead-to-Cash Pipeline Tracking', 'Sales Quotations & Dispatch Tracking', 'Customer Credit Limit Controls', 'Automated Outstanding Payment Reminders'],
      },
      {
        title: 'Purchasing & Supplier Operations',
        icon: Server,
        desc: 'Optimize procurement cycles from purchase requisitions and purchase orders to goods receipts and vendor payments. Track vendor performance, lead times, and landed costs for imports.',
        features: ['Purchase Requisition & PO Workflow', 'Goods Receipt PO (GRPO) Verification', 'Landed Cost Calculation for Imports', 'Supplier Rating & Price History'],
      },
      {
        title: 'Reporting, Dashboards & Crystal Reports',
        icon: FileText,
        desc: 'Empower decision-makers with interactive SAP HANA dashboards, real-time KPI metrics, and customized Crystal Reports tailored to your statutory and internal management requirements.',
        features: ['Pre-Configured SAP HANA Pervasive Dashboards', 'Pixel-Perfect Custom Crystal Reports', 'Live Financial Balance Sheet & P&L', 'Scheduled Automated Email Reports'],
      },
    ],
    deploymentOptions: [
      {
        name: 'SAP B1 on Cloud (SaaS)',
        desc: 'Hosted in high-availability Indian cloud data centers (AWS / Azure). No server maintenance, automatic daily backups, 99.98% uptime SLA.',
        bestFor: 'Growing companies wanting low upfront IT capital expenditure.',
      },
      {
        name: 'SAP B1 On-Premise',
        desc: 'Installed directly on high-performance in-house server hardware within your factory or office premises with local network speed.',
        bestFor: 'Plants with strict internal data policies or local intranet needs.',
      },
      {
        name: 'Hybrid Deployment',
        desc: 'Centralized cloud HANA database with edge plant caching for uninterrupted manufacturing floor continuity.',
        bestFor: 'Multi-location manufacturing and distribution enterprises.',
      },
    ],
    faqs: [
      {
        q: 'How long does a standard SAP Business One implementation take?',
        a: 'Typically between 8 to 12 weeks for a standard manufacturing or trading deployment. With our agile 4-phase methodology (Discover, Blueprint, Configure/UAT, Go-Live), we ensure zero disruption to ongoing factory operations.',
      },
      {
        q: 'Can we migrate all our historical data from Tally or Busy?',
        a: 'Yes. Our specialized data migration engine extracts chart of accounts, open customer/vendor balances, item master data, and opening stock with automated data cleansing and deduplication.',
      },
      {
        q: 'Is SAP Business One fully compliant with Indian GST & e-Invoicing?',
        a: 'Yes, 100%. It features native integration for generating GST compliant e-Invoices with IRN / QR code and e-Way bills directly from the invoice screen without third-party portal visits.',
      },
      {
        q: 'What is the difference between SAP B1 on MS SQL and SAP B1 on HANA?',
        a: 'SAP Business One on SAP HANA runs entirely on in-memory computing technology. It provides real-time analytics, instant MRP recalculations, interactive Dashboards, and superior speed for high-volume transactions.',
      },
    ],
  },
  'sap-s4hana': {
    slug: 'sap-s4hana',
    shortName: 'SAP S/4HANA',
    title: 'SAP S/4HANA Enterprise',
    tagline: 'Real-Time In-Memory Intelligent Enterprise ERP for Large Organizations',
    partnerBadge: 'Enterprise SAP Practice • Hosur & India',
    logo: '/logos/sap-s4hana.png',
    color: 'from-blue-700 via-blue-900 to-slate-950',
    accentColor: '#1E90FF',
    heroStats: [
      { label: 'Architecture', value: 'In-Memory HANA' },
      { label: 'Target Segment', value: 'Large Enterprises' },
      { label: 'Deployment', value: 'Cloud / RISE with SAP' },
      { label: 'Reporting', value: 'Real-Time Fiori UX' },
    ],
    overview:
      'SAP S/4HANA is SAP’s flagship next-generation ERP suite, architected specifically for in-memory computing on SAP HANA. It delivers real-time visibility across global supply chains, multi-entity corporate balance sheets, and advanced predictive machine planning.',
    whyJIT: [
      'Experienced architects for Greenfield deployments, ECC to S/4HANA Brownfield migrations, and Central Finance.',
      'Process-first re-engineering that eliminates legacy custom ABAP bloat before migration.',
      'Hosur-based implementation team with deep manufacturing industry acumen.',
    ],
    modules: [
      {
        title: 'S/4HANA Finance & Controlling (FICO)',
        icon: BarChart3,
        desc: 'Single source of truth with Universal Journal (ACDOCA), real-time period close, and global multi-GAAP compliance.',
        features: ['Universal Journal Architecture', 'Continuous Period-End Closing', 'Global Multi-Entity Consolidation', 'Cash Flow & Treasury Management'],
      },
      {
        title: 'Supply Chain & Manufacturing (PP/DS)',
        icon: Cpu,
        desc: 'Advanced production planning and detailed scheduling directly inside S/4HANA with sub-second recalculation.',
        features: ['Integrated PP/DS Engine', 'Predictive Material Requirements', 'Shop-Floor Execution & Automation', 'Supplier Collaboration Portal'],
      },
      {
        title: 'Sourcing & Procurement (MM)',
        icon: Server,
        desc: 'Intelligent spend management, automated purchase orders, and supplier risk analysis powered by SAP Fiori.',
        features: ['Automated RFQ & PO Processing', 'Contract Lifecycle Management', 'Inventory Turnover Optimization', 'Real-Time Invoice Matching'],
      },
    ],
    deploymentOptions: [
      { name: 'RISE with SAP (Private Cloud)', desc: 'Full enterprise cloud subscription with managed hyperscaler infrastructure.', bestFor: 'Large groups seeking cloud agility with complete customization.' },
      { name: 'S/4HANA On-Premise', desc: 'Installed on your dedicated enterprise private cloud or data center.', bestFor: 'Regulated conglomerates with strict data sovereign requirements.' },
    ],
    faqs: [
      {
        q: 'How does Jishnu Infotech manage ECC to S/4HANA migration?',
        a: 'We execute a Readiness Assessment, clean up obsolete custom code, migrate data using the SAP Migration Cockpit, and ensure comprehensive Fiori user onboarding.',
      },
    ],
  },
  'oracle-netsuite': {
    slug: 'oracle-netsuite',
    shortName: 'NetSuite',
    title: 'Oracle NetSuite ERP',
    tagline: 'The #1 Enterprise ERP Suite for Multi-Subsidiary Financials & Fast Growth',
    partnerBadge: 'Oracle NetSuite Partner • Hosur & India',
    color: 'from-amber-600 via-orange-700 to-slate-900',
    accentColor: '#FF7A00',
    heroStats: [
      { label: 'Architecture', value: '100% True Cloud' },
      { label: 'Consolidation', value: 'OneWorld Multi-Entity' },
      { label: 'Timeline', value: '12 – 16 Weeks' },
      { label: 'Scalability', value: '50 to 5000+ Users' },
    ],
    overview:
      'Oracle NetSuite is the world’s leading cloud-native ERP, designed from the ground up for the web. It provides comprehensive financial management, global multi-subsidiary consolidation (OneWorld), inventory, billing, and SuiteCommerce in a unified browser platform.',
    whyJIT: [
      'Specialized NetSuite SuiteCloud developers for custom SuiteScript, workflows, and third-party API connectors.',
      'Expertise in Indian statutory GST compliance and cross-border international subsidiaries.',
      'Proven track record with high-growth e-commerce, retail, distribution, and manufacturing firms.',
    ],
    modules: [
      {
        title: 'NetSuite OneWorld (Multi-Entity)',
        icon: Building,
        desc: 'Manage multiple subsidiaries, legal entities, currencies, and tax jurisdictions in real time with single-click consolidated reporting.',
        features: ['Automated Intercompany Eliminations', 'Multi-Currency & Multi-Country Taxes', 'Unified Global Chart of Accounts', 'Real-Time Consolidated P&L'],
      },
      {
        title: 'Cloud Financials & Billing',
        icon: BarChart3,
        desc: 'Accelerate the financial close, automate recurring subscription billing, and ensure ASC 606 / IFRS 15 revenue recognition.',
        features: ['Automated Revenue Recognition', 'Subscription & Milestone Billing', 'Real-Time Bank Feeds Integration', 'Audit-Ready Compliance Controls'],
      },
    ],
    deploymentOptions: [
      { name: '100% Multi-Tenant Cloud', desc: 'No hardware, no version lock. Automatic bi-annual upgrades with zero system downtime.', bestFor: 'Modern fast-scaling companies, retail, and tech enterprises.' },
    ],
    faqs: [
      {
        q: 'Can NetSuite handle Indian GST and e-Invoicing?',
        a: 'Yes. We configure the NetSuite India Localization SuiteApp, providing complete automated GST calculations, GSTR-1/3B filing exports, and live e-invoicing.',
      },
    ],
  },
  'zoho-enterprise': {
    slug: 'zoho-enterprise',
    shortName: 'Zoho One',
    title: 'Zoho Enterprise Ecosystem',
    tagline: 'Agile Operating System for Business: CRM, Books, Creator & Omnichannel Automation',
    partnerBadge: 'Zoho Enterprise Partner • Hosur Hub',
    color: 'from-emerald-600 via-teal-800 to-slate-900',
    accentColor: '#10B981',
    heroStats: [
      { label: 'Apps Included', value: '45+ Integrated Apps' },
      { label: 'Deployment', value: '3 – 6 Weeks' },
      { label: 'Cost Profile', value: 'High ROI / Low TCO' },
      { label: 'Customization', value: 'Zoho Deluge & APIs' },
    ],
    overview:
      'Zoho One gives your business a unified operating system with 45+ enterprise-grade applications. It connects your sales CRM, financial books, human resources, project management, and custom low-code apps into one seamlessly synced platform.',
    whyJIT: [
      'Turnkey Zoho One implementation tailored to Indian manufacturing, logistics, and trading workflows.',
      'Custom Zoho Creator mobile apps for warehouse inventory barcode scanning and field engineers.',
      'Smooth integration between Zoho and legacy ERPs or banking APIs.',
    ],
    modules: [
      {
        title: 'Zoho CRM & Sales Automation',
        icon: Sparkles,
        desc: 'End-to-end lead management, multichannel engagement (WhatsApp, Email, Calls), automated deal pipelines, and AI predictions.',
        features: ['Omnichannel WhatsApp & Email Tracking', 'Automated Deal Pipelines & Scoring', 'Mobile CRM with Offline Access', 'Zia AI Analytics & Forecasting'],
      },
      {
        title: 'Zoho Books & GST Accounting',
        icon: BarChart3,
        desc: 'Comprehensive cloud accounting with automated banking feeds, GST return reconciliation, e-Way bills, and inventory sync.',
        features: ['Direct ICICI / HDFC Bank Integration', 'Instant GST e-Invoicing & e-Way Bills', 'Automated Recurring Invoices', 'Real-Time Inventory Reorder Alerts'],
      },
    ],
    deploymentOptions: [
      { name: '100% Cloud & Mobile Apps', desc: 'Access everything from desktop, iPad, or mobile phone apps with zero on-prem infrastructure.', bestFor: 'SMEs, service firms, and lean agile operating teams.' },
    ],
    faqs: [
      {
        q: 'Can Zoho integrate with our existing SAP or tally systems?',
        a: 'Yes. We build bi-directional API synchronizations between Zoho CRM/Books and SAP or Tally ledgers.',
      },
    ],
  },
};

// Aliases for user-friendly URL navigation
const slugMap = {
  'sapb1': 'sap-business-one',
  'sap-b1': 'sap-business-one',
  'sap-business-one': 'sap-business-one',
  'sap': 'sap-business-one',
  'saps4hana': 'sap-s4hana',
  'sap-s4hana': 'sap-s4hana',
  's4hana': 'sap-s4hana',
  'netsuite': 'oracle-netsuite',
  'oracle-netsuite': 'oracle-netsuite',
  'zoho': 'zoho-enterprise',
  'zoho-enterprise': 'zoho-enterprise',
  'zoho-one': 'zoho-enterprise',
};

const consultationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid business email is required'),
  phone: z.string().min(8, 'Phone number is required'),
  company: z.string().optional(),
  message: z.string().min(10, 'Please briefly describe your requirement'),
});

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Match slug to solution
  const normalizedSlug = slug ? slug.toLowerCase().trim() : 'sap-business-one';
  const targetKey = slugMap[normalizedSlug] || 'sap-business-one';
  const solution = solutionsData[targetKey];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await api.post('/contact', {
        ...data,
        subject: `Platform Demo Request: ${solution.title}`,
      });
      setSubmitted(true);
      reset();
      toast('Demo request received! Our senior SAP/ERP consultant will call you within 24 hours.', 'success');
    } catch (err) {
      toast('Inquiry submitted! Our solutions team will contact you shortly.', 'success');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{solution.title} Implementation & Consulting | Jishnu Infotech Hosur</title>
        <meta
          name="description"
          content={`${solution.title} consulting, implementation, and AMC support in Hosur, Tamil Nadu. ${solution.tagline}`}
        />
        <meta property="og:title" content={`${solution.title} | Jishnu Infotech`} />
        <meta property="og:description" content={solution.tagline} />
      </Helmet>

      <div className="pt-28 pb-20 bg-slate-50 dark:bg-brand-darkBg min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-brand-orange transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#solutions" className="hover:text-brand-orange transition-colors">
              ERP Solutions
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-900 dark:text-white">
              {solution.shortName}
            </span>
          </nav>
        </div>

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl relative p-8 sm:p-12 lg:p-16 text-slate-900 dark:text-white shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-md">
              <div className="max-w-5xl relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                    <span>{solution.partnerBadge}</span>
                  </div>
                  {solution.logo && (
                    <div className="inline-flex items-center bg-white px-3 py-1.5 rounded-xl border border-slate-200/90 dark:border-slate-700 shadow-xs">
                      <img
                        src={solution.logo}
                        alt={solution.title}
                        className="h-7 w-auto object-contain max-w-[170px]"
                      />
                    </div>
                  )}
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold font-heading tracking-tight leading-tight text-slate-900 dark:text-white whitespace-normal sm:whitespace-nowrap">
                  {solution.title}
                </h1>

                <p className="mt-5 text-base sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {solution.tagline}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#book-demo"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-xl shadow-orange-500/25 transition-all"
                  >
                    <span>Book Free Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="tel:+919566823219"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Talk to ERP Expert</span>
                  </a>
                </div>
              </div>

              {/* Key Platform Stats Pill Grid */}
              <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {solution.heroStats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-md shadow-xs">
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 font-semibold block">
                      {stat.label}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5 block">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid: Overview & Why JIT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Cols: Detailed Overview & Why Choose Us */}
            <div className="lg:col-span-7 space-y-10">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                  Platform Overview & Business Scope
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  {solution.overview}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-4">
                    Why Choose Jishnu Infotech for {solution.shortName}?
                  </h3>
                  <div className="space-y-3">
                    {solution.whyJIT.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deployment Architecture Cards */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6">
                  Deployment Options Available
                </h3>
                <div className="space-y-4">
                  {solution.deploymentOptions.map((opt, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{opt.name}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{opt.desc}</p>
                      <span className="inline-block mt-2 text-[11px] font-semibold text-brand-orange">
                        &bull; Best for: {opt.bestFor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Sticky Booking & Demo Form */}
            <div id="book-demo" className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      Request Confirmed!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Thank you! An experienced {solution.shortName} implementation specialist will contact you with a customized demonstration.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-brand-orange"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                        Direct Advisory Hub
                      </span>
                      <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                        Book a Free {solution.shortName} Demo
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Get a live functional walkthrough configured around your manufacturing or trading workflow.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Soundar"
                        {...register('name')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@company.com"
                        {...register('email')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 95668 23219"
                        {...register('phone')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Company Name / Industry
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Precision Components Pvt Ltd"
                        {...register('company')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                        Brief Operational Requirements *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Number of users, current software (Tally, Busy, etc.), key pain points..."
                        {...register('message')}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                      {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-lg shadow-orange-500/25 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting Request...' : `Schedule Free ${solution.shortName} Demo`}
                    </button>

                    <div className="pt-2 text-center text-[11px] text-slate-500">
                      🔒 Direct consultation from senior Hosur engineers. Zero spam.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Functional Modules Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-2">
              Functional Modules in {solution.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              End-to-end integration covering every operational touchpoint across your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue flex items-center justify-center mb-5 border border-blue-100 dark:border-blue-900">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {mod.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-h-[50px]">
                      {mod.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      {mod.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Platform FAQs Accordion */}
        {solution.faqs && solution.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                Frequently Asked Questions about {solution.shortName}
              </h2>
            </div>

            <div className="space-y-3">
              {solution.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-brand-orange' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Switch to Other ERP Solutions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                Explore Other Enterprise Solutions
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Compare SAP S/4HANA, Oracle NetSuite, and Zoho Enterprise with vendor-independent consulting.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {Object.keys(solutionsData).map((key) => {
                if (key === targetKey) return null;
                const other = solutionsData[key];
                return (
                  <Link
                    key={key}
                    to={`/solutions/${other.slug}`}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-brand-orange hover:text-white text-xs font-semibold transition-colors"
                  >
                    {other.shortName} &rarr;
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
