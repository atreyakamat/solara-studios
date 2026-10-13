import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from '../../lib/analytics';

interface AgencyHeaderProps {
  onLetsTalkClick?: () => void;
}

export const AgencyHeader: React.FC<AgencyHeaderProps> = ({ onLetsTalkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    trackEvent('primary_cta_click', { label: `Header Nav: ${href}` });
  };

  const handleCta = () => {
    setIsMobileMenuOpen(false);
    trackEvent('primary_cta_click', { label: "Let's Talk Header CTA" });
    if (onLetsTalkClick) {
      onLetsTalkClick();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow,border-color] duration-300 ${
        isScrolled
          ? 'bg-ink/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
      >
        
        {/* Solara Studios Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label="Solara Studios homepage"
        >
          {/* Geometric Solar Emblem with Electric Lime Core */}
          <div className="w-8 h-8 rounded-full bg-deepOlive border border-lime/40 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
            <div className="w-2.5 h-2.5 rounded-full bg-lime shadow-lime-glow animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-lime transition-colors">
              Solara Studios
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
              Digital Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-5 lg:gap-8 font-heading text-sm text-white/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button: Dark Pill with Lime Outline / Glow */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={handleCta}
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-ink border border-lime/60 text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-lime hover:text-ink hover:border-lime shadow-subtle hover:shadow-lime-pill active:scale-95"
          >
            <span>LET&apos;S TALK</span>
            <span className="text-lime group-hover:text-ink transition-colors font-bold" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="agency-mobile-nav"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-white border border-white/20 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          id="agency-mobile-nav"
          className="md:hidden fixed inset-0 top-[65px] bg-ink/98 border-t border-white/10 flex flex-col justify-between p-6 z-50 backdrop-blur-xl"
        >
          <nav className="flex flex-col gap-5 pt-4 font-heading text-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-white hover:text-lime flex items-center justify-between py-2 border-b border-white/10 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-lime text-base">↗</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 mt-auto flex flex-col gap-4">
            <a
              href="#contact"
              onClick={handleCta}
              className="w-full py-4 rounded-full bg-lime text-ink font-heading font-bold text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>LET&apos;S TALK</span>
              <span>↗</span>
            </a>
            <p className="text-center font-mono text-[11px] text-muted">
              Founder: Atreya Kamat · <a href="https://atreyakamat.dev" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-lime">atreyakamat.dev</a>
            </p>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default AgencyHeader;
