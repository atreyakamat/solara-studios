import React from 'react';
import { motion } from 'motion/react';
import { Reveal, Stagger, fadeUpItem } from '../motion/Reveal';

export const AgencyCapabilities: React.FC = () => {
  const capabilities = [
    {
      title: 'Responsive Implementation',
      desc: 'Flawlessly tested across mobile, tablet, laptop, and ultra-wide desktop viewports.',
    },
    {
      title: 'Accessible Interaction Patterns',
      desc: 'Keyboard navigable, semantic markup, and visible focus states aligned with WCAG 2.2 AA.',
    },
    {
      title: 'Maintainable Frontend Architecture',
      desc: 'Component-driven React and TypeScript structured for longevity and clean handover.',
    },
    {
      title: 'Performance-Conscious Development',
      desc: 'Lean bundles, optimized assets, and attention to Core Web Vitals.',
    },
    {
      title: 'Technical SEO Foundations',
      desc: 'Crawlable architectures, Open Graph tags, canonical links, and Schema.org metadata.',
    },
    {
      title: 'Agreed Third-Party Integrations',
      desc: 'Frictionless forms, webhooks, analytics, and CRM lead capture connected without bloat.',
    },
  ];

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-20 sm:py-32 bg-ink text-white border-b border-deepOlive relative overflow-hidden"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Copy & Capabilities Checklist */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>Digital Implementation</span>
            </div>

            <h2
              id="capabilities-heading"
              className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-6"
            >
              More than a good-looking website.
            </h2>

            <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mb-10">
              We care about the details behind the experience: performance, responsiveness, clear structure, and the technical decisions that make a website useful.
            </p>

            <Stagger className="space-y-4" stagger={0.08}>
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.title}
                  variants={fadeUpItem}
                  whileHover={{ x: 6 }}
                  className="p-4 rounded-xl bg-darkGreen/80 border border-white/10 hover:border-lime/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-deepOlive border border-lime text-lime flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      {cap.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-white/70 mt-0.5 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>

          {/* Right Column: Visual Composition Representing Digital Implementation */}
          <Reveal className="lg:col-span-6" x={40} y={0}>
            <div className="relative p-6 sm:p-8 rounded-2xl bg-darkGreen border-2 border-lime/30 shadow-lime-glow overflow-hidden">
              
              {/* Header Tab Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-muted mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-lime" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <span className="text-lime font-bold uppercase tracking-wider text-[11px]">
                  SOLARA.CORE.ENGINE
                </span>
                <span className="text-white/60">STACK OVERVIEW</span>
              </div>

              {/* Digital Architecture Schematic */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* Metric Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-ink border border-lime/20 text-center">
                    <div className="text-lime text-xl font-heading font-bold">Fast</div>
                    <div className="text-[10px] text-white/60 uppercase mt-0.5">Performance</div>
                  </div>
                  <div className="p-3 rounded-lg bg-ink border border-lime/20 text-center">
                    <div className="text-lime text-xl font-heading font-bold">Lean</div>
                    <div className="text-[10px] text-white/60 uppercase mt-0.5">Bundles</div>
                  </div>
                  <div className="p-3 rounded-lg bg-ink border border-lime/20 text-center">
                    <div className="text-lime text-xl font-heading font-bold">Stable</div>
                    <div className="text-[10px] text-white/60 uppercase mt-0.5">Layout</div>
                  </div>
                </div>

                {/* Layer Stack Representation */}
                <div className="p-4 rounded-lg bg-ink border border-white/10 space-y-2">
                  <div className="flex justify-between text-white/80 pb-2 border-b border-white/10">
                    <span className="text-lime font-bold">LAYER 01 //</span>
                    <span>Design Token System (Tailwind + CSS vars)</span>
                  </div>
                  <div className="flex justify-between text-white/80 pb-2 border-b border-white/10">
                    <span className="text-lime font-bold">LAYER 02 //</span>
                    <span>Semantic Component Hierarchy (React 19)</span>
                  </div>
                  <div className="flex justify-between text-white/80 pb-2 border-b border-white/10">
                    <span className="text-lime font-bold">LAYER 03 //</span>
                    <span>Accessibility &amp; Keyboard Interaction Engine</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span className="text-lime font-bold">LAYER 04 //</span>
                    <span>Verified Lead Ingestion &amp; Submission Hook</span>
                  </div>
                </div>

                {/* Live Diagnostic Ribbon */}
                <div className="p-3 rounded-lg bg-deepOlive border border-lime/40 text-lime flex items-center justify-between font-bold text-[11px] tracking-wider uppercase">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                    <span>PRODUCTION READY ARCHITECTURE</span>
                  </div>
                  <span className="text-white font-normal">BUILT TO HAND OVER</span>
                </div>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default AgencyCapabilities;
