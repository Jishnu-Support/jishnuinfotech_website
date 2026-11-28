import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa6';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, Clock, Building2 } from 'lucide-react';
import api from '../api/client';
import { useToast } from '../context/ToastContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast('Please enter a valid email address.', 'error');
      return;
    }

    setSubscribing(true);
    try {
      const res = await api.post('/newsletter', { email });
      if (res.data?.success) {
        setSubscribed(true);
        setEmail('');
        toast('Subscribed successfully to Jishnu Infotech updates!', 'success');
      }
    } catch (err) {
      toast(err.response?.data?.message || 'Subscription failed. Please retry.', 'error');
    } finally {
      setSubscribing(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/jishnu-infotech' },
    { name: 'X / Twitter', icon: FaXTwitter, href: 'https://twitter.com/jishnu_infotech' },
    { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com/jishnuinfotech' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/jishnuinfotech' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/@jishnuinfotech' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/919566823219' },
  ];

  return (
    <footer className="relative bg-slate-100/90 dark:bg-slate-950/90 backdrop-blur-xs text-slate-700 dark:text-slate-300 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      {/* Radiant Top Brand Accent Stripe */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-1 bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* 1. Brand Logo, Description & Social Media (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <div className="bg-white p-2.5 rounded-2xl inline-block border border-slate-200/90 dark:border-slate-800 shadow-sm">
                <img
                  src="/logo.jpg"
                  alt="Jishnu Infotech"
                  className="h-16 sm:h-20 w-auto max-w-[320px] object-contain rounded-xl"
                />
              </div>
            </Link>

            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Simplifying Enterprise Technology. Powering Business Growth.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Jishnu Infotech is an ERP and Business Transformation consulting company helping mid-market and enterprise organizations streamline business processes, implement modern enterprise platforms, and achieve sustainable digital transformation.
            </p>

            {/* Social Media Channels */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Connect With Us
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={`Jishnu Infotech on ${social.name}`}
                      className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-orange dark:hover:bg-brand-orange flex items-center justify-center transition-all duration-200 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 2. Official Addresses & Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Offices &amp; Contact</span>
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {/* Office Address */}
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">Office Address</div>
                  <div className="leading-snug text-slate-800 dark:text-slate-200 font-medium">
                    &ldquo;Kesavan Arcade&rdquo;, Plot # 1, Door # 4/223-1AC, 2nd Floor, NGGO&rsquo;s Colony, Bagalur Road, Hosur &ndash; 635 109, Krishnagiri District, Tamil Nadu, India.
                  </div>
                </div>
              </div>

              {/* Registered Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-brightBlue shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-brightBlue">Registered Address</div>
                  <div className="leading-snug">
                    5/704-179A, Bagalur Rd, Pasumai Nagar, KCC Nagar, Hosur, Tamil Nadu &ndash; 635 126
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href="tel:+919566823219"
                  className="font-bold text-slate-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                >
                  +91 95668 23219
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-brightBlue shrink-0" />
                <a
                  href="mailto:info@jishnuinfotech.com"
                  className="font-semibold text-slate-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                >
                  info@jishnuinfotech.com
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center gap-2.5 pt-0.5 text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs">Mon &ndash; Sat: 9:00 AM &ndash; 6:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* 3. Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Newsletter</span>
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Subscribe to get the latest ERP insights, regulatory updates (E-Invoice, GST), and digital transformation advisories directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Thank you! You are now subscribed to Jishnu Infotech updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-xs"
                  />
                  <button
                    type="submit"
                    disabled={subscribing}
                    className="absolute right-1 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-600 hover:to-orange-500 shadow-md transition-all disabled:opacity-50"
                  >
                    {subscribing ? '...' : 'Subscribe'}
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Zero spam. Unsubscribe anytime with 1-click.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Jishnu Infotech Private Limited. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/admin" className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}