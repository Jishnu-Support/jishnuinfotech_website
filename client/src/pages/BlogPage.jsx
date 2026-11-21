import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight, Tag, BookOpen } from 'lucide-react';
import api from '../api/client';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/blog');
        if (res.data?.data) {
          setPosts(res.data.data);
        }
      } catch (err) {
        console.warn('Blog load error:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = ['All', 'Cloud Architecture', 'Artificial Intelligence', 'Software Engineering'];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat =
      selectedCategory === 'All' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <Helmet>
        <title>Engineering Blog & Research | Jishnu Infotech</title>
        <meta
          name="description"
          content="Insights on Multi-Cloud Architecture, Applied Machine Learning, Agentic Systems, and high-scale PERN engineering."
        />
      </Helmet>

      <div className="pt-24 pb-24 min-h-screen">
        {/* Header Hero Banner with Global Coventic Teal Lagoon Animation */}
        <section className="relative overflow-hidden pt-8 pb-14 mb-12 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange px-3.5 py-1 rounded-full bg-orange-500/10 border border-brand-orange/30 inline-block mb-3">
                Jishnu Engineering Dispatches
              </span>
              <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
                Technical Insights &{' '}
                <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
                  Architectural Patterns
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
                Deep dives into distributed systems, ERP implementations, cloud architectures, and modern manufacturing technology.
              </p>

              {/* Search Bar */}
              <div className="mt-8 relative max-w-lg mx-auto">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles by keywords, topics, or tech..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-sm"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-brand-orange text-white shadow-md'
                        : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-xs'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              No matching articles found. Try another search keyword!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-lg hover:shadow-2xl hover:border-brand-brightBlue/50 transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  <Link to={`/blog/${post.slug}`} className="relative h-52 overflow-hidden bg-slate-950 block">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-deepBlue/80 text-white backdrop-blur-md">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-brand-brightBlue transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.authorAvatar}
                          alt={post.authorName}
                          className="w-8 h-8 rounded-full object-cover border border-brand-orange/40"
                        />
                        <div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {post.authorName}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {post.authorRole}
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:underline"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
