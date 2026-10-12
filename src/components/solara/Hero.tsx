import React from 'react';
import { trackEvent } from '../../lib/analytics';

interface HeroProps {
  onStartProject?: () => void;
  onExploreWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-borderLight overflow-hidden"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Meta Kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 font-mono text-[11px] sm:text-xs tracking-wider uppercase">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-borderLight text-ink font-semibold rounded-none">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion" aria-hidden="true" />
                Solara Studios
              </span>
              <span className="text-muted hidden sm:inline">•</span>
              <span className="text-muted">Strategy · Design · Development</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-ink leading-[1.08] mb-6"
            >
              Good businesses deserve <span className="italic font-normal">better</span> digital experiences.
            </h1>

            {/* Supporting Headline */}
            <p className="text-muted text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              Websites, landing pages, and digital systems designed to turn your next opportunity into meaningful action.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#contact"
                onClick={() => {
                  trackEvent('primary_cta_click', { label: 'Hero Primary CTA' });
                  if (onStartProject) onStartProject();
                }}
                className="btn-solara-primary text-center py-3.5 px-6 text-sm"
              >
                <span>Start a project</span>
                <span className="text-aqua" aria-hidden="true">→</span>
              </a>

              <a
                href="#work"
                onClick={() => {
                  trackEvent('portfolio_project_click', { label: 'Hero Secondary CTA' });
                  if (onExploreWork) onExploreWork();
                }}
                className="btn-solara-secondary text-center py-3.5 px-6 text-sm"
              >
                <span>Explore our work</span>
                <span className="text-muted" aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Technical Credibility Badges */}
            <div className="pt-6 border-t border-borderLight/80 grid grid-cols-3 gap-4">
              <div>
                <div className="font-mono text-xs sm:text-sm font-bold text-ink">90+</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase text-muted tracking-wider mt-0.5">
                  Core Web Vitals
                </div>
              </div>
              <div>
                <div className="font-mono text-xs sm:text-sm font-bold text-ink">Direct</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase text-muted tracking-wider mt-0.5">
                  Founder Access
                </div>
              </div>
              <div>
                <div className="font-mono text-xs sm:text-sm font-bold text-ink">Agreed</div>
                <div className="font-mono text-[10px] sm:text-[11px] uppercase text-muted tracking-wider mt-0.5">
                  Scope &amp; Handover
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Interface Craft Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-ink/20 bg-white p-4 sm:p-5 shadow-elevated">
              
              {/* Window Frame Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-borderLight font-mono text-[10px] tracking-wider text-muted">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-vermilion/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-aqua" />
                </div>
                <span className="bg-porcelain px-2.5 py-0.5 border border-borderLight text-ink font-semibold">
                  production.solara.system
                </span>
                <span className="text-muted hidden sm:inline">200 OK</span>
              </div>

              {/* Composition: Live studio preview */}
              <div className="space-y-4">
                
                {/* Visual Header Card */}
                <div className="p-4 bg-porcelain border border-borderLight">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-vermilion tracking-widest uppercase">
                      STUDIO ENGINE // 01
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-white text-[9px] font-mono font-semibold border border-borderLight text-ink">
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
                      SYSTEM READY
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-ink leading-tight mb-2">
                    Precision engineering meets editorial design.
                  </h2>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    Structured information architecture, sub-second load times, and conversion flows built for real commercial outcomes.
                  </p>
                </div>

                {/* Sub-components Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white border border-borderLight">
                    <div className="font-mono text-[9px] text-muted uppercase tracking-wider mb-1">
                      Architecture
                    </div>
                    <div className="font-mono text-xs font-bold text-ink">
                      TypeScript + Vite
                    </div>
                    <div className="mt-2 text-[10px] text-muted flex items-center gap-1">
                      <span className="text-aqua font-bold">✓</span> Semantic HTML5
                    </div>
                  </div>

                  <div className="p-3 bg-white border border-borderLight">
                    <div className="font-mono text-[9px] text-muted uppercase tracking-wider mb-1">
                      Accessibility
                    </div>
                    <div className="font-mono text-xs font-bold text-ink">
                      WCAG 2.2 AA Target
                    </div>
                    <div className="mt-2 text-[10px] text-muted flex items-center gap-1">
                      <span className="text-aqua font-bold">✓</span> Full Keyboard Nav
                    </div>
                  </div>
                </div>

                {/* Live Diagnostic Ribbon */}
                <div className="p-3 bg-ink text-porcelain font-mono text-[10px] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-aqua">●</span>
                    <span className="tracking-wider uppercase">Sprint Deployment</span>
                  </div>
                  <span className="text-vermilion font-bold tracking-widest uppercase">
                    7–10 Day Delivery Target
                  </span>
                </div>
              </div>

              {/* Precision Grid Accent Lines */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-ink pointer-events-none" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-vermilion pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
