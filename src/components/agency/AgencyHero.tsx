import React, { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import { trackEvent } from '../../lib/analytics';
import Magnetic from '../motion/Magnetic';
import SunBurst from '../motion/SunBurst';
import Marquee from '../motion/Marquee';
import WordRotator from '../motion/WordRotator';
import { EASE } from '../motion/Reveal';

interface AgencyHeroProps {
  onStartProject?: () => void;
}

const HEADLINE: { text: string; className: string; dot?: boolean }[] = [
  { text: 'IDEAS', className: 'text-lime' },
  { text: 'BUILT', className: 'text-white' },
  { text: 'TO', className: 'text-white' },
  { text: 'MOVE', className: 'text-white', dot: true },
];

const AUDIENCES = ['ambitious brands', 'agencies', 'hospitality teams', 'local businesses', 'startups'];

const MARQUEE = [
  'Websites', 'Landing Pages', 'Technical SEO', 'Booking Systems',
  'E-commerce', 'Dashboards', 'Brand & Design', 'Digital Marketing',
];

export const AgencyHero: React.FC<AgencyHeroProps> = ({ onStartProject }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: blobs and content drift at different speeds while the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const blobTopY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const blobSideY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Soft light that follows the pointer.
  const pointerX = useMotionValue(-600);
  const pointerY = useMotionValue(-600);
  const glowX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const glowY = useSpring(pointerY, { stiffness: 90, damping: 22 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch') return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  const handleCta = () => {
    trackEvent('primary_cta_click', { label: 'Hero Start Project CTA' });
    if (onStartProject) {
      onStartProject();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      className="relative min-h-[92vh] sm:min-h-screen bg-ink flex flex-col justify-between pt-28 pb-16 sm:pb-24 overflow-hidden border-b border-deepOlive/60"
    >
      {/* Background Subtle Dark Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-75 pointer-events-none" />

      {/* Pointer-following glow */}
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        className="absolute left-0 top-0 -ml-56 -mt-56 w-[28rem] h-[28rem] rounded-full bg-lime/15 blur-3xl pointer-events-none"
      />

      {/* Drifting, parallax glow meshes */}
      <motion.div style={{ y: blobTopY }} className="absolute -top-32 -left-32 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-lime/25 via-deepOlive/40 to-transparent blur-3xl"
        />
      </motion.div>
      <motion.div style={{ y: blobSideY }} className="absolute top-1/4 -right-32 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -36, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          className="w-80 h-80 sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-bl from-lime/20 via-darkGreen/60 to-transparent blur-3xl"
        />
      </motion.div>
      <div
        className="absolute -bottom-24 left-1/3 w-96 h-64 rounded-full bg-gradient-to-t from-lime/15 via-deepOlive/30 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Organic vector lines: the solid one draws itself in */}
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
        <motion.path
          d="M0 700 C 400 550, 800 800, 1200 600 C 1400 500, 1500 700, 1600 750"
          stroke="#C4FF77"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, delay: 0.4, ease: EASE }}
        />
      </svg>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center items-center text-center"
      >
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mb-8 sm:mb-10 inline-flex items-center gap-3 rounded-full border border-lime/30 bg-deepOlive/60 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-lime"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          <span>Taking new projects · Goa, India · From $350</span>
        </motion.div>

        {/* Rotating sun behind the headline */}
        <SunBurst className="absolute left-1/2 top-[30%] -z-0 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 opacity-70 sm:h-[34rem] sm:w-[34rem]" />

        {/* Primary Headline: words rise into place one by one */}
        <h1
          id="hero-title"
          className="relative z-10 font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.92] uppercase max-w-5xl mb-6 sm:mb-8 flex flex-wrap justify-center gap-x-[0.25em]"
        >
          {HEADLINE.map((word, i) => (
            <span key={word.text} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
              <motion.span
                className={`inline-block ${word.className}`}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, delay: 0.5 + i * 0.12, ease: EASE }}
              >
                {word.text}
                {word.dot && <span className="text-lime">.</span>}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Audience rotator */}
        <motion.p
          className="font-heading text-xl sm:text-3xl text-white mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
        >
          We design and build websites for <WordRotator words={AUDIENCES} className="text-lime font-bold" />
        </motion.p>

        {/* Supporting Copy */}
        <motion.p
          className="text-white/80 font-sans text-base sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-normal"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25, ease: EASE }}
        >
          From strategy to execution, we build digital experiences that help ambitious brands stand out, connect, and grow.
        </motion.p>

        {/* Hero CTA Pill: Neon-Lime Button with a magnetic pull */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        >
          <Magnetic strength={0.35}>
            <a
              href="#contact"
              onClick={handleCta}
              className="group relative overflow-hidden inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-lime text-ink font-heading font-bold text-sm sm:text-base tracking-wider uppercase transition-colors duration-300 hover:bg-lime-light hover:shadow-lime-pill active:scale-95"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: '-120%' }}
                animate={{ x: '120%' }}
                transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
              />
              <span className="relative z-10">START YOUR PROJECT</span>
              <span
                className="relative z-10 w-7 h-7 rounded-full bg-ink text-lime flex items-center justify-center font-bold text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          </Magnetic>
        </motion.div>

        {/* Subtle Proof Details */}
        <motion.div
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs uppercase tracking-wider text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
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
        </motion.div>
      </motion.div>

      {/* Hero Bottom Transition Indicator */}
      <div className="relative max-w-page mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-muted font-mono text-xs border-t border-white/10">
        <span className="uppercase tracking-widest text-[11px]">[ SCROLL TO EXPLORE ]</span>
        <a
          href="#about"
          className="text-white hover:text-lime transition-colors flex items-center gap-1 uppercase tracking-wider"
        >
          <span>About Us</span>
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </a>
      </div>

      {/* Continuously moving keyword band */}
      <div className="relative mt-8 border-y border-lime/20 bg-deepOlive/40 py-3 text-lime">
        <Marquee items={MARQUEE} duration={30} />
      </div>
    </section>
  );
};

export default AgencyHero;
