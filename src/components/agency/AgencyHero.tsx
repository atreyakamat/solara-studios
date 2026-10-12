import React from 'react';
import { trackEvent } from '../../lib/analytics';

interface AgencyHeroProps {
  onStartProject?: () => void;
}

export const AgencyHero: React.FC<AgencyHeroProps> = ({ onStartProject }) => {
  const handleCta = () => {
    trackEvent('primary_cta_click', { label: 'Hero Start Project CTA' });
    if (onStartProject) {
      onStartProject();
    }
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative min-h-[92vh] sm:min-h-screen bg-ink flex flex-col justify-between pt-28 pb-16 sm:pb-24 overflow-hidden border-b border-deepOlive/60"
    >
      {/* Background Subtle Dark Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-75 pointer-events-none" />

      {/* Glossy Organic Curved Green / Lime Visual Meshes (Framing the Edges) */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-lime/25 via-deepOlive/40 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-32 w-80 h-80 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-bl from-lime/20 via-darkGreen/60 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/3 w-96 h-64 rounded-full bg-gradient-to-t from-lime/15 via-deepOlive/30 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Organic Vector Curved Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-100 200 C 300 100, 600 450, 1100 250 C 1300 150, 1500 350, 1600 500"
          stroke="#A6FF19"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
        <path
          d="M0 700 C 400 550, 800 800, 1200 600 C 1400 500, 1500 700, 1600 750"
          stroke="#C4FF77"
          strokeWidth="1.2"
        />
      </svg>

      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center">
        
        {/* Compact Hero Image Strip (3 Visual Panels in Upper Center) */}
        <div className="mb-8 sm:mb-12 flex items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto w-full">
          {/* Panel 1 */}
          <div className="relative flex-1 h-20 sm:h-28 rounded-xl overflow-hidden border border-white/15 bg-gradient-to-b from-deepOlive to-ink shadow-elevated group">
            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono text-lime font-bold uppercase tracking-wider">
              <span>SYS // 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
            </div>
            {/* Visual pattern preview */}
            <div className="p-3 text-left">
              <div className="w-8 h-1 bg-lime/60 rounded mb-1" />
              <div className="w-12 h-1 bg-white/40 rounded" />
            </div>
          </div>

          {/* Panel 2 (Center Hero Accent) */}
          <div className="relative flex-1 h-24 sm:h-32 rounded-xl overflow-hidden border-2 border-lime/80 bg-gradient-to-b from-darkGreen to-ink shadow-lime-glow group">
            <div className="absolute inset-0 bg-gradient-to-tr from-lime/20 via-deepOlive/50 to-transparent" />
            <div className="absolute top-2 right-2">
              <span className="inline-block w-2 h-2 rounded-full bg-lime" />
            </div>
            <div className="p-3 h-full flex flex-col justify-between text-left">
              <span className="font-mono text-[9px] text-lime font-bold uppercase tracking-wider">
                FLAGSHIP
              </span>
              <div>
                <div className="text-[11px] font-heading font-bold text-white leading-tight">
                  Pixel N Purpose
                </div>
                <div className="text-[9px] font-mono text-muted">
                  Agency Platform
                </div>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="relative flex-1 h-20 sm:h-28 rounded-xl overflow-hidden border border-white/15 bg-gradient-to-b from-deepOlive to-ink shadow-elevated group">
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="p-3 text-left">
              <div className="font-mono text-[9px] text-lime font-bold uppercase tracking-wider mb-1">
                DEV // 03
              </div>
              <div className="text-[10px] font-heading text-white/90">
                Amthane Valley
              </div>
            </div>
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-muted">
              Direct Booking
            </div>
          </div>
        </div>

        {/* Primary Headline: "IDEAS BUILT TO MOVE." */}
        <h1
          id="hero-title"
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.92] uppercase max-w-5xl mb-6 sm:mb-8"
        >
          <span className="text-lime block sm:inline">IDEAS </span>
          <span className="text-white">BUILT TO MOVE</span>
          <span className="text-lime">.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-white/80 font-sans text-base sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-normal">
          From strategy to execution, we build digital experiences that help ambitious brands stand out, connect, and grow.
        </p>

        {/* Hero CTA Pill: Neon-Lime Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            onClick={handleCta}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-lime text-ink font-heading font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 hover:bg-lime-light hover:shadow-lime-pill hover:scale-105 active:scale-95"
          >
            <span>START YOUR PROJECT</span>
            <span
              className="w-7 h-7 rounded-full bg-ink text-lime flex items-center justify-center font-bold text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>

        {/* Subtle Proof Details */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs uppercase tracking-wider text-muted">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span>Design &amp; Engineering</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span>High Performance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
            <span>Conversion Architecture</span>
          </div>
        </div>

      </div>

      {/* Hero Bottom Transition Indicator */}
      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-muted font-mono text-xs border-t border-white/10">
        <span className="uppercase tracking-widest text-[11px]">
          [ SCROLL TO EXPLORE ]
        </span>
        <a
          href="#about"
          className="text-white hover:text-lime transition-colors flex items-center gap-1 uppercase tracking-wider"
        >
          <span>About Us</span>
          <span>↓</span>
        </a>
      </div>
    </section>
  );
};

export default AgencyHero;
