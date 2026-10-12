import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-white border-t border-borderLight pt-16 pb-12 font-sans"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-borderLight">
          
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-ink flex items-center justify-center shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-porcelain"
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
              <span className="font-serif text-2xl font-bold tracking-tight text-ink">
                Solara Studios
              </span>
            </div>

            <p className="text-muted text-sm leading-relaxed max-w-sm">
              An independent digital studio building thoughtful websites, conversion-focused landing pages, and practical digital experiences for businesses and agency partners.
            </p>

            <div className="pt-2 font-mono text-xs text-ink">
              <span className="text-muted">Led by </span>
              <a
                href="https://atreyakamat.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-vermilion transition-colors"
              >
                Atreya Kamat
              </a>
              <span className="text-muted"> · Software Engineer &amp; Designer</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3 font-mono text-xs">
            <div className="uppercase text-ink font-bold tracking-widest text-[11px] mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-muted uppercase tracking-wider">
              <li>
                <a href="#work" className="hover:text-ink transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ink transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-solara" className="hover:text-ink transition-colors">
                  Why Solara
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-ink transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-ink transition-colors">
                  Pricing Packages
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-ink transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <div className="uppercase text-ink font-bold tracking-widest text-[11px] mb-4">
              Capabilities
            </div>
            <ul className="space-y-2.5 text-muted uppercase tracking-wider">
              <li>
                <a href="#services" className="hover:text-ink transition-colors">
                  Website Design &amp; Dev
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ink transition-colors">
                  Conversion Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-ink transition-colors">
                  Technical SEO Audit
                </a>
              </li>
              <li>
                <a href="#agencies" className="hover:text-ink transition-colors">
                  White-Label Agency Dev
                </a>
              </li>
              <li>
                <a href="https://atreyakamat.dev" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                  Founder Portfolio ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="lg:col-span-2 space-y-4">
            <div className="font-mono uppercase text-ink font-bold tracking-widest text-[11px]">
              Ready to build?
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Accepting select client sprints and agency partnership bookings.
            </p>
            <a
              href="#contact"
              className="btn-solara-primary w-full text-center text-xs py-2.5"
            >
              Start a project →
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <div>
            © {currentYear} Solara Studios. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="hover:text-ink transition-colors underline"
            >
              Privacy Policy
            </a>
            <a
              href="#top"
              className="hover:text-ink transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
