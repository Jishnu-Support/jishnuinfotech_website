import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, X, Calendar, UserCheck } from 'lucide-react';
import api from '../api/client';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'SAP Business One', 'SAP S/4HANA', 'Oracle NetSuite', 'Zoho', 'Integration', 'Migration'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get('/projects');
        if (res.data?.data) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.warn('Projects fallback load:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Proven Track Record
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Client Success &{' '}
            <span className="bg-gradient-to-r from-brand-deepBlue via-brand-brightBlue to-brand-orange bg-clip-text text-transparent">
              Implementation Case Studies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore recent enterprise transformations across automotive manufacturing, omnichannel retail, multi-entity conglomerates, and supply chain logistics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-brightBlue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-lg hover:shadow-2xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-950 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-deepBlue/80 text-white backdrop-blur-md border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-orange text-white shadow-md">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-brand-brightBlue dark:text-brand-orange font-semibold uppercase tracking-wider mb-1">
                      {project.client}
                    </div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold font-heading text-slate-900 dark:text-white hover:text-brand-orange transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(project.technologies || []).slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="font-semibold text-brand-brightBlue dark:text-brand-orange hover:underline focus:outline-none"
                      >
                        Case Study Details &rarr;
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View Source on GitHub"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Live Demo"
                            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-brand-orange" />
                    <span>Client: <strong className="text-slate-800 dark:text-slate-200">{selectedProject.client}</strong></span>
                  </div>
                  {selectedProject.completionDate && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-brightBlue" />
                      <span>Completed: <strong className="text-slate-800 dark:text-slate-200">{selectedProject.completionDate}</strong></span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                    Architecture & Solution Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description || selectedProject.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProject.technologies || []).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-brand-brightBlue dark:text-brand-orange border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-brand-orange hover:bg-brand-lightOrange shadow-md transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Production Demo</span>
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
