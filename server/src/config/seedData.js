import bcrypt from 'bcryptjs';

export const getInitialSeedData = () => {
  const salt = bcrypt.genSaltSync(10);
  const adminPasswordHash = bcrypt.hashSync('admin123Password!', salt);

  const users = [
    {
      id: 'usr_admin_001',
      email: 'admin@jishnuinfotech.com',
      passwordHash: adminPasswordHash,
      name: 'Jishnu Administrator',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const services = [
    {
      id: 'srv_001',
      title: 'ERP Consulting & Selection',
      slug: 'erp-consulting-selection',
      shortDesc: 'Independent advice on selecting the right ERP matched to your business size, complexity, and growth plans. We assess what you actually need, not what is easiest to deploy.',
      fullDesc: 'ERP decisions are expensive to reverse. We assess how your business operates, establish what it genuinely needs from an enterprise platform, and evaluate fitment across SAP Business One, SAP S/4HANA, Oracle NetSuite, and Zoho. We deliver an evidence-based recommendation with total cost of ownership (TCO) and clear implementation roadmaps.',
      icon: 'Cpu',
      category: 'Advisory & Strategy',
      features: [
        'Business & Technology Assessment',
        'Requirements Prioritisation & Definition',
        'ERP Fitment & Gap Analysis',
        'Vendor-Independent Platform Recommendation',
        'Total Cost of Ownership (TCO) Analysis',
        'Phased Implementation Roadmap'
      ],
      order: 1,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'srv_002',
      title: 'Structured ERP Implementation',
      slug: 'erp-implementation',
      shortDesc: 'End-to-end implementation of SAP Business One, SAP S/4HANA, Oracle NetSuite, and Zoho configured precisely around your business workflows.',
      fullDesc: 'We deliver a structured, outcome-driven implementation approach covering business process mapping, system configuration, master data migration, user role definition, and hands-on training. We ensure faster adoption, reduced operational friction, and measurable business impact from day one.',
      icon: 'Cloud',
      category: 'Implementation',
      features: [
        'Business Process Mapping & Blueprints',
        'Tailored System Configuration & Workflows',
        'Secure Master & Transaction Data Migration',
        'Role-Based User Training & Change Adoption',
        'Real-Time Reporting & Live Dashboards',
        'Go-Live Readiness & Post-Launch Hypercare'
      ],
      order: 2,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'srv_003',
      title: 'ERP Customization & Development',
      slug: 'customization-development',
      shortDesc: 'Tailored ERP solutions designed around your business: custom workflow automation, role-based dashboards, and custom add-on modules.',
      fullDesc: 'Instead of forcing your team to adjust to standard software limitations, we customize your ERP to work exactly the way your business operates. From automated approval hierarchies and bespoke reporting to user interface enhancements, our customizations stay upgrade-safe and scalable.',
      icon: 'Code2',
      category: 'Engineering & Add-ons',
      features: [
        'Custom Workflow Automation & Approvals',
        'Role-Based Interactive Dashboards',
        'Advanced Reporting & Crystal Reports',
        'Custom Fields, Tables & Business Logic',
        'UI/UX Ergonomics & Productivity Tweaks',
        'Upgrade-Safe Architecture Design'
      ],
      order: 3,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'srv_004',
      title: 'Enterprise System Integration',
      slug: 'integration',
      shortDesc: 'Connect ERP with E-commerce, CRM, Banking, Logistics, and Payroll so data is entered once with a single unified version of the truth.',
      fullDesc: 'Most businesses run on multiple systems. We eliminate manual reconciliation and duplicate data entry by engineering robust API interfaces between your ERP and e-commerce platforms, customer CRMs, banking portals, warehouse scanners, and logistics carriers with real-time error logging and reconciliation.',
      icon: 'GitBranch',
      category: 'Integration',
      features: [
        'E-commerce Integration (Shopify, Magento, Custom)',
        'CRM & Lead Pipeline Sync (Zoho, Salesforce)',
        'Automated Banking & Payment Reconciliation',
        'Warehouse & 3PL Logistics Carrier Connections',
        'Payroll, Cost-Centre & Journal Posting',
        'Documented REST & Webhook APIs with Auto-Retry'
      ],
      order: 4,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'srv_005',
      title: 'Seamless Data Migration',
      slug: 'data-migration',
      shortDesc: 'Clean, secure, and structured data migration from legacy systems with zero data loss, rigorous validation, and minimal downtime.',
      fullDesc: 'Moving from legacy software requires extreme precision because carrying bad data forward ruins a digital transformation. We perform comprehensive assessment, automated data cleansing, schema mapping, transformation testing, and cutover rehearsals to guarantee accurate, audit-ready data in your new ERP.',
      icon: 'ShieldCheck',
      category: 'Data & Migration',
      features: [
        'Comprehensive Legacy Data Assessment',
        'Data Cleansing, De-duplication & Standardization',
        'Field-Level Data Mapping & Transformation',
        'Encrypted End-to-End Data Transfer',
        'Reconciliation & Audit Trail Verification',
        'Minimal Downtime Cutover Execution'
      ],
      order: 5,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'srv_006',
      title: 'Support, AMC & User Enablement',
      slug: 'support-amc',
      shortDesc: 'Proactive system monitoring, fast incident resolution, user training, patch updates, and dedicated Annual Maintenance Contracts (AMC).',
      fullDesc: 'Beyond go-live, our dedicated support specialists ensure your ERP and CRM platforms operate at peak efficiency. We provide continuous monitoring, periodic health checks, version upgrades, statutory tax updates, and role-based training to maximize your technology return on investment.',
      icon: 'Sparkles',
      category: 'Managed Services',
      features: [
        'Dedicated Support Desk & Rapid SLA Response',
        'Proactive Health Checks & Performance Tuning',
        'Periodic Upgrades, Patches & Compliance Fixes',
        'Ongoing Role-Based User Enablement Training',
        'Flexible Support Models (On-Demand & AMC)',
        'Preventive Maintenance & Database Optimization'
      ],
      order: 6,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'srv_007',
      title: 'Business Process Re-engineering (BPR)',
      slug: 'business-process-reengineering',
      shortDesc: 'As-Is to To-Be analysis, workflow redesign, and process standardization before you automate. Improve the process before anyone writes code.',
      fullDesc: 'Automating a flawed process only makes the flaw run faster. Our senior business consultants study your operational model function by function, eliminating manual bottlenecks, duplicate handoffs, and informal workarounds to design efficient, accountable workflows that align with modern ERP best practices.',
      icon: 'Cpu',
      category: 'Advisory & Strategy',
      features: [
        'As-Is Process Mapping & Inefficiency Discovery',
        'To-Be Workflow Redesign & Standardization',
        'Elimination of Manual Handoffs & Bottlenecks',
        'Approval Hierarchies & Internal Control Definition',
        'KPI & Management Reporting Alignment',
        'Direct Blueprinting for Clean ERP Deployment'
      ],
      order: 7,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const projects = [
    {
      id: 'proj_001',
      title: 'Precision Engineering: SAP Business One Deployment',
      slug: 'sap-business-one-manufacturing-deployment',
      category: 'SAP Business One',
      client: 'Apex Automotive & Engineering Components',
      summary: 'Complete multi-plant SAP Business One rollout spanning Production, MRP, Inventory, and Quality Inspection with sub-second stock accuracy.',
      description: 'The client struggled with disconnected legacy inventory and spreadsheet-based manufacturing orders. Jishnu Infotech re-engineered the shop-floor workflow and deployed SAP Business One with barcode scanning, automated BOM costing, and real-time machine planning.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://jishnuinfotech.com/solutions/sap-business-one',
      githubUrl: '',
      technologies: ['SAP Business One', 'SAP HANA', 'Crystal Reports', 'Barcode Integration'],
      featured: true,
      completionDate: 'September 2026',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'proj_002',
      title: 'Global Retail & E-Commerce: Oracle NetSuite Transformation',
      slug: 'netsuite-omnichannel-retail-transformation',
      category: 'Oracle NetSuite',
      client: 'Vanguard Lifestyle Brands',
      summary: 'Cloud-native Oracle NetSuite ERP & CRM rollout unifying 28 retail stores, warehouse logistics, Shopify Plus storefront, and automated bank feeds.',
      description: 'Replaced multiple siloed point-of-sale and financial systems with a unified cloud architecture. Jishnu Infotech integrated live inventory synchronization across all retail channels, reducing order fulfillment time by 42% and eliminating month-end inventory discrepancies.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://jishnuinfotech.com/solutions/oracle-netsuite',
      githubUrl: '',
      technologies: ['Oracle NetSuite', 'SuiteScript', 'RESTlet APIs', 'Shopify Plus Sync', 'Celigo'],
      featured: true,
      completionDate: 'July 2026',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'proj_003',
      title: 'Enterprise Multi-Entity Migration: SAP S/4HANA Programme',
      slug: 'sap-s4hana-multi-entity-migration',
      category: 'SAP S/4HANA',
      client: 'Continental Industrial Holdings',
      summary: 'Comprehensive migration from legacy ECC to SAP S/4HANA with automated data cleansing, consolidated global finance, and zero cutover disruption.',
      description: 'A multi-country transformation involving complex statutory compliance, multi-currency ledgers, and supply chain rationalization. Jishnu Infotech guided the enterprise through As-Is / To-Be analysis, fit-gap assessment, brownfield cutover, and post-go-live hypercare.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://jishnuinfotech.com/solutions/sap-s4hana',
      githubUrl: '',
      technologies: ['SAP S/4HANA', 'Fiori', 'ABAP on HANA', 'Data Migration Cockpit'],
      featured: true,
      completionDate: 'May 2026',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'proj_004',
      title: 'Omnichannel B2B CRM & Operations: Zoho One Ecosystem',
      slug: 'zoho-one-crm-operations-rollout',
      category: 'Zoho',
      client: 'Optima Tech Distribution',
      summary: 'End-to-end Zoho CRM, Zoho Books, and Zoho Inventory implementation streamlining 15,000 monthly transactions with automated workflow rules.',
      description: 'Implemented an agile, cost-effective digital operating system on Zoho. Enabled mobile salesperson access, automated quotation-to-invoice workflows, automated WhatsApp customer notifications, and custom analytics dashboards.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://jishnuinfotech.com/solutions/zoho',
      githubUrl: '',
      technologies: ['Zoho One', 'Zoho CRM', 'Zoho Books', 'Deluge Scripting', 'Zoho Flow'],
      featured: false,
      completionDate: 'March 2026',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'proj_005',
      title: 'Banking & Automated Reconciliation Interface',
      slug: 'erp-banking-payment-gateway-integration',
      category: 'Integration',
      client: 'Zenith Logistics & Supply Chain',
      summary: 'Real-time two-way banking API interface automating payment file generation, statement import, and vendor payment reconciliation.',
      description: 'Engineered an automated middleware that interfaces directly with major banking host-to-host servers. Slashed manual accounting entries from 4 days at month-end to under 15 minutes of automated reconciliation.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://jishnuinfotech.com/services/integration',
      githubUrl: '',
      technologies: ['Node.js', 'REST APIs', 'SAP B1 DI-Server', 'AES-256 Encryption', 'Host-to-Host SFTP'],
      featured: false,
      completionDate: 'January 2026',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'proj_006',
      title: 'High-Volume Legacy ERP to Cloud Data Migration',
      slug: 'legacy-data-migration-zero-loss',
      category: 'Migration',
      client: 'Heritage FMCG Manufacturing',
      summary: 'Migration of 12 years of transactional and master records with 100% data integrity, automated reconciliation scripts, and zero downtime.',
      description: 'Assessed, cleansed, and migrated over 2.4 million legacy records into a modern SAP environment. Performed rigorous validation passes, eliminating duplicate customer profiles and obsolete SKUs before final production cutover.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      liveUrl: 'https://jishnuinfotech.com/services/migration',
      githubUrl: '',
      technologies: ['PostgreSQL', 'Data Cleansing Scripts', 'SAP Data Migration Tools', 'ETL Pipelines'],
      featured: false,
      completionDate: 'November 2025',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const teamMembers = [
    {
      id: 'team_001',
      name: 'R. Murali Krishna',
      role: 'Managing Director & Principal ERP Consultant',
      department: 'Executive Leadership',
      bio: 'Over 16 years leading large-scale ERP implementations, business process re-engineering, and digital transformation for industrial enterprises.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      twitter: 'https://twitter.com/jishnu_infotech',
      github: 'https://github.com/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'team_002',
      name: 'S. Koushik Raman',
      role: 'Head of SAP & S/4HANA Practice',
      department: 'SAP Solutions',
      bio: 'Certified SAP Solutions Architect with extensive expertise in SAP Business One, S/4HANA migration paths, MRP, and supply chain orchestration.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      twitter: 'https://twitter.com/jishnu_infotech',
      github: 'https://github.com/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'team_003',
      name: 'Priyanka Sundaram',
      role: 'Lead Cloud ERP & NetSuite Architect',
      department: 'Oracle NetSuite & Cloud',
      bio: 'Specialist in cloud ERP architecture, multi-subsidiary financials, SuiteCommerce integrations, and high-growth retail transformations.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      twitter: 'https://twitter.com/jishnu_infotech',
      github: 'https://github.com/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'team_004',
      name: 'V. Anand Kumar',
      role: 'Director of Integration & Managed Services',
      department: 'Integration & AMC',
      bio: 'Expert in complex API architectures, banking payment integrations, master data migration, and mission-critical 24/7 AMC SLA operations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/company/jishnu-infotech',
      twitter: 'https://twitter.com/jishnu_infotech',
      github: 'https://github.com/jishnu-infotech',
      email: 'contact@jishnuinfotech.com',
      order: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const testimonials = [
    {
      id: 'test_001',
      clientName: 'Managing Director',
      clientRole: 'Executive Management',
      company: 'Leading Precision Manufacturing Company',
      content: 'Jishnu Infotech delivered our SAP implementation with exceptional precision and professionalism. Their team ensured a smooth transition with minimal disruption to our operations.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'test_002',
      clientName: 'Operations Director',
      clientRole: 'Head of Operations',
      company: 'Retail & E-commerce Enterprise',
      content: 'Working with Jishnu Infotech has been a game-changer for our business. Their expertise in ERP and CRM integration helped us streamline workflows and improve customer engagement.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'test_003',
      clientName: 'Chief Financial Officer',
      clientRole: 'Finance & Compliance',
      company: 'Industrial Distribution Conglomerate',
      content: 'Their business process re-engineering team looked at our actual workflow before suggesting any software. When they implemented NetSuite, it fit like a glove, and our month-end close is 3x faster.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'test_004',
      clientName: 'Head of IT & Digital Systems',
      clientRole: 'Enterprise Technology',
      company: 'FMCG & Logistics Group',
      content: 'Data migration was our biggest worry. Jishnu Infotech handled over 2 million records with zero data loss and flawless reconciliation. Their post-go-live AMC support has been outstanding.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const pricingPlans = [
    {
      id: 'plan_001',
      name: 'ERP Assessment & Advisory',
      tagline: 'Ideal for businesses evaluating SAP, NetSuite, or Zoho before investing in licenses.',
      priceMonthly: 1499,
      priceAnnual: 1199,
      popular: false,
      features: [
        'Comprehensive As-Is Process & Gap Analysis',
        'ERP Fitment & Platform Selection Matrix',
        'Documented Board-Ready Recommendation Report',
        'Total Cost of Ownership (TCO) Projection',
        'Implementation Roadmap & Risk Mitigation Plan',
        'Dedicated Senior ERP Consultant'
      ],
      ctaText: 'Book Assessment',
      ctaLink: '#contact',
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'plan_002',
      name: 'Structured ERP Implementation',
      tagline: 'Turnkey deployment for SAP Business One, Oracle NetSuite, or Zoho One.',
      priceMonthly: 3999,
      priceAnnual: 3199,
      popular: true,
      features: [
        'Full Implementation Squad (Architect, Functional Lead, Dev)',
        'Tailored Workflow & System Configuration',
        'Clean Data Cleansing & Migration with Zero Loss',
        'Core Integrations (E-commerce, Banking & CRM)',
        'Hands-on Role-Based Staff Enablement',
        'Go-Live Hypercare & Milestone Sign-off Guarantee'
      ],
      ctaText: 'Start Implementation',
      ctaLink: '#contact',
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'plan_003',
      name: 'Enterprise AMC & Optimization',
      tagline: 'Continuous support, statutory updates, enhancements, and SLA-backed maintenance.',
      priceMonthly: 2499,
      priceAnnual: 1999,
      popular: false,
      features: [
        'Dedicated Support Desk with 1-Hour SLA',
        'Preventive System Maintenance & DB Optimization',
        'Statutory Tax & Compliance Updates (GST/TDS)',
        'Custom Reports, Add-ons & Workflow Refinements',
        'Continuous User Training & System Audits',
        'Quarterly Executive Review & Roadmap Planning'
      ],
      ctaText: 'Inquire for AMC',
      ctaLink: '#contact',
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const blogPosts = [
    {
      id: 'post_001',
      title: 'Improve the Process Before You Automate It: The Core Law of ERP Success',
      slug: 'improve-process-before-automating-erp-success',
      excerpt: 'Why automating a flawed process only makes inefficiencies accelerate, and how As-Is to To-Be process re-engineering guarantees a flawless rollout.',
      content: `### Why ERP Implementations Struggle

ERP decisions are expensive to reverse. In our experience across dozens of implementations, programmes fail on process and data far more often than on technology. When companies try to replicate manual workarounds directly inside software, they end up with complex custom code and disillusioned users.

### The Power of As-Is to To-Be Mapping

1. **Uncovering Informal Workarounds**: Map how the business actually runs today, function by function, including the spreadsheet workarounds that never made it into an operational manual.
2. **Standardization Before Customization**: Standardize where variation adds no competitive edge (e.g., standard purchasing, PO approvals, credit limits).
3. **Clean Ownership & Internal Controls**: Clarify who approves, who executes, and who verifies at every stage before configuring software modules.

### Outcome: Fewer Change Requests and Faster Go-Live

By resolving process questions before touching system configuration, organizations eliminate mid-implementation surprises, shorten cutover times, and realize their technology ROI rapidly.`,
      coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      authorName: 'R. Murali Krishna',
      authorRole: 'Managing Director & ERP Consultant',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      category: 'Business Transformation',
      tags: ['ERP', 'BPR', 'Process Optimization', 'Management'],
      readTime: '6 min read',
      published: true,
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'post_002',
      title: 'SAP Business One vs. Oracle NetSuite: Choosing the Right Platform for Your Growth Phase',
      slug: 'sap-business-one-vs-oracle-netsuite-comparison',
      excerpt: 'A pragmatic, vendor-independent breakdown of architectural fit, manufacturing capabilities, total cost of ownership, and cloud hosting.',
      content: `### Independent Advice on the Right ERP

Both SAP Business One and Oracle NetSuite are world-class enterprise suites, but they serve different operational sweet spots.

### Key Evaluation Criteria

- **Discrete & Process Manufacturing**: SAP Business One offers deeply integrated Bill of Materials (BOM), multi-level MRP, machine capacity planning, and shop-floor tracking out of the box.
- **Multi-Subsidiary & True Cloud Architecture**: Oracle NetSuite shines for global multi-entity, multi-currency consolidations and cloud-first distribution networks without on-premise infrastructure requirements.
- **Customization & Extension**: SAP Business One supports rapid development of Crystal Reports and user-defined objects, while NetSuite utilizes SuiteScript and RESTlets.

### Making a Decision You Can Defend to the Board

At Jishnu Infotech, we examine your current systems, transaction volume, and 5-year growth trajectory to provide a transparent evaluation covering licensing, implementation effort, and ongoing maintenance.`,
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      authorName: 'Priyanka Sundaram',
      authorRole: 'Lead Cloud ERP Architect',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      category: 'ERP Selection',
      tags: ['SAP', 'NetSuite', 'Cloud ERP', 'Comparison'],
      readTime: '7 min read',
      published: true,
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'post_003',
      title: 'Zero Data Loss Migration: Safeguarding Enterprise Continuity',
      slug: 'zero-data-loss-migration-enterprise-continuity',
      excerpt: 'How automated cleansing, data dictionary mapping, and rehearsal cutovers protect financial integrity during modern ERP cutovers.',
      content: `### The Hidden Danger of Legacy Data

A transformation that carries bad, duplicated, or corrupted data forward is not a transformation—it is merely moving a headache to a more expensive system.

### The Jishnu Infotech Migration Methodology

1. **Assessment & Scrubbing**: Identify legacy gaps, reconcile historical balances, and eliminate orphan records.
2. **Schema & Field-Level Transformation**: Map legacy structures into SAP or NetSuite data dictionaries with strict validation checks.
3. **Simulated Cutover Rehearsals**: Practice cutovers over a weekend to measure precise downtime windows and confirm balancing statements match to the penny.

With disciplined preparation, enterprise data migration is predictable, secure, and stress-free.`,
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      authorName: 'V. Anand Kumar',
      authorRole: 'Director of Integration & Services',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      category: 'Data Migration',
      tags: ['Data Migration', 'SAP', 'Quality Assurance', 'Security'],
      readTime: '5 min read',
      published: true,
      publishedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const contacts = [
    {
      id: 'cnt_001',
      name: 'R. Soundararajan',
      email: 'soundar@precisionmfg.in',
      phone: '+91 98410 12345',
      subject: 'SAP Business One Implementation Consultation',
      message: 'Hello Jishnu Infotech team, we run an automotive components manufacturing plant near Hosur with 250 employees. We would like to schedule an ERP assessment for SAP Business One.',
      status: 'unread',
      ipAddress: '103.21.124.5',
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      updatedAt: new Date(),
    }
  ];

  const newsletterSubscribers = [
    {
      id: 'sub_001',
      email: 'operations@vanguardbrands.com',
      source: 'website_footer',
      isActive: true,
      subscribedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    }
  ];

  return {
    users,
    services,
    projects,
    teamMembers,
    testimonials,
    pricingPlans,
    blogPosts,
    contacts,
    newsletterSubscribers,
  };
};
