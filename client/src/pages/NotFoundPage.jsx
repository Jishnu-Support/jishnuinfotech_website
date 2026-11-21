import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Endpoint Not Found | Jishnu Infotech</title>
      </Helmet>

      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
        <div className="text-center max-w-lg mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-8xl sm:text-9xl font-extrabold font-heading bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent"
          >
            404
          </motion.div>

          <h1 className="mt-4 text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
            Architectural Endpoint Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The page or route you are looking for has been moved, refactored, or does not exist in our system registry.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-brand-orange to-brand-lightOrange shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home Base</span>
            </Link>

            <Link
              to="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Browse Engineering Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
