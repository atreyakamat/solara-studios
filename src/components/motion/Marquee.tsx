import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}

// A continuously scrolling band. The content is duplicated so the loop is seamless.
export const Marquee: React.FC<MarqueeProps> = ({ items, className = '', duration = 28, reverse = false }) => {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  const content = (
    <span className="flex shrink-0 items-center">
      {row.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap font-heading text-sm font-semibold uppercase tracking-wider">
            {item}
          </span>
          <span className="mx-5 text-lime" aria-hidden="true">✳</span>
        </span>
      ))}
    </span>
  );

  if (reduce) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <div className="flex">{content}</div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
};

export default Marquee;
