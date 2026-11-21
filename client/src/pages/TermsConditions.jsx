import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Jishnu Infotech Private Limited</title>
        <meta
          name="description"
          content="Terms and Conditions governing the use of jishnuinfotech.com and engagement with Jishnu Infotech Private Limited."
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
              <FileText className="w-5 h-5" />
              <span>Client Engagement Terms</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Jishnu Infotech Private Limited &bull; Hosur, Krishnagiri District, Tamil Nadu
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-6">
            <p>
              These Terms and Conditions govern your use of <strong>jishnuinfotech.com</strong> (the "website"), operated by Jishnu Infotech ("Jishnu Infotech", "we", "us" or "our"). By accessing or using the website you agree to these terms. If you do not agree, please do not use the website.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              1. Engagements and Contracts
            </h2>
            <p>
              The content on this website is provided for general information about our capabilities and services. It does not constitute professional, technical or commercial advice, and it is not an offer capable of acceptance. Descriptions of services, methodologies, platforms and outcomes are indicative only; actual scope, deliverables, timelines and results depend on the circumstances of each engagement.
            </p>
            <p>
              Any provision of services by Jishnu Infotech is governed by a separate written agreement, proposal, statement of work or purchase order agreed between us and the client. Nothing on this website varies or overrides the terms of such an agreement, and in the event of any conflict the signed engagement documents prevail.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              2. Intellectual Property & Trademarks
            </h2>
            <p>
              Unless stated otherwise, the content of this website, including its text, graphics, layout, design and the Jishnu Infotech name and logo, is owned by or licensed to Jishnu Infotech and is protected by applicable intellectual property laws.
            </p>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <strong>Third-Party Trademarks:</strong><br />
              <strong>SAP</strong>, <strong>SAP Business One</strong> and <strong>SAP S/4HANA</strong> are trademarks of SAP SE.<br />
              <strong>Oracle</strong> and <strong>NetSuite</strong> are trademarks of Oracle Corporation.<br />
              <strong>Zoho</strong> is a trademark of Zoho Corporation.<br />
              All other product names, logos and brands referred to on this website are the property of their respective owners. Software licences for any third-party platform are contracted directly between the client and the relevant vendor.
            </div>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              3. Disclaimer & Limitation of Liability
            </h2>
            <p>
              The website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law we exclude all warranties, express or implied, including any implied warranties of merchantability, fitness for a particular purpose and non-infringement.
            </p>
            <p>
              Jishnu Infotech shall not be liable for any indirect, incidental, special or consequential loss, or for any loss of profit, revenue, business, goodwill, data or anticipated savings, arising out of or in connection with your use of, or inability to use, this website.
            </p>

            <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4">
              4. Governing Law & Exclusive Jurisdiction
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. <strong>The courts at Hosur, Krishnagiri District, Tamil Nadu shall have exclusive jurisdiction over any dispute arising out of or in connection with these terms or your use of this website.</strong>
            </p>

            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 mt-6">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Corporate Inquiries:
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Office Address:</strong> &ldquo;Kesavan Arcade&rdquo;, Plot # 1, Door # 4/223-1AC, 2nd Floor, NGGO&rsquo;s Colony, Bagalur Road, Hosur &ndash; 635 109, Krishnagiri Dist, Tamil Nadu, India.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Registered Office:</strong> 5/704-179A, Bagalur Rd, Pasumai Nagar, KCC Nagar, Hosur, Tamil Nadu 635126, India.
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>Telephone:</strong> +91 95668 23219 &bull; <strong>Email:</strong> contact@jishnuinfotech.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
