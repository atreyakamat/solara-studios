import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/** Thin lime bar at the top of the page that fills as the visitor scrolls. */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-lime z-[60] pointer-events-none"
    />
  );
};

export default ScrollProgress;
