import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import HeroBackgroundAnimation from './components/HeroBackgroundAnimation';

// Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminPage from './pages/AdminPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFoundPage from './pages/NotFoundPage';
import SolutionDetailPage from './pages/SolutionDetailPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash || hash.includes('addon')) {
      window.scrollTo(0, 0);
      if (hash && hash.includes('addon')) {
        try {
          window.history.replaceState(null, '', window.location.pathname);
        } catch (e) {}
      }
    } else {
      const elementId = hash.replace('#', '');
      const el = document.getElementById(elementId);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <BrowserRouter>
              <ScrollToTop />
              <div className="min-h-screen flex flex-col relative text-slate-800 dark:text-slate-100 selection:bg-brand-orange selection:text-white transition-colors duration-200">
                {/* Global Unified Coventic Teal Lagoon Dual-Theme Background Animation */}
                <HeroBackgroundAnimation fixed hideVignette />

                <div className="relative z-10 flex flex-col min-h-screen">
                  <ScrollProgress />
                  <Navbar />

                  <div className="flex-1">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
                      <Route path="/solutions/sapb1" element={<SolutionDetailPage />} />
                      <Route path="/solutions/sap-b1" element={<SolutionDetailPage />} />
                      <Route path="/solutions/sap-business-one" element={<SolutionDetailPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/blog/:slug" element={<BlogPostPage />} />
                      <Route path="/admin" element={<AdminPage />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-and-conditions" element={<TermsConditions />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </div>

                  <Footer />
                </div>
              </div>
            </BrowserRouter>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
