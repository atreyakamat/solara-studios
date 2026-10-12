import React from 'react';

export const AgencyFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-ink text-white border-t border-deepOlive/60 pt-16 pb-12 font-sans"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-deepOlive border border-lime/40 flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-lime shadow-lime-glow" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Solara Studios
              </span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-sans">
              A contemporary digital studio combining design, engineering, and practical strategy to help ambitious businesses communicate clearly and turn interest into action.
            </p>

            <div className="pt-2 font-mono text-xs text-white/80">
              <span className="text-muted">Founded &amp; Engineered by </span>
              <a
                href="https://atreyakamat.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime underline hover:text-lime-light transition-colors font-bold"
              >
                Atreya Kamat
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-heading text-sm">
            <div className="font-mono text-xs text-lime uppercase tracking-widest font-bold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-white/80 uppercase tracking-wider text-xs">
              <li>
                <a href="#about" className="hover:text-lime transition-colors">
                  About Solara
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-lime transition-colors">
                  Curated Work
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-lime transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-4 space-y-3 font-heading text-sm">
            <div className="font-mono text-xs text-lime uppercase tracking-widest font-bold mb-4">
              Studio Offerings
            </div>
            <ul className="space-y-2.5 text-white/80 uppercase tracking-wider text-xs">
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  Website Design &amp; Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  High-Converting Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  Technical SEO &amp; Core Web Vitals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-lime transition-colors">
                  White-Label Agency Development
                </a>
              </li>
              <li>
                <a
                  href="https://atreyakamat.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors text-lime-muted"
                >
                  Founder Personal Website ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <div>
            © {currentYear} Solara Studios. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors underline">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-lime transition-colors flex items-center gap-1">
              <span>Back to Top</span>
              <span>↑</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default AgencyFooter;
