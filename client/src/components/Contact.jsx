import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import api from '../api/client';
import { useToast } from '../context/ToastContext';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid corporate email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Please select or enter an engagement scope'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: 'ERP Consultation & Selection',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await api.post('/contact', data);
      if (res.data?.success) {
        setSubmitted(true);
        reset();
        toast('Inquiry submitted! Our solutions team will reach out within 24 hours.', 'success');
        
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0B3D91', '#1E90FF', '#FF7A00'],
          });
        } catch (e) {
          // ignore
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit inquiry. Please try again.';
      toast(msg, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-deepBlue/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Do You Need Free Consultation?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Let's Talk About Your{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Business Transformation
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We're always ready to help your business. Schedule an assessment with our senior ERP and business transformation consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Map Card (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xl space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Our Offices &amp; Locations
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Jishnu Infotech Private Limited provides ERP consulting, business process re-engineering, implementation, customization, integration, and AMC support.
              </p>

              <div className="space-y-4 pt-2">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-brand-orange shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-orange">Office Address</h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5 leading-snug">
                      &ldquo;Kesavan Arcade&rdquo;, Plot # 1, Door # 4/223-1AC, 2nd Floor, NGGO&rsquo;s Colony, Bagalur Road, Hosur &ndash; 635 109, Krishnagiri District, Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                {/* Registered Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-brand-brightBlue shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-brightBlue">Registered Office</h4>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5 leading-snug">
                      5/704-179A, Bagalur Rd, Pasumai Nagar, KCC Nagar, Hosur, Tamil Nadu &ndash; 635 126, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/60 text-brand-orange shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us Anytime</h4>
                    <a
                      href="tel:+919566823219"
                      className="text-sm font-medium text-brand-brightBlue dark:text-brand-orange hover:underline mt-0.5 block font-bold"
                    >
                      +91 95668 23219
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Send E-Mail</h4>
                    <a
                      href="mailto:contact@jishnuinfotech.com"
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-brand-orange mt-0.5 block"
                    >
                      contact@jishnuinfotech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Consultation Response</h4>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                      Prompt callback within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map pointing to Hosur, Tamil Nadu */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-lg h-60 relative">
              <iframe
                title="Jishnu Infotech Hosur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.354020967392!2d77.82869037483664!3d12.742398987552554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713a268b37ad%3A0xe543bc94a974b886!2sBagalur%20Rd%2C%20Hosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[30%] contrast-125 dark:invert dark:hue-rotate-180"
              />
            </div>
          </div>

          {/* Form Card (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Jishnu Infotech. An enterprise solutions consultant will contact you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-brand-orange hover:bg-brand-lightOrange"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      Book Free Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Tell us about your systems, processes, or implementation requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Soundar"
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                          errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@company.com"
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                          errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="+91 95668 23219"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Platform / Service of Interest *
                      </label>
                      <select
                        {...register('subject')}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      >
                        <option value="SAP Business One">SAP Business One Implementation</option>
                        <option value="SAP S/4HANA">SAP S/4HANA Migration & Strategy</option>
                        <option value="Oracle NetSuite">Oracle NetSuite Cloud ERP</option>
                        <option value="Zoho One / CRM">Zoho One & CRM Ecosystem</option>
                        <option value="ERP Consulting & Selection">ERP Fitment & Selection Advisory</option>
                        <option value="Business Process Re-engineering">Business Process Re-engineering</option>
                        <option value="Customization & Integration">Customization & API Integration</option>
                        <option value="Data Migration">Data Migration & Cleansing</option>
                        <option value="Support & AMC">ERP Support & AMC Contracts</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Describe Your Operational Challenges or Requirements *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your industry, current software, number of users, or planned timeline..."
                      {...register('message')}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                        errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-lightOrange shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Free Consultation</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Your operational data and processes are held in strict commercial confidence.</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
