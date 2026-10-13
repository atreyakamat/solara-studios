import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Reveal } from '../motion/Reveal';

const STEPS = [
  {
    num: '01',
    title: 'Free discovery call',
    body: 'A short call to understand your business, your customers and what a good result looks like. No pitch, no obligation.',
    tag: 'Free',
  },
  {
    num: '02',
    title: 'Written scope and quote',
    body: 'You receive what is included, the price, the timeline and the payment schedule in writing. Work starts only once you agree.',
    tag: 'In writing',
  },
  {
    num: '03',
    title: 'Design and build',
    body: 'You see a working preview early and often, so there are no surprises at the end. Revisions happen here, not after launch.',
    tag: 'Live previews',
  },
  {
    num: '04',
    title: 'Launch and handover',
    body: 'The site goes live on your domain, you get the source code and a short walkthrough, and I stay reachable afterwards.',
    tag: 'You own it',
  },
];

export const AgencyProcess: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-b border-borderLine bg-cream-grid py-20 text-ink sm:py-32"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-deepOlive px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-lime">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              <span>How it works</span>
            </div>
            <h2
              id="process-heading"
              className="mb-5 font-heading text-4xl font-bold uppercase leading-none tracking-tight sm:text-6xl"
            >
              Four steps. You always know what is next.
            </h2>
            <p className="max-w-md font-sans text-base leading-relaxed text-muted sm:text-lg">
              Hiring a new studio feels risky. The process is built so you can check the work and agree the terms before you commit.
            </p>
          </Reveal>

          <div ref={ref} className="relative lg:col-span-7">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-ink/15" aria-hidden="true" />
            <motion.div
              aria-hidden="true"
              style={{ scaleY }}
              className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-lime-muted"
            />
            <ol className="space-y-10">
              {STEPS.map((step, i) => (
                <li key={step.num}>
                  <Reveal x={-24} y={0} delay={i * 0.05} className="relative flex gap-6">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-lime bg-ink font-mono text-xs font-bold text-lime">
                      {step.num}
                    </div>
                    <div className="pb-2">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-xl font-bold sm:text-2xl">{step.title}</h3>
                        <span className="rounded-full bg-deepOlive px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-lime">
                          {step.tag}
                        </span>
                      </div>
                      <p className="max-w-lg font-sans text-sm leading-relaxed text-ink/75 sm:text-base">{step.body}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyProcess;
