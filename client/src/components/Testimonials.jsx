import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      title: 'Seamless SAP Implementation Experience',
      rating: 5.0,
      content:
        'Jishnu Infotech delivered our SAP implementation with exceptional precision and professionalism. Their team ensured a smooth transition with minimal disruption to our operations.',
      author: 'Operations Head',
      company: 'Leading Precision Manufacturing Company',
      location: 'Hosur Industrial Cluster',
    },
    {
      id: 2,
      title: 'Reliable Partner for ERP & CRM Transformation',
      rating: 5.0,
      content:
        'Working with Jishnu Infotech has been a game-changer for our business. Their expertise in ERP and CRM integration helped us streamline workflows and improve customer engagement.',
      author: 'Managing Director',
      company: 'Omnichannel Retail & E-commerce Enterprise',
      location: 'Bengaluru / Tamil Nadu',
    },
    {
      id: 3,
      title: 'Flawless NetSuite Cloud Rollout & Multi-Entity Sync',
      rating: 5.0,
      content:
        'Their business process re-engineering team restructured our operational hierarchy before touching software. The result was a spotless Oracle NetSuite rollout delivered ahead of schedule with zero data loss.',
      author: 'Chief Financial Officer',
      company: 'Automotive Tier-1 Component Group',
      location: 'Chennai & Hosur',
    },
  ];

  // Auto-advance every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Overall Rating */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/60 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            What our satisfied customers say{' '}
            <span className="text-brand-orange">about Jishnu Infotech</span>
          </h2>

          {/* Overall Rating Pill */}
          <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900 dark:text-white">4.9 / 5.0</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium border-l border-slate-200 dark:border-slate-700 pl-2">
              (30 Reviews)
            </span>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white dark:bg-slate-800/90 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl min-h-[300px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rating Stars & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1.5">
                      {current.rating.toFixed(1)}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Enterprise Engagement
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  "{current.title}"
                </h3>

                <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{current.content}"
                </p>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base">
                      {current.author}
                    </h4>
                    <p className="text-xs text-brand-orange font-semibold">
                      {current.company}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/80">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? 'w-8 bg-brand-orange'
                        : 'w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-brand-orange transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-brand-orange transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
