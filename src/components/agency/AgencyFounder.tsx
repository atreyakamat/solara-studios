import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Reveal, Stagger, fadeUpItem } from '../motion/Reveal';
import { trackEvent } from '../../lib/analytics';

const FACTS = [
  { label: 'Based in', value: 'Goa, India' },
  { label: 'Background', value: 'Software engineer' },
  { label: 'Public repos', value: '100+ on GitHub' },
  { label: 'Shipped here', value: '7 projects' },
];

const LINKS = [
  { label: 'Portfolio', href: 'https://atreyakamat.dev' },
  { label: 'GitHub', href: 'https://github.com/atreyakamat' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/atreya-kamat' },
  { label: 'Email', href: 'mailto:atkamat1204@gmail.com' },
];

export const AgencyFounder: React.FC = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="relative overflow-hidden border-b border-deepOlive bg-darkGreen py-20 sm:py-32"
    >
      <div className="relative mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4" x={-30} y={0}>
            <div className="relative mx-auto aspect-square w-64 sm:w-72 lg:w-full lg:max-w-sm">
              <motion.div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #A6FF19, transparent 40%, #A6FF19 70%, transparent)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute -inset-1 rounded-full bg-darkGreen" aria-hidden="true" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-lime/50 bg-deepOlive">
                {photoFailed ? (
                  <div className="flex h-full w-full items-center justify-center font-heading text-7xl font-bold text-lime">
                    AK
                  </div>
                ) : (
                  <img
                    src="https://atreyakamat.dev/atreyapfp.png"
                    alt="Portrait of Atreya Kamat, founder of Solara Studios"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={() => setPhotoFailed(true)}
                  />
                )}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-deepOlive px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-lime">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
                <span>Who you are hiring</span>
              </div>
              <h2
                id="founder-heading"
                className="mb-6 font-heading text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl"
              >
                Meet Atreya.
              </h2>
              <p className="mb-4 max-w-2xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
                I am a software engineer in Goa. I build full-stack products, dependable backend systems and AI workflows, and Solara Studios is where I do that for businesses that need a website that actually works.
              </p>
              <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
                You deal with me directly, from the first call to handover. Do not take my word for it: the work on this page links to real code you can read.
              </p>
            </Reveal>

            <Stagger className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4" stagger={0.08}>
              {FACTS.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={fadeUpItem}
                  className="rounded-xl border border-white/10 bg-ink/60 p-4"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">{fact.label}</div>
                  <div className="mt-1 font-heading text-sm font-bold text-white">{fact.value}</div>
                </motion.div>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="flex flex-wrap gap-3">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('primary_cta_click', { label: `Founder link: ${link.label}` })}
                  className="inline-flex items-center gap-2 rounded-full border border-lime/50 px-5 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-lime hover:text-ink"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyFounder;
