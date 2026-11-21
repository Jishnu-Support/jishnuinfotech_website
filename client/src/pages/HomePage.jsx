import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';
import About from '../components/About';
import Services from '../components/Services';
import IndustriesSection from '../components/IndustriesSection';
import CTABanner from '../components/CTABanner';
import Achievements from '../components/Achievements';
import PlatformComparison from '../components/PlatformComparison';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import PreFooterStrip from '../components/PreFooterStrip';

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jishnu Infotech Private Limited',
    alternateName: 'Jishnu Infotech',
    url: 'https://jishnuinfotech.com',
    logo: 'https://jishnuinfotech.com/logo.jpg',
    description:
      'ERP and Business Transformation consulting company helping organizations improve business processes, implement enterprise applications, and achieve sustainable digital transformation across SAP Business One, SAP S/4HANA, Oracle NetSuite, and Zoho.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '"Kesavan Arcade", Plot # 1, Door # 4/223-1AC, 2nd Floor, NGGO\'s Colony, Bagalur Road',
      addressLocality: 'Hosur',
      addressRegion: 'Tamil Nadu',
      postalCode: '635109',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-95668-23219',
      contactType: 'customer service',
      email: 'info@jishnuinfotech.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
    sameAs: [
      'https://www.linkedin.com/company/jishnu-infotech',
      'https://twitter.com/jishnu_infotech',
      'https://facebook.com/jishnuinfotech',
    ],
  };

  return (
    <>
      <Helmet>
        <title>Jishnu Infotech | ERP & Business Transformation Consulting | Hosur, Tamil Nadu</title>
        <meta
          name="description"
          content="Jishnu Infotech is an ERP and Business Transformation consulting company in Hosur, Tamil Nadu. Certified SAP Business One, SAP S/4HANA, Oracle NetSuite, and Zoho consulting partner."
        />
        <meta property="og:title" content="Jishnu Infotech | ERP & Business Transformation Consulting" />
        <meta
          property="og:description"
          content="Transform Your Business. Empower Your People. Accelerate Growth. SAP, Oracle NetSuite, Zoho ERP consulting, implementation, and AMC."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jishnuinfotech.com" />
        <meta property="og:image" content="/logo.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Jishnu Infotech (Driving Digital Transformation with Precision) */}
        <About />

        {/* 3. Our Solutions (SAP: SAP B1 & S4HANA, NetSuite, Zoho) */}
        <SolutionsSection />

        {/* 4. Our Products (JIT ERP, Bizearch, Egates, Astrojit) */}
        <ProductsSection />

        {/* 5. Core Services (6 Icon Cards in 3x2 Grid) */}
        <Services />

        {/* 6. Industries We Transform (Automotive, Manufacturing, Logistics, Retail, Pharma, Services) */}
        <IndustriesSection />

        {/* 6. CTA Banner (Ready to Modernize Your Business Systems?) */}
        <CTABanner />

        {/* 6. Achievements / Counters (Delivering Excellence at Every Step + 50+ Experts) */}
        <Achievements />

        {/* Interactive Platform Comparison & Fitment Matchmaker */}
        <PlatformComparison />

        {/* 8. FAQ Accordion + Ticker Strip */}
        <FAQ />

        {/* 9. Contact Section with Working Form & Map */}
        <Contact />

        {/* 11. Pre-Footer Strip */}
        <PreFooterStrip />
      </main>
    </>
  );
}
