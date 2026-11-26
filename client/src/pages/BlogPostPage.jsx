import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Tag, CheckCircle2 } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import api from '../api/client';

const fallbackPosts = [
  {
    id: 'fb-1',
    title: 'SAP Business One HANA vs SQL: Why In-Memory Architecture Matters for Automotive Tier-1 Suppliers',
    slug: 'sap-business-one-hana-vs-sql-manufacturing',
    category: 'SAP B1 Insights',
    authorName: 'Senior SAP Architect',
    authorRole: 'Enterprise Systems Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'Nov 12, 2026',
    publishedAt: '2026-11-12',
    readTime: '6 min read',
    excerpt:
      'A technical deep-dive into how 1-second in-memory MRP calculation prevents factory floor idle time and improves OTIF delivery rates.',
    content: `### The Manufacturing Challenge in Discrete Plants
Automotive component manufacturers and precision engineering plants face tight delivery windows, complex multi-level BOMs, and high-mix low-volume orders. When production planning runs on traditional relational disk-based databases, MRP wizards can take 45 to 90 minutes to compute material shortages across thousands of parts.

### In-Memory HANA Computing: Sub-Second Calculation
By leveraging SAP HANA in-memory architecture:
1. **Real-Time Material Requirements Planning (MRP)**: Planners can simulate multiple demand scenarios in seconds rather than waiting for overnight batch runs.
2. **Interactive Pervasive Dashboards**: Shift managers see live scrap ratios, machine availability, and job-work delivery status directly on mobile and floor terminals.
3. **Automated Statutory Compliance**: Indian GST e-Invoicing, e-Way bills, and TDS reconciliations execute synchronously with accounting document postings.

### Measurable ROI
Plants running SAP Business One on HANA experience a 35% reduction in inventory holding costs and achieve over 99.4% On-Time In-Full (OTIF) dispatch velocity.`,
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tags: ['SAP B1', 'HANA', 'Manufacturing', 'MRP'],
  },
  {
    id: 'fb-2',
    title: 'ECC to SAP S/4HANA: Greenfield vs Brownfield Migration Strategy for Indian Enterprises',
    slug: 'sap-s4hana-greenfield-vs-brownfield-migration',
    category: 'Enterprise Transformation',
    authorName: 'Enterprise Practice Lead',
    authorRole: 'Chief Solution Architect',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    date: 'Nov 04, 2026',
    publishedAt: '2026-11-04',
    readTime: '8 min read',
    excerpt:
      'Key architectural decision criteria for CIOs: managing Universal Journal cutover, custom ABAP remediation, and continuous accounting.',
    content: `### Greenfield vs. Brownfield: Framing the Choice
When transitioning from legacy SAP ECC 6.0 to SAP S/4HANA, enterprise leadership must balance the desire for a clean slate with the imperative to preserve decades of validated historical business records.

### Greenfield: Re-engineering from Scratch
- **Best For**: Conglomerates with heavy custom ABAP debt that no longer reflects modern supply chain models.
- **Advantage**: Full adoption of SAP Best Practices and simplified Universal Journal (ACDOCA) architecture.

### Brownfield: In-Place System Conversion
- **Best For**: Well-maintained ECC instances where historical ledger traceability and operational continuity are paramount.
- **Advantage**: Shorter project timelines, lower user change fatigue, and preserved master data structures with zero cutover data loss.

### Jishnu Infotech's 4-Phase Migration Methodology
We combine automated ABAP remediation tools with As-Is/To-Be process mapping to ensure a zero-data-loss transition with zero operational disruption to active manufacturing lines.`,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['SAP S/4HANA', 'Migration', 'ECC', 'Cloud'],
  },
  {
    id: 'fb-3',
    title: 'NetSuite vs SAP Business One: Selecting the Right ERP for Scaling Multi-Location Companies',
    slug: 'netsuite-vs-sap-business-one-comparison',
    category: 'ERP Consulting',
    authorName: 'Principal Consultant',
    authorRole: 'ERP Selection Advisory',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'Oct 28, 2026',
    publishedAt: '2026-10-28',
    readTime: '10 min read',
    excerpt:
      'An objective, side-by-side comparison of total cost of ownership (TCO), multi-subsidiary consolidation, implementation speed, and manufacturing suitability.',
    content: `### Strategic Fitment Analysis
Selecting between Oracle NetSuite and SAP Business One is not a question of which software is better, but which platform aligns with your operational DNA.

### Oracle NetSuite: Pure Cloud Multi-Entity Agility
- Native multi-currency and multi-subsidiary consolidation (OneWorld).
- Ideal for omnichannel retail, e-commerce brands, high-growth technology firms, and multi-state distribution networks.
- 100% cloud architecture with zero on-premise server maintenance.

### SAP Business One: Deep Discrete Manufacturing Strength
- Unrivalled shop-floor BOM routing, MRP wizards, machine scheduling, and subcontracting (Annexure IV) controls.
- Choice of cloud SaaS or high-performance on-premise factory servers with local LAN speed.
- Native SAP HANA in-memory real-time analytics.

### Making the Right Choice
Talk to Jishnu Infotech's independent ERP advisory team to run a formal fit-gap analysis tailored to your current scale and 5-year enterprise roadmap.`,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['NetSuite', 'SAP B1', 'ERP Selection'],
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(() => fallbackPosts.find((p) => p.slug === slug) || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/blog/${slug}`);
        if (res.data?.data) {
          setPost(res.data.data);
        }
      } catch (err) {
        const fallback = fallbackPosts.find((p) => p.slug === slug);
        if (fallback) setPost(fallback);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-40 pb-20 text-center text-slate-500">
        Loading article analysis...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Link to="/blog" className="mt-4 inline-block text-brand-orange hover:underline">
          &larr; Return to Engineering Blog
        </Link>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <Helmet>
        <title>{post.title} | Jishnu Infotech Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
      </Helmet>

      <article className="pt-24 pb-24 min-h-screen">
        {/* Article Header Hero with Global Coventic Teal Lagoon Animation */}
        <div className="relative overflow-hidden pt-6 pb-10 mb-8 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back button */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Engineering Blog</span>
            </Link>

            {/* Category & Title */}
            <div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-orange text-white shadow-sm inline-block">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.2]">
                {post.title}
              </h1>
              <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author & Metadata Bar */}
          <div className="mt-8 py-5 border-y border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.authorName}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange shadow-md"
              />
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {post.authorName}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {post.authorRole}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-orange" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-brightBlue" />
                {new Date(post.publishedAt || post.createdAt).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>

          {/* Featured Cover Image */}
          <div className="my-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 h-72 sm:h-96 w-full">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Body */}
          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 text-base sm:text-lg leading-relaxed">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                return (
                  <ul key={i} className="space-y-2 list-disc pl-5 my-4">
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j} className="text-sm sm:text-base">
                        {item.replace(/^(- |\d+\. )/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Related Technical Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-brand-brightBlue dark:text-brand-orange border border-slate-200 dark:border-slate-700"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Article Bar */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-heading font-semibold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-brand-orange" />
              Share this architecture dispatch:
            </span>

            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-slate-900 transition-colors shadow-sm"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-brand-brightBlue transition-colors shadow-sm"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-[#25D366] transition-colors shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
