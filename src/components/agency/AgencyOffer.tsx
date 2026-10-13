import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { Reveal, Stagger, fadeUpItem } from '../motion/Reveal';
import { trackEvent } from '../../lib/analytics';

interface AgencyOfferProps {
  onSelectPlan: (service: string) => void;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  timeline: string;
  includes: string[];
  cta: string;
  service: string;
  featured?: boolean;
}

// DRAFT OFFER: scope, timelines and inclusions below are proposals for the founder to confirm.
const PLANS: Plan[] = [
  {
    id: 'launch',
    name: 'Launch',
    price: '$350',
    priceNote: 'one-time',
    tagline: 'A focused landing page that explains your offer and gets people to contact you.',
    timeline: 'About 1 week',
    includes: [
      'Custom-designed, mobile-first landing page',
      'Clear offer structure and copy guidance',
      'Contact form delivering to your inbox',
      'On-page SEO basics: titles, meta, social previews',
      'Deployed on your domain',
      '1 round of revisions',
    ],
    cta: 'Start with Launch',
    service: 'Landing page',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$799',
    priceNote: 'one-time',
    tagline: 'A custom digital marketing package: your site, your search presence and a plan to be found.',
    timeline: '2–3 weeks',
    includes: [
      'Custom website of up to 5 pages',
      'Technical SEO audit and fixes',
      'Analytics and enquiry tracking set up',
      'Google Business Profile setup guidance',
      'Brand kit: colours, type and social templates',
      'A 30-day content and posting plan',
      '2 rounds of revisions and 14 days of support',
    ],
    cta: 'Choose Growth',
    service: 'Digital marketing package',
    featured: true,
  },
  {
    id: 'custom',
    name: 'Custom Platform',
    price: 'Scoped',
    priceNote: 'quoted after discovery',
    tagline: 'Booking systems, dashboards, storefronts or internal tools, with positioning built around your business.',
    timeline: 'Agreed per project',
    includes: [
      'Discovery call to define positioning and requirements',
      'Written scope, milestones and fixed quote',
      'Full-stack build (React, Node, databases, payments)',
      'Built the way Agnel Arena, Amthane Valley and VistaraBI were',
      'Handover documentation and source code',
    ],
    cta: 'Book a discovery call',
    service: 'Custom platform',
  },
];

const PROTECTIONS = [
  {
    title: 'Scope and price in writing',
    body: 'Before any payment, you get a written summary of what you are getting, what it costs and when it is due.',
  },
  {
    title: 'Pay in two parts',
    body: 'A deposit to start and the balance on delivery. Custom platforms are paid by milestone.',
  },
  {
    title: 'You own the work',
    body: 'Code, design files and content are yours at handover. Nothing is held hostage.',
  },
  {
    title: 'See it before it goes live',
    body: 'You review a working preview and request revisions before launch.',
  },
];

const PlanCard: React.FC<{ plan: Plan; onSelect: () => void }> = ({ plan, onSelect }) => {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const glow = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, rgba(166,255,25,0.14), transparent 70%)`;

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      variants={fadeUpItem}
      whileHover={{ y: -8 }}
      onPointerMove={handleMove}
      className={`group relative flex flex-col overflow-hidden rounded-2xl p-7 sm:p-8 border ${
        plan.featured
          ? 'bg-darkGreen border-lime shadow-lime-glow'
          : 'bg-darkGreen/70 border-white/10 hover:border-lime/40'
      }`}
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <div className="relative flex items-center justify-between mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-lime font-bold">{plan.name}</span>
        {plan.featured && (
          <span className="rounded-full bg-lime px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
            Best value
          </span>
        )}
      </div>

      <div className="relative mb-4 flex items-baseline gap-2">
        <span className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-white">{plan.price}</span>
        <span className="font-mono text-xs text-white/50">{plan.priceNote}</span>
      </div>

      <p className="relative font-sans text-sm text-white/75 leading-relaxed mb-5 min-h-[3.75rem]">{plan.tagline}</p>

      <div className="relative mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
        <span>{plan.timeline}</span>
      </div>

      <ul className="relative mb-8 space-y-3 flex-1">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 font-sans text-sm text-white/85 leading-snug">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime/15 text-[10px] font-bold text-lime" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onSelect}
        className={`relative w-full rounded-full py-4 font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
          plan.featured
            ? 'bg-lime text-ink hover:bg-lime-light'
            : 'border border-lime/60 text-white hover:bg-lime hover:text-ink'
        }`}
      >
        {plan.cta} <span aria-hidden="true">↗</span>
      </button>
    </motion.article>
  );
};

export const AgencyOffer: React.FC<AgencyOfferProps> = ({ onSelectPlan }) => {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden border-b border-deepOlive bg-ink py-20 sm:py-32"
    >
      <div className="absolute inset-0 bg-dark-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-deepOlive px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-lime">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
            <span>Offer &amp; pricing</span>
          </div>
          <h2
            id="pricing-heading"
            className="mb-5 font-heading text-4xl font-bold uppercase leading-none tracking-tight text-white sm:text-6xl"
          >
            Clear scope. Clear price. No surprises.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-white/75 sm:text-lg">
            Start small with a landing page, grow into a full digital marketing package, or scope a custom platform. Every price is agreed in writing before you pay.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch" stagger={0.14}>
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSelect={() => {
                trackEvent('service_cta_click', { label: `Plan: ${plan.name}` });
                onSelectPlan(plan.service);
              }}
            />
          ))}
        </Stagger>

        <Reveal className="mt-16" delay={0.1}>
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-lime">
            How your money is protected
          </h3>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROTECTIONS.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUpItem}
                className="rounded-xl border border-white/10 bg-darkGreen/60 p-5"
              >
                <h4 className="mb-2 font-heading text-base font-bold text-white">{item.title}</h4>
                <p className="font-sans text-sm leading-relaxed text-white/70">{item.body}</p>
              </motion.div>
            ))}
          </Stagger>
          <p className="mt-6 font-sans text-xs leading-relaxed text-white/50">
            Not sure which fits? Book a free discovery call. If we are not the right fit, I will say so.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AgencyOffer;
