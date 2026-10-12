import React, { useState, useEffect } from 'react';
import { trackEvent } from '../../lib/analytics';

interface NavbarProps {
  onStartProjectClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Why Solara', href: '#why-solara' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#pricing' },
    { label: 'Agencies', href: '#agencies' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    trackEvent('primary_cta_click', { label: `Nav: ${href}` });
  };

  const handleCta = () => {
    setIsMobileMenuOpen(false);
    trackEvent('primary_cta_click', { label: 'Nav Header CTA' });
    if (onStartProjectClick) {
      onStartProjectClick();
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-porcelain/95 backdrop-blur-md border-borderLight shadow-subtle'
          : 'bg-porcelain/80 backdrop-blur-sm border-borderLight/60'
      }`}
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          aria-label="Solara Studios homepage"
        >
          {/* Logo Mark: Minimalist studio sun insignia */}
          <div className="w-8 h-8 rounded bg-ink flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
            <svg
              className="w-4 h-4 text-porcelain"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8" cy="8" r="1.5" fill="#32D6C5" />
              <line x1="8" y1="1" x2="8" y2="3" stroke="#F05A3C" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="8" y1="13" x2="8" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="1" y1="8" x2="3" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="13" y1="8" x2="15" y2="8" stroke="#32D6C5" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink leading-none">
              Solara Studios
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-muted leading-none mt-0.5">
              Design · Dev · SEO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider text-muted"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={handleCta}
            className="btn-solara-primary"
          >
            <span>Start a project</span>
            <span className="text-aqua" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 text-ink border border-borderLight rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-porcelain border-b border-borderLight flex flex-col justify-between p-6 overflow-y-auto shadow-elevated z-50"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col gap-4 font-mono text-sm tracking-wider uppercase divide-y divide-borderLight/60"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="pt-4 first:pt-0 text-ink font-semibold flex items-center justify-between hover:text-vermilion transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                <span>{link.label}</span>
                <span className="text-muted" aria-hidden="true">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-borderLight mt-6 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={handleCta}
              className="btn-solara-primary w-full py-3.5 text-center text-sm"
            >
              <span>Start a project</span>
              <span className="text-aqua" aria-hidden="true">→</span>
            </a>
            <div className="text-center font-mono text-[11px] text-muted tracking-wider mt-2">
              Founder: Atreya Kamat · <a href="https://atreyakamat.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">atreyakamat.dev</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
