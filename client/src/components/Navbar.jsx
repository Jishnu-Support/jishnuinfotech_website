import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  ChevronDown,
  ChevronRight,
  Shield,
  Server,
  Database,
  Cloud,
  Sparkles,
  Layers,
  Code2,
  ShieldCheck,
  Factory,
  Search,
  BrainCircuit,
  Cpu,
  Car,
  Truck,
  ShoppingCart,
  Pill,
  Briefcase,
  Building2,
  Flame,
  Scale,
  QrCode,
  Wrench,
  CheckCircle2,
  Workflow,
  Tag,
  Scissors,
  Calculator,
  Boxes,
  Smartphone,
  Activity,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsHovered, setSolutionsHovered] = useState(false);
  const [productsHovered, setProductsHovered] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [industriesHovered, setIndustriesHovered] = useState(false);
  const [desktopAddonsExpanded, setDesktopAddonsExpanded] = useState(false);
  const [desktopMobileAppsExpanded, setDesktopMobileAppsExpanded] = useState(false);

  // Mobile Accordion state (all collapsed by default to show clean 7-item navbar)
  const [mobileSapExpanded, setMobileSapExpanded] = useState(false);
  const [mobileSapAddonsExpanded, setMobileSapAddonsExpanded] = useState(false);
  const [mobileSapMobileAppsExpanded, setMobileSapMobileAppsExpanded] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);
  const [mobileAddonsExpanded, setMobileAddonsExpanded] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileIndustriesExpanded, setMobileIndustriesExpanded] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Active section or page indicator state (home, about, solutions, products, services, industries, blog, contact)
  const [activeItem, setActiveItem] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll & active route on multi-page navigation
  useEffect(() => {
    // 1. Multi-page route detection
    if (location.pathname.startsWith('/solutions')) {
      setActiveItem('solutions');
      return;
    }
    if (location.pathname.startsWith('/blog')) {
      setActiveItem('blog');
      return;
    }
    if (location.pathname === '/admin') {
      setActiveItem('admin');
      return;
    }
    if (location.pathname !== '/') {
      setActiveItem('');
      return;
    }

    // 2. Home page ScrollSpy for smooth color indication across sections
    const navSections = [
      { id: 'hero', key: 'home' },
      { id: 'about', key: 'about' },
      { id: 'solutions', key: 'solutions' },
      { id: 'products', key: 'products' },
      { id: 'services', key: 'services' },
      { id: 'industries', key: 'industries' },
      { id: 'contact', key: 'contact' },
    ];

    const handleScrollSpy = () => {
      // If near the very bottom of the document -> highlight contact
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 140;
      if (isNearBottom) {
        setActiveItem('contact');
        return;
      }

      // If at the very top of page -> highlight home
      if (window.scrollY < 120) {
        setActiveItem('home');
        return;
      }

      const threshold = 180; // Distance below fixed navbar
      let currentKey = 'home';
      let closestDist = Infinity;

      for (const { id, key } of navSections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        // If section is currently in view under the threshold
        if (rect.top <= threshold && rect.bottom > threshold) {
          currentKey = key;
          closestDist = 0;
          break;
        }

        const dist = Math.abs(rect.top - threshold);
        if (rect.top <= threshold && dist < closestDist) {
          closestDist = dist;
          currentKey = key;
        }
      }

      setActiveItem(currentKey);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
    setSolutionsHovered(false);
    setProductsHovered(false);
    setServicesHovered(false);
    setIndustriesHovered(false);
    setMobileAddonsExpanded(false);
    setMobileSapAddonsExpanded(false);
  }, [location]);

  // Smooth scroll handler with offset for sticky navbar
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setSolutionsHovered(false);
    setProductsHovered(false);
    setServicesHovered(false);
    setIndustriesHovered(false);
    setActiveItem(sectionId === 'hero' ? 'home' : sectionId);

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }
  };

  const navigateToAddon = (addonId) => {
    setIsOpen(false);
    setProductsHovered(false);
    setSolutionsHovered(false);
    if (location.pathname !== '/') {
      navigate('/#solutions-addons');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('open-addon', { detail: { addonId } }));
        const el = document.getElementById('solutions-addons') || document.getElementById('solutions');
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.dispatchEvent(new CustomEvent('open-addon', { detail: { addonId } }));
      const el = document.getElementById('solutions-addons') || document.getElementById('solutions');
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const sapSolutions = [
    {
      name: 'SAP Business One (SAP B1)',
      path: '/solutions/sap-business-one',
      desc: 'Discrete manufacturing MRP, HANA analytics & GST compliance',
      icon: Server,
      badge: 'SME Leader',
      badgeColor: 'bg-orange-100 text-brand-orange dark:bg-orange-950/70',
    },
    {
      name: 'SAP S/4HANA',
      path: '/solutions/sap-s4hana',
      desc: 'Enterprise digital core, global supply chain & in-memory cloud',
      icon: Database,
      badge: 'Large Enterprise',
      badgeColor: 'bg-blue-100 text-brand-brightBlue dark:bg-blue-950/70',
    },
  ];

  const cloudErpSolutions = [
    {
      name: 'Oracle NetSuite',
      path: '/solutions/oracle-netsuite',
      desc: 'Cloud-native multi-subsidiary financials & OneWorld ERP',
      icon: Cloud,
      badge: 'Cloud Native',
      badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950/70',
    },
    {
      name: 'Zoho Enterprise',
      path: '/solutions/zoho-enterprise',
      desc: 'CRM, automated Books & low-code business workflows',
      icon: Sparkles,
      badge: 'Agile Ops',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70',
    },
  ];

  const ourProducts = [
    {
      name: 'Bizearch',
      externalUrl: 'https://bizearch.in/',
      desc: 'B2B Vendor Directory, Sourcing Intelligence & RFQ Platform',
      icon: Search,
      badge: 'Live Portal ↗',
      badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300',
    },
    {
      name: 'Egates',
      externalUrl: 'https://egates.jishnuinfotech.com/login',
      desc: 'Smart Gate Pass, Visitor & Material Movement Management',
      icon: ShieldCheck,
      badge: 'Live Portal ↗',
      badgeColor: 'bg-orange-100 text-brand-orange dark:bg-orange-950/70 dark:text-orange-300',
    },
    {
      name: 'Astrojit',
      externalUrl: 'https://astrojit.co.in/',
      desc: 'Predictive Operations & Decision-Support Intelligence Engine',
      icon: BrainCircuit,
      badge: 'Live Portal ↗',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300',
    },
  ];

  const specializedAddons = [
    {
      id: 'coil-production',
      name: 'Coil Production Process',
      desc: 'Steel coil slitting, CTL & baby coil barcode reconciliation',
      icon: Layers,
    },
    {
      id: 'hdg-production',
      name: 'HDG Production',
      desc: 'Hot Dip Galvanizing bath titration & IS 4759 micron tracker',
      icon: Flame,
    },
    {
      id: 'freight-reconciliation',
      name: 'Transporters Freight Reconciliation',
      desc: 'Automated freight rate audit, LR sync & AP invoice booking',
      icon: Truck,
    },
    {
      id: 'einvoice-eway',
      name: 'E-Invoice And E-Way Bill',
      desc: 'Direct 1-click GSP/NIC IRN & dynamic QR code sync',
      icon: QrCode,
    },
    {
      id: 'production-routing',
      name: 'Production Routing',
      desc: 'Multi-stage work center routing, machine cycle time & stages',
      icon: Workflow,
    },
    {
      id: 'quality-module',
      name: 'Quality Module',
      desc: 'Inward, in-process & pre-dispatch QC checklists & CoA',
      icon: CheckCircle2,
    },
    {
      id: 'plant-maintenance',
      name: 'Plant Maintenance',
      desc: 'Preventive, breakdown machine maintenance & MTTR/MTBF',
      icon: Wrench,
    },
    {
      id: 'price-list',
      name: 'Price List',
      desc: 'Dynamic customer pricing matrices, volume slabs & approvals',
      icon: Tag,
    },
    {
      id: 'aac-production',
      name: 'AAC Production',
      desc: 'Autoclaved aerated concrete slurry batching & wire cutting',
      icon: Building2,
    },
    {
      id: 'pcb-manufacturing',
      name: 'PCB Manufacturing',
      desc: 'Multi-layer PCB fabrication, copper clad laminate & SMT tracking',
      icon: Cpu,
    },
    {
      id: 'pcb-cutting-plan',
      name: 'PCB Cutting Plan',
      desc: 'Panelization nesting optimization, V-scoring & sheet yield',
      icon: Scissors,
    },
    {
      id: 'product-costing-pricing',
      name: 'Product Costing and Pricing',
      desc: 'Standard vs actual job costing, multi-level BOM & gross margins',
      icon: Calculator,
    },
    {
      id: 'bom-automation',
      name: 'BOM Automation',
      desc: 'CAD/Excel direct bill of materials importer & revision control',
      icon: Boxes,
    },
  ];

  const sapB1MobileApps = [
    {
      id: 'b1-mobile-logistics',
      name: 'Logistics',
      desc: 'Handheld barcode picking, packing & warehouse dispatch',
      icon: Truck,
    },
    {
      id: 'b1-mobile-crm',
      name: 'CRM',
      desc: 'Field sales orders, customer ledgers & route visit tracking',
      icon: Briefcase,
    },
    {
      id: 'b1-mobile-etp',
      name: 'Efficient Treatment Plant',
      desc: 'ETP parameter logging, chemical dosing & PCB compliance',
      icon: Activity,
    },
    {
      id: 'b1-mobile-plant-maintenance',
      name: 'Plant Maintenance',
      desc: 'Machine breakdown ticketing & PM inspection checklists',
      icon: Wrench,
    },
    {
      id: 'b1-mobile-production-inout',
      name: 'Production IN/OUT',
      desc: 'Line-side material issue & finished goods handover scanning',
      icon: Boxes,
    },
  ];

  const servicesList = [
    {
      id: 'bpr',
      name: 'Business Process Re-engineering',
      desc: 'As-Is and To-Be analysis, workflow redesign and process standardisation. We improve the process before anyone automates it.',
      tag: 'Process First',
      icon: Layers,
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/70',
    },
    {
      id: 'consulting',
      name: 'ERP Consulting & Selection',
      desc: 'Business and technology assessment, ERP fitment advisory and platform selection matched to your size, complexity and growth plans.',
      tag: 'Strategic Advisory',
      icon: Server,
      color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/70',
    },
    {
      id: 'implementation',
      name: 'ERP Implementation',
      desc: 'End-to-end implementation of SAP Business One, SAP S/4HANA, Oracle NetSuite and Zoho, configured around your business processes.',
      tag: 'Turnkey Rollout',
      icon: Cloud,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/70',
    },
    {
      id: 'customization',
      name: 'ERP Customization & Development',
      desc: 'Add-ons, reports and dashboards, workflow automation, API and third-party integrations, and web or mobile extensions.',
      tag: 'APIs & Dashboards',
      icon: Code2,
      color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/70',
    },
    {
      id: 'migration',
      name: 'ERP Migration & Upgrade',
      desc: 'Legacy ERP migration, master and transaction data migration, data cleansing and validation, cutover planning and upgrades.',
      tag: 'Zero Data Loss',
      icon: ShieldCheck,
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/70',
    },
    {
      id: 'support',
      name: 'ERP Support & Managed AMC',
      desc: 'Application and user support, enhancements and optimisation, preventive maintenance, AMCs and continuous process improvement.',
      tag: '24/7 Support',
      icon: Sparkles,
      color: 'text-orange-600 bg-orange-50 dark:bg-orange-950/70',
    },
  ];

  const industriesList = [
    { name: 'Automotive & Ancillaries', desc: 'OEM Tier-1/2 dispatch, JIT delivery & job-work DC', icon: Car },
    { name: 'Discrete Manufacturing', desc: 'Multi-level BOMs, sheet metal, foundry & machine OEE', icon: Factory },
    { name: 'Logistics & Supply Chain', desc: '3PL transport, weighbridge sync & gate security', icon: Truck },
    { name: 'Retail & Distribution', desc: 'Omnichannel inventory, POS & automated GST filing', icon: ShoppingCart },
    { name: 'Pharma & Chemicals', desc: 'Batch/heat traceability, recipe control & GMP audits', icon: Pill },
    { name: 'Tech & Professional Services', desc: 'Project accounting, milestone billing & timesheets', icon: Briefcase },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200/80 dark:border-slate-800 py-3 sm:py-3.5'
            : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50 py-3.5 sm:py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Section: Mobile Hamburger (3 lines) on the LEFT + Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Three Lines Hamburger Button on Mobile (LEFT SIDE) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle mobile navigation menu"
                className="p-2 -ml-1.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors lg:hidden focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
              >
                {isOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Logo - Responsive & Mobile-Safe */}
              <Link
                to="/"
                onClick={() => {
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
              >
                <div className="relative overflow-hidden rounded-xl p-1 sm:p-2 bg-white/40 dark:bg-white/10 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
                  <img
                    src="/logo.jpg"
                    alt="Jishnu Infotech - Innovate · Integrate · Inspire"
                    className="h-9 sm:h-12 lg:h-16 w-auto max-w-[160px] sm:max-w-[240px] lg:max-w-[320px] object-contain rounded-lg"
                  />
                </div>
              </Link>
            </div>

            {/* Top Navigation Links:
                Home | About us | ERP Solutions (SAP: B1 & S4HANA, NetSuite, Zoho) | Our Products (JIT ERP, Bizearch, Egates, Astrojit) | Services | Contact us
            */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home */}
              <button
                onClick={() => {
                  setActiveItem('home');
                  if (location.pathname !== '/') {
                    navigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  activeItem === 'home'
                    ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                    : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Home</span>
                {activeItem === 'home' && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* About us */}
              <button
                onClick={() => scrollToSection('about')}
                className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  activeItem === 'about'
                    ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                    : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>About us</span>
                {activeItem === 'about' && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* 1. ERP Solutions (Structured with SAP: SAP B1 & SAP S/4HANA) */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsHovered(true)}
                onMouseLeave={() => setSolutionsHovered(false)}
              >
                <button
                  onClick={() => scrollToSection('solutions')}
                  className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    activeItem === 'solutions'
                      ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>ERP Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeItem === 'solutions' ? 'text-brand-orange' : 'text-slate-400'
                    } group-hover:rotate-180`}
                  />
                  {activeItem === 'solutions' && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {solutionsHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full pt-6 left-0 w-[420px] max-w-[85vw] z-50 pointer-events-auto"
                    >
                      <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-2.5">
                        {/* 1. JIT ERP (Above SAP B1) */}
                        <div
                          onClick={() => {
                            setSolutionsHovered(false);
                            scrollToSection('solutions');
                          }}
                          className="p-2.5 rounded-xl hover:bg-orange-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 cursor-pointer group"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/60 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                            <Cpu className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                JIT ERP
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">
                                Proprietary ERP
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              Manufacturing, BOM, Job-Work & Shop-Floor ERP
                            </p>
                          </div>
                        </div>

                        {/* 2. SAP Business One (SAP B1) */}
                        <Link
                          to="/solutions/sap-business-one"
                          onClick={() => {
                            setSolutionsHovered(false);
                            setIsOpen(false);
                          }}
                          className="p-2.5 rounded-xl hover:bg-orange-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 cursor-pointer group"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/60 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                            <Server className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                SAP Business One (SAP B1)
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-orange-100 text-brand-orange dark:bg-orange-950/70">
                                SME Leader
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              Discrete manufacturing MRP, HANA analytics & GST compliance
                            </p>
                          </div>
                        </Link>

                        {/* 3. SAP B1 Add-ons (Below SAP B1 with arrow to show down items) */}
                        <div className="rounded-xl border border-amber-200/80 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 overflow-hidden">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDesktopAddonsExpanded(!desktopAddonsExpanded);
                            }}
                            className="w-full p-2.5 flex items-center justify-between hover:bg-amber-100/60 dark:hover:bg-amber-900/40 transition-colors text-left"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300">
                                <Layers className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                                  SAP B1 Add-ons
                                </div>
                                <div className="text-[10px] text-amber-700 dark:text-amber-400">
                                  Click arrow to view 13 specialized add-ons
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-amber-200/80 text-amber-900 dark:bg-amber-900/80 dark:text-amber-200">
                                13 Add-ons
                              </span>
                              <ChevronDown className={`w-3.5 h-3.5 text-amber-700 transition-transform ${desktopAddonsExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </button>

                          {desktopAddonsExpanded && (
                            <div className="px-2 pb-2 pt-1 space-y-1 border-t border-amber-200/60 dark:border-amber-900/40 max-h-64 overflow-y-auto pr-1">
                              {specializedAddons.map((addon, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => {
                                    setSolutionsHovered(false);
                                    navigateToAddon(addon.id);
                                  }}
                                  className="p-1.5 px-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between group"
                                >
                                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-orange flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                    <span>{addon.name}</span>
                                  </span>
                                  <span className="text-[10px] text-slate-400 group-hover:text-brand-orange">
                                    Explore ↗
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 3.1 SAP B1 Mobile Applications (Below SAP B1 Add-ons) */}
                        <div className="rounded-xl border border-emerald-200/80 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 overflow-hidden">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDesktopMobileAppsExpanded(!desktopMobileAppsExpanded);
                            }}
                            className="w-full p-2.5 flex items-center justify-between hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40 transition-colors text-left"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                                <Smartphone className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                                  SAP B1 Mobile Applications
                                </div>
                                <div className="text-[10px] text-emerald-700 dark:text-emerald-400">
                                  Click arrow to view 5 mobile applications
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-emerald-200/80 text-emerald-900 dark:bg-emerald-900/80 dark:text-emerald-200">
                                5 Apps
                              </span>
                              <ChevronDown className={`w-3.5 h-3.5 text-emerald-700 transition-transform ${desktopMobileAppsExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </button>

                          {desktopMobileAppsExpanded && (
                            <div className="px-2 pb-2 pt-1 space-y-1 border-t border-emerald-200/60 dark:border-emerald-900/40 max-h-56 overflow-y-auto pr-1">
                              {sapB1MobileApps.map((app, idx) => (
                                <div
                                  key={idx}
                                  onClick={() => {
                                    setSolutionsHovered(false);
                                    navigateToAddon(app.id);
                                  }}
                                  className="p-1.5 px-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-between group"
                                >
                                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-brand-orange flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span>{app.name}</span>
                                  </span>
                                  <span className="text-[10px] text-slate-400 group-hover:text-brand-orange">
                                    Launch ↗
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* 4. SAP S/4HANA */}
                        <Link
                          to="/solutions/sap-s4hana"
                          onClick={() => {
                            setSolutionsHovered(false);
                            setIsOpen(false);
                          }}
                          className="p-2.5 rounded-xl hover:bg-orange-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 cursor-pointer group"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-950/60 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                            <Database className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                SAP S/4HANA Cloud
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-blue-100 text-blue-800 dark:bg-blue-950/70">
                                Enterprise Cloud
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                              Next-generation intelligent ERP suite for mid-large enterprises
                            </p>
                          </div>
                        </Link>

                        {/* Cloud ERP Platforms */}
                        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                          <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                            Other Enterprise Clouds
                          </div>
                          <div className="space-y-1">
                            {cloudErpSolutions.map((sol, idx) => {
                              const Icon = sol.icon;
                              return (
                                <Link
                                  key={idx}
                                  to={sol.path}
                                  onClick={() => {
                                    setSolutionsHovered(false);
                                    setIsOpen(false);
                                  }}
                                  className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-3 cursor-pointer group"
                                >
                                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                        {sol.name}
                                      </span>
                                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${sol.badgeColor}`}>
                                        {sol.badge}
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                      {sol.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. Our Products (JIT ERP, Bizearch, Egates, Astrojit) - NEW */}
              <div
                className="relative"
                onMouseEnter={() => setProductsHovered(true)}
                onMouseLeave={() => setProductsHovered(false)}
              >
                <button
                  onClick={() => scrollToSection('products')}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                    activeItem === 'products'
                      ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Our Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeItem === 'products' ? 'text-brand-orange' : 'text-slate-400'
                    } group-hover:rotate-180`}
                  />
                  {activeItem === 'products' && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {productsHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full pt-6 left-1/2 -translate-x-1/2 w-96 max-w-[85vw] z-50 pointer-events-auto"
                    >
                      <div className="p-3.5 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex items-center justify-between px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1 mb-1">
                          <span className="flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                            <span>Proprietary Platforms</span>
                          </span>
                          <span className="text-[10px] text-brand-orange font-bold">3 Products</span>
                        </div>

                        <div className="space-y-1">
                          {ourProducts.map((prod, idx) => {
                            const Icon = prod.icon;
                            if (prod.externalUrl) {
                              return (
                                <a
                                  key={idx}
                                  href={prod.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    setProductsHovered(false);
                                    setIsOpen(false);
                                  }}
                                  className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-2.5 cursor-pointer group"
                                >
                                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors flex items-center gap-1">
                                        <span>{prod.name}</span>
                                        <span className="text-[10px] text-slate-400 group-hover:text-brand-orange">↗</span>
                                      </span>
                                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${prod.badgeColor}`}>
                                        {prod.badge}
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                      {prod.desc}
                                    </p>
                                  </div>
                                </a>
                              );
                            }

                            return (
                              <div
                                key={idx}
                                onClick={() => {
                                  setProductsHovered(false);
                                  scrollToSection(prod.sectionId);
                                }}
                                className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors flex items-start gap-2.5 cursor-pointer group"
                              >
                                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                      {prod.name}
                                    </span>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${prod.badgeColor}`}>
                                      {prod.badge}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                    {prod.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Dropdown Footer */}
                        <div className="pt-2 px-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                            Cloud Ecosystem Platforms
                          </span>
                          <button
                            onClick={() => {
                              setProductsHovered(false);
                              scrollToSection('products');
                            }}
                            className="py-1.5 px-3 rounded-xl text-center text-xs font-bold text-brand-orange bg-orange-50/80 dark:bg-orange-950/40 hover:bg-orange-100 transition-colors flex items-center justify-center gap-1.5"
                          >
                            <span>Explore Products</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Services */}
              <div
                className="relative"
                onMouseEnter={() => setServicesHovered(true)}
                onMouseLeave={() => setServicesHovered(false)}
              >
                <button
                  onClick={() => scrollToSection('services')}
                  className={`relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    activeItem === 'services'
                      ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeItem === 'services' ? 'text-brand-orange' : 'text-slate-400'
                    } group-hover:rotate-180`}
                  />
                  {activeItem === 'services' && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {servicesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full pt-6 right-[-40px] w-[660px] max-w-[85vw] z-50 pointer-events-auto"
                    >
                      <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3.5">
                        {/* Top Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-2.5">
                            <span className="p-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-brand-orange">
                              <Layers className="w-4 h-4" />
                            </span>
                            <div>
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                                Our Core Enterprise Services
                              </h4>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                End-to-end consulting, rollout & technical lifecycle management
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => scrollToSection('services')}
                            className="text-xs font-bold text-brand-orange hover:text-orange-600 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 hover:bg-orange-100 transition-colors"
                          >
                            <span>Scroll to Full Section</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* 2-Column Full Grid with Complete Uncut Descriptions */}
                        <div className="grid grid-cols-2 gap-3">
                          {servicesList.map((srv, idx) => {
                            const Icon = srv.icon;
                            return (
                              <div
                                key={idx}
                                onClick={() => scrollToSection('services')}
                                className="p-3.5 rounded-2xl bg-slate-50/70 hover:bg-orange-50/70 dark:bg-slate-800/40 dark:hover:bg-slate-800/90 border border-slate-200/60 hover:border-brand-orange/40 dark:border-slate-700/60 transition-all duration-200 cursor-pointer group flex items-start gap-3"
                              >
                                <div className={`p-2.5 rounded-xl ${srv.color} group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0 shadow-xs`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                      {srv.name}
                                    </h5>
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-semibold border border-slate-200 dark:border-slate-700 shrink-0">
                                      {srv.tag}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {srv.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom Footer Info Strip */}
                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>Hosur, Tamil Nadu based on-site & remote principal consultants</span>
                          </span>
                          <a
                            href="tel:+919566823219"
                            className="font-bold text-brand-orange hover:underline flex items-center gap-1"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Talk to an Expert: +91 95668 23219</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 4. Industries */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesHovered(true)}
                onMouseLeave={() => setIndustriesHovered(false)}
              >
                <button
                  onClick={() => scrollToSection('industries')}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                    activeItem === 'industries'
                      ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      activeItem === 'industries' ? 'text-brand-orange' : 'text-slate-400'
                    } group-hover:rotate-180`}
                  />
                  {activeItem === 'industries' && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {industriesHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full pt-6 right-0 w-[640px] max-w-[85vw] z-50 pointer-events-auto"
                    >
                      <div className="p-4.5 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 dark:border-slate-800 px-1">
                          <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue">
                              <Building2 className="w-4 h-4" />
                            </span>
                            <div>
                              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                                Industries We Transform
                              </h4>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                Domain-tailored enterprise ERP architectures
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => scrollToSection('industries')}
                            className="text-xs font-bold text-brand-orange hover:text-orange-600 flex items-center gap-1 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 hover:bg-orange-100 transition-colors"
                          >
                            <span>Explore Section</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {industriesList.map((ind, idx) => {
                            const Icon = ind.icon;
                            return (
                              <div
                                key={idx}
                                onClick={() => scrollToSection('industries')}
                                className="p-3 rounded-2xl bg-slate-50/70 hover:bg-orange-50/70 dark:bg-slate-800/40 dark:hover:bg-slate-800/90 border border-slate-200/60 hover:border-brand-orange/40 dark:border-slate-700/60 transition-colors cursor-pointer group flex items-start gap-3"
                              >
                                <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors shrink-0 shadow-xs">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors">
                                    {ind.name}
                                  </div>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                                    {ind.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 5. Contact us */}
              <button
                onClick={() => scrollToSection('contact')}
                className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  activeItem === 'contact'
                    ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30 dark:border-brand-orange/40 shadow-xs'
                    : 'text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>Contact us</span>
                {activeItem === 'contact' && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute bottom-0 inset-x-3 h-0.5 bg-gradient-to-r from-brand-orange to-orange-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Right Side: Theme Toggle + Get a Quote (Phone number removed) */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              {/* Admin Portal Pill */}
              {isAuthenticated && (
                <Link
                  to="/admin"
                  className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-brand-brightBlue bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Shield className="w-3 h-3" />
                  Admin
                </Link>
              )}

              {/* "Get a Quote" Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side on Mobile: Theme toggle + Quick Quote button */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 shadow-sm"
              >
                Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Menu: Shows all 7 navbar items directly below top bar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for tapping outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Mobile Menu Panel: Shows ALL NAVBARS right here */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="relative z-50 lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto max-h-[calc(100dvh-68px)] px-4 py-3 space-y-1.5"
            >
              {/* Mobile Links List */}
              <div className="space-y-1">
                    {/* 1. Home */}
                    <button
                      onClick={() => {
                        setActiveItem('home');
                        setIsOpen(false);
                        if (location.pathname !== '/') {
                          navigate('/');
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        activeItem === 'home'
                          ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                          : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>Home</span>
                      {activeItem === 'home' && (
                        <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                      )}
                    </button>

                    {/* 2. About us */}
                    <button
                      onClick={() => scrollToSection('about')}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        activeItem === 'about'
                          ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                          : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>About us</span>
                      {activeItem === 'about' && (
                        <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                      )}
                    </button>

                    {/* 3. ERP Solutions ⌄ */}
                    <div>
                      <button
                        onClick={() => setMobileSapExpanded(!mobileSapExpanded)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          activeItem === 'solutions'
                            ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                            : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>ERP Solutions</span>
                          {activeItem === 'solutions' && (
                            <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeItem === 'solutions' ? 'text-brand-orange' : 'text-slate-400'
                        } ${mobileSapExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileSapExpanded && (
                        <div className="pl-4 pr-1 py-1.5 space-y-1.5 border-l-2 border-brand-orange/40 ml-4 my-1">
                          {/* 1. JIT ERP (Above SAP B1) */}
                          <button
                            onClick={() => scrollToSection('solutions')}
                            className="w-full flex items-center gap-2.5 text-left py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                            <span>JIT ERP</span>
                          </button>

                          {/* 2. SAP Business One (SAP B1) */}
                          <Link
                            to="/solutions/sap-business-one"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                            <span>SAP Business One (SAP B1)</span>
                          </Link>

                          {/* 3. SAP B1 Add-ons (Below SAP B1, with arrow to show/hide items below) */}
                          <div>
                            <button
                              onClick={() => setMobileSapAddonsExpanded(!mobileSapAddonsExpanded)}
                              className="w-full flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold text-amber-900 dark:text-amber-200 bg-amber-50/90 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-200/80 dark:border-amber-900/50 transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                <span>SAP B1 Add-ons</span>
                              </span>
                              <ChevronDown className={`w-3.5 h-3.5 text-amber-600 transition-transform ${mobileSapAddonsExpanded ? 'rotate-180 text-brand-orange' : ''}`} />
                            </button>

                            {/* Dropdown items shown below SAP B1 Add-ons when arrow clicked */}
                            {mobileSapAddonsExpanded && (
                              <div className="pl-3.5 pr-1 py-1 space-y-1 mt-1 border-l-2 border-amber-300 dark:border-amber-700/60 ml-3.5 max-h-72 overflow-y-auto">
                                {specializedAddons.map((addon, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => navigateToAddon(addon.id)}
                                    className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-800/60 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors flex items-center gap-2"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                                    <span>{addon.name}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* SAP B1 Mobile Applications Accordion */}
                          <div>
                            <button
                              onClick={() => setMobileSapMobileAppsExpanded(!mobileSapMobileAppsExpanded)}
                              className="w-full flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold text-emerald-900 dark:text-emerald-200 bg-emerald-50/90 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200/80 dark:border-emerald-900/50 transition-colors"
                            >
                              <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                <span>SAP B1 Mobile Applications</span>
                              </span>
                              <ChevronDown className={`w-3.5 h-3.5 text-emerald-600 transition-transform ${mobileSapMobileAppsExpanded ? 'rotate-180 text-brand-orange' : ''}`} />
                            </button>

                            {/* Dropdown items shown below SAP B1 Mobile Applications */}
                            {mobileSapMobileAppsExpanded && (
                              <div className="pl-3.5 pr-1 py-1 space-y-1 mt-1 border-l-2 border-emerald-300 dark:border-emerald-700/60 ml-3.5 max-h-60 overflow-y-auto">
                                {sapB1MobileApps.map((app, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => navigateToAddon(app.id)}
                                    className="w-full text-left py-1.5 px-2.5 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-800/60 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors flex items-center gap-2"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                                    <span>{app.name}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* 4. SAP S/4HANA Cloud */}
                          <Link
                            to="/solutions/sap-s4hana"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>SAP S/4HANA Cloud</span>
                          </Link>

                          {/* 5. Oracle NetSuite Cloud ERP */}
                          <Link
                            to="/solutions/oracle-netsuite"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span>Oracle NetSuite Cloud ERP</span>
                          </Link>

                          {/* 6. Zoho Enterprise Suite */}
                          <Link
                            to="/solutions/zoho-enterprise"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>Zoho Enterprise Suite</span>
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* 4. Our Products ⌄ */}
                    <div>
                      <button
                        onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          activeItem === 'products'
                            ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                            : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>Our Products</span>
                          {activeItem === 'products' && (
                            <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeItem === 'products' ? 'text-brand-orange' : 'text-slate-400'
                        } ${mobileProductsExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileProductsExpanded && (
                        <div className="pl-4 pr-1 py-1.5 space-y-1.5 border-l-2 border-brand-orange/40 ml-4 my-1">
                          {/* 1. Bizearch */}
                          <a
                            href="https://bizearch.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition-colors"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>Bizearch</span>
                            </span>
                            <span className="text-[10px] text-emerald-600 font-extrabold">↗</span>
                          </a>

                          {/* 2. Egates */}
                          <a
                            href="https://egates.jishnuinfotech.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition-colors"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                              <span>Egates</span>
                            </span>
                            <span className="text-[10px] text-brand-orange font-extrabold">↗</span>
                          </a>

                          {/* 3. Astrojit */}
                          <a
                            href="https://astrojit.co.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition-colors"
                          >
                            <span className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                              <span>Astrojit</span>
                            </span>
                            <span className="text-[10px] text-purple-600 font-extrabold">↗</span>
                          </a>
                        </div>
                      )}
                    </div>

                    {/* 5. Services ⌄ */}
                    <div>
                      <button
                        onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          activeItem === 'services'
                            ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                            : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>Services</span>
                          {activeItem === 'services' && (
                            <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeItem === 'services' ? 'text-brand-orange' : 'text-slate-400'
                        } ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileServicesExpanded && (
                        <div className="pl-4 pr-1 py-1.5 space-y-1.5 border-l-2 border-brand-orange/40 ml-4 my-1">
                          {servicesList.map((srv, idx) => (
                            <button
                              key={idx}
                              onClick={() => scrollToSection('services')}
                              className="w-full text-left py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition-colors flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              <span>{srv.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 6. Industries ⌄ */}
                    <div>
                      <button
                        onClick={() => setMobileIndustriesExpanded(!mobileIndustriesExpanded)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          activeItem === 'industries'
                            ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                            : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>Industries</span>
                          {activeItem === 'industries' && (
                            <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                          )}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeItem === 'industries' ? 'text-brand-orange' : 'text-slate-400'
                        } ${mobileIndustriesExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileIndustriesExpanded && (
                        <div className="pl-4 pr-1 py-1.5 space-y-1.5 border-l-2 border-brand-orange/40 ml-4 my-1">
                          {industriesList.map((ind, idx) => (
                            <button
                              key={idx}
                              onClick={() => scrollToSection('industries')}
                              className="w-full text-left py-2 px-3 rounded-xl text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-900/60 hover:text-brand-orange hover:bg-orange-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-800 transition-colors flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                              <span>{ind.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* 7. Contact us */}
                    <button
                      onClick={() => scrollToSection('contact')}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                        activeItem === 'contact'
                          ? 'text-brand-orange font-bold bg-orange-500/10 dark:bg-orange-500/20 border border-brand-orange/30'
                          : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>Contact us</span>
                      {activeItem === 'contact' && (
                        <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 shadow-sm shadow-orange-500" />
                      )}
                    </button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-orange to-orange-500 shadow-lg shadow-orange-500/25"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                {/* Mobile Drawer Footer: Address, Phone, Email, LinkedIn */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5 text-xs text-slate-600 dark:text-slate-400 mt-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight">
                      &ldquo;Kesavan Arcade&rdquo;, 2nd Floor, NGGO&rsquo;s Colony, Bagalur Road, Hosur &ndash; 635 109
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <a href="tel:+919566823219" className="font-semibold text-slate-900 dark:text-white text-xs">
                      +91 95668 23219
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-brightBlue shrink-0" />
                    <a href="mailto:info@jishnuinfotech.com" className="hover:text-brand-orange text-xs">
                      info@jishnuinfotech.com
                    </a>
                  </div>

                  <div className="pt-1">
                    <a
                      href="https://www.linkedin.com/company/jishnu-infotech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue text-xs font-semibold"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </header>
);
}
