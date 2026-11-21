import React from 'react';
import { PhoneCall, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function PreFooterStrip() {
  return (
    <section className="bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-xs border-t border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Item 1: Looking for help? */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 hover:border-brand-orange/40 shadow-xs transition-colors">
            <div className="p-3 rounded-xl bg-orange-500/10 text-brand-orange shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Looking for help?</div>
              <a
                href="#contact"
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-orange dark:hover:text-brand-orange transition-colors flex items-center gap-1 mt-0.5"
              >
                <span>Contact us Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Item 2: Keep in touch */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 hover:border-blue-500/40 shadow-xs transition-colors">
            <div className="p-3 rounded-xl bg-blue-500/10 text-brand-brightBlue shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Keep in touch:</div>
              <a
                href="https://www.linkedin.com/company/jishnu-infotech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-brand-brightBlue dark:hover:text-brand-brightBlue transition-colors flex items-center gap-1 mt-0.5"
              >
                <span>Like us on LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Item 3: Do you need free Consultation? */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 hover:border-emerald-500/40 shadow-xs transition-colors">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Do you need free Consultation?</div>
              <a
                href="mailto:info@jishnuinfotech.com"
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1 mt-0.5"
              >
                <span>Send e-Mail: info@jishnuinfotech.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
