import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Tag, CheckCircle2 } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import api from '../api/client';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/blog/${slug}`);
        if (res.data?.data) {
          setPost(res.data.data);
        }
      } catch (err) {
        console.warn('Failed to load article:', err.message);
      } finally {
        setLoading(false);
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
