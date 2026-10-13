import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SunBurstProps {
  className?: string;
}

// Decorative rotating "sun" — on-brand for Solara. Two ray rings turn in opposite
// directions behind the headline, so the hero always has gentle motion.
export const SunBurst: React.FC<SunBurstProps> = ({ className = '' }) => {
  const reduce = useReducedMotion();
  const rays = Array.from({ length: 24 });
  const raysInner = Array.from({ length: 16 });

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <motion.svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A6FF19" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#A6FF19" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#A6FF19" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#sunCore)" />
        {rays.map((_, i) => {
          const angle = (i / rays.length) * 360;
          return (
            <rect
              key={i}
              x="198.5"
              y="26"
              width="3"
              height="46"
              rx="1.5"
              fill="#A6FF19"
              opacity={i % 2 === 0 ? 0.5 : 0.28}
              transform={`rotate(${angle} 200 200)`}
            />
          );
        })}
      </motion.svg>

      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        {raysInner.map((_, i) => {
          const angle = (i / raysInner.length) * 360 + 11;
          return (
            <rect
              key={i}
              x="199"
              y="96"
              width="2"
              height="26"
              rx="1"
              fill="#C4FF77"
              opacity="0.35"
              transform={`rotate(${angle} 200 200)`}
            />
          );
        })}
        <circle cx="200" cy="200" r="70" fill="none" stroke="#A6FF19" strokeOpacity="0.18" strokeWidth="1" />
      </motion.svg>
    </div>
  );
};

export default SunBurst;
