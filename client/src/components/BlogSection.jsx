import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import api from '../api/client';

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackPosts = [
    {
      id: 1,
      slug: 'agentic-ai-transforming-sap-s4hana-2026',
      title: 'How Agentic AI is Transforming SAP S/4HANA in 2026',
      category: 'IT Solutions',
      author: 'SAP Solutions Team',
      date: 'Nov 12, 2026',
      readTime: '6 min read',
      excerpt:
        'Explore how autonomous AI agents streamline automated invoice reconciliation, multi-tier MRP planning, and predictive supply chain exceptions in modern S/4HANA deployments.',
      coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      slug: 'migrating-legacy-tally-to-sap-business-one',
      title: 'Migrating from Legacy Tally to SAP Business One: A Zero-Downtime Guide',
      category: 'ERP Migration',
      author: 'ERP Migration Practice',
      date: 'Nov 05, 2026',
      readTime: '8 min read',
      excerpt:
        'A comprehensive guide for growing Indian manufacturing and trading firms to extract clean ledgers, deduplicate master inventory, and migrate to SAP Business One without operational pauses.',
      coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      slug: 'oracle-netsuite-vs-sap-cloud-erp-comparison',
      title: 'Oracle NetSuite vs SAP Cloud ERP: The Complete 2026 Evaluation',
      category: 'ERP Consulting',
      author: 'Principal Consultant',
      date: 'Oct 28, 2026',
      readTime: '10 min read',
      excerpt:
        'An objective, side-by-side comparison of total cost of ownership (TCO), multi-subsidiary consolidation, implementation speed, and manufacturing suitability.',
      coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/blog');
        if (res.data?.data && res.data.data.length > 0) {
          setPosts(res.data.data.slice(0, 3));
        } else {
          setPosts(fallbackPosts);
        }
      } catch (err) {
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  return (
    <section id="blog-section" className="py-24 relative overflow-hidden bg-white/75 dark:bg-slate-950/75 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-brand-brightBlue text-xs font-bold uppercase tracking-wider mb-3">
              <span>Latest Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Read our latest{' '}
              <span className="text-brand-orange">blog posts</span>
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 max-w-xl">
              Practical guides, platform comparisons, and business transformation frameworks from our Hosur consulting team.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-brand-deepBlue dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange transition-colors"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, idx) => (
            <article
              key={post.id || idx}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-brand-orange/40 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Cover Image */}
              <Link to={`/blog/${post.slug}`} className="relative h-48 overflow-hidden bg-slate-950 block">
                <img
                  src={post.coverImage || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-deepBlue/90 text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{post.author || 'Jishnu Consultant'}</span>
                    </span>
                    {post.readTime && <span>&bull; {post.readTime}</span>}
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-brightBlue dark:group-hover:text-brand-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-orange-600 transition-colors"
                  >
                    <span>Continue Reading</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
