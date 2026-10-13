import React from 'react';
import { motion } from 'motion/react';
import { Stagger, fadeUpItem, Reveal } from '../motion/Reveal';
import { trackEvent } from '../../lib/analytics';

interface Audience {
  who: string;
  need: string;
  seenIn: string;
}

// Each audience is tied to a project that is already listed under Selected Work.
const AUDIENCES: Audience[] = [
  { who: 'Creative agencies', need: 'Client platforms and overflow development, built under your brand.', seenIn: 'Pixel N Purpose' },
  { who: 'Hospitality & travel', need: 'Direct booking sites that reduce reliance on third-party platforms.', seenIn: 'Amthane Valley' },
  { who: 'Sports & venues', need: 'Slot booking with payments and WhatsApp confirmations.', seenIn: 'Agnel Arena' },
  { who: 'Retail & merch', need: 'Storefronts with custom pricing logic and chat-based checkout.', seenIn: "Stix 'N' Vibes" },
  { who: 'Product teams', need: 'Web apps and PWAs, from first screen to real users.', seenIn: 'TRACK.NOW' },
  { who: 'Operations & IT', need: 'Monitoring and internal tools that keep services visible.', seenIn: 'PulseWatch' },
];

export const AgencyAudiences: React.FC = () => {
  const handleAsk = () => {
    trackEvent('primary_cta_click', { label: 'Audiences: Tell us what you need' });
  };

  return (
    <section
      id="who-we-build-for"
      aria-labelledby="audiences-heading"
      className="relative py-20 sm:py-32 bg-ink text-white border-b border-deepOlive overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-deepOlive text-lime font-mono text-xs uppercase tracking-widest font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span>Who we build for</span>
          </div>
          <h2
            id="audiences-heading"
            className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-5"
          >
            Different industries. <span className="text-lime">Same standard.</span>
          </h2>
          <p className="font-sans text-white/80 text-base sm:text-lg leading-relaxed">
            Booking engines, storefronts, agency platforms, monitoring tools. The work below is real, and each kind of client maps to a project you can open in Selected Work.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {AUDIENCES.map((a) => (
            <motion.article
              key={a.who}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative p-6 sm:p-7 rounded-2xl bg-darkGreen/80 border border-white/10 hover:border-lime/50 transition-colors overflow-hidden"
            >
              <motion.span
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] bg-lime"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
              />
              <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-lime transition-colors">{a.who}</h3>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-5">{a.need}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
                Seen in: <span className="text-lime">{a.seenIn}</span>
              </p>
            </motion.article>
          ))}

          <motion.a
            variants={fadeUpItem}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            href="#contact"
            onClick={handleAsk}
            className="group relative p-6 sm:p-7 rounded-2xl bg-lime text-ink flex flex-col justify-between min-h-[190px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Something else?</h3>
              <p className="font-sans text-sm sm:text-base text-ink/80 leading-relaxed">
                Tell us what you need. If it is outside what we do well, we will say so and point you in a better direction.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider">
              Start the conversation
              <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true">
                ↗
              </span>
            </span>
          </motion.a>
        </Stagger>
      </div>
    </section>
  );
};

export default AgencyAudiences;
