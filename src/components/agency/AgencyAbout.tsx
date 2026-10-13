import React from 'react';
import { motion } from 'motion/react';
import ServicesMarquee from './ServicesMarquee';
import { Reveal, Stagger, fadeUpItem } from '../motion/Reveal';

export const AgencyAbout: React.FC = () => {
  const pillars = [
    {
      kicker: '01 // DIRECT ACCESS',
      title: 'Work Directly With Builders',
      body: 'No account managers or handoff delays. Direct technical execution with founder Atreya Kamat.',
    },
    {
      kicker: '02 // CLEAR SCOPES',
      title: 'Agreed Sprints & Timelines',
      body: 'Defined deliverables, fixed budgets, and rapid 7–10 day sprint deployments without creeping costs.',
    },
    {
      kicker: '03 // CRAFT & CODE',
      title: 'Engineered For Results',
      body: 'Sub-second load speeds, WCAG accessibility, and deliberate conversion structures that generate client inquiries.',
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 sm:py-32 bg-cream-grid text-ink border-b border-borderLine overflow-hidden"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span>About Us</span>
          </div>

          {/* Primary Statement */}
          <h2
            id="about-heading"
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink uppercase leading-[1.08] mb-8"
          >
            WE BUILD DIGITAL EXPERIENCES FOR BRANDS READY TO MOVE FORWARD.
          </h2>

          {/* Supporting Paragraph */}
          <p className="font-sans text-muted text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Solara Studios brings design, development, and practical digital strategy together to help businesses communicate clearly and create more useful online experiences.
          </p>
        </Reveal>
      </div>

      {/* Animated Horizontal Marquee Pill Field */}
      <div className="mt-4">
        <ServicesMarquee />
      </div>

      {/* Studio Value Proposition Callout Bar */}
      <div className="max-w-page mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-borderLine text-center sm:text-left">
          {pillars.map((p) => (
            <motion.div
              key={p.kicker}
              variants={fadeUpItem}
              whileHover={{ y: -4 }}
              className="p-4 bg-white/70 border border-borderLine rounded-xl"
            >
              <span className="font-mono text-xs text-deepOlive font-bold uppercase tracking-wider block mb-1">{p.kicker}</span>
              <div className="font-heading text-lg font-bold text-ink">{p.title}</div>
              <p className="text-xs text-muted mt-1 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default AgencyAbout;
