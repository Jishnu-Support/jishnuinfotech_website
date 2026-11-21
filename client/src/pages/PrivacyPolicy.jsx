import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Jishnu Infotech Private Limited</title>
        <meta
          name="description"
          content="Privacy Policy for Jishnu Infotech Private Limited. Explains how personal data is handled under the Digital Personal Data Protection Act, 2023."
        />
      </Helmet>

      <div className="pt-24 pb-24 min-h-screen">
        {/* Header Hero Banner with Global Coventic Teal Lagoon Animation */}
        <section className="relative overflow-hidden pt-6 pb-12 mb-8 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home</span>
            </Link>

            <div className="flex items-center gap-3 text-brand-orange text-sm font-bold uppercase tracking-wider mb-2">
              <Shield className="w-5 h-5" />
              <span>Digital Personal Data Protection Act, 2023 Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Jishnu Infotech Private Limited &bull; Hosur, Tamil Nadu, India
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
            <p>
              Jishnu Infotech ("Jishnu Infotech", "we", "us", or "our") provides ERP consulting, business process re-engineering, ERP implementation, customisation, integration, data migration, and support services. This Privacy Policy explains how we handle personal information when you visit <strong>jishnuinfotech.com</strong>, submit an enquiry, or otherwise interact with us.
            </p>
            <p>
              We handle personal data in accordance with the <strong>Digital Personal Data Protection Act, 2023</strong> and other applicable Indian law. We collect only what we need in order to respond to enquiries and operate this website.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              1. Information We Collect
            </h2>
            <p>
              When you complete our contact form or email us, we collect your name, email address, telephone number, the nature of your enquiry, and any details you choose to include in your message. If you go on to engage us, we may also collect business contact details for the people we work with at your organisation.
            </p>
            <p>
              Our web server and security software record standard technical data, including your IP address, browser and device type, referring page, and the date and time of your visit. This is used to operate the site, diagnose faults, and protect against malicious activity.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              2. Cookies & Analytics
            </h2>
            <p>
              This website uses a small number of cookies that are necessary for it to function, such as maintaining your session and supporting form submission and security checks. We may also use analytics cookies to understand in aggregate how the site is used. You can block or delete cookies through your browser settings.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              3. Client and Project Data
            </h2>
            <p>
              In the course of ERP consulting, implementation, migration, and support work, we may be given access to systems and data belonging to our clients, which can include personal data relating to their employees, customers, or suppliers. In that context, the client is the data fiduciary and Jishnu Infotech acts as a data processor on the client's instructions. Such work is governed by the engagement agreement, confidentiality terms, and data processing terms agreed with that client. We do not sell personal information, and we do not use your enquiry details for unrelated marketing without your consent.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              4. Data Retention & Security Measures
            </h2>
            <p>
              We keep enquiry data for as long as needed to deal with your enquiry, and for a reasonable period afterwards for business record-keeping, unless you ask us to delete it sooner. Records relating to engagements are retained for the period required by contract and by applicable tax and accounting law.
            </p>
            <p>
              We apply reasonable technical and organisational measures to protect personal information, including encrypted transport (HTTPS), access controls, and website security monitoring.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              5. Your Rights Under Indian Law
            </h2>
            <p>
              Subject to applicable law, you may ask what personal data we hold about you and how it is processed, ask us to correct inaccurate data, ask us to delete personal data we no longer have a lawful reason to keep, or withdraw consent previously given.
            </p>

            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 mt-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Contact Us Regarding Privacy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Office Address:</strong> &ldquo;Kesavan Arcade&rdquo;, Plot # 1, Door # 4/223-1AC, 2nd Floor, NGGO&rsquo;s Colony, Bagalur Road, Hosur &ndash; 635 109, Krishnagiri District, Tamil Nadu, India.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Registered Office:</strong> 5/704-179A, Bagalur Rd, Pasumai Nagar, KCC Nagar, Hosur, Tamil Nadu 635126, India.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Phone / Hotline:</strong> +91 95668 23219 &bull; <strong>Email:</strong> contact@jishnuinfotech.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
