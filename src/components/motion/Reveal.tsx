import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';

/** Shared easing: fast start, long soft landing. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Child variant used inside <Stagger>. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}

/** Fades and slides its children in once, when they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 32, x = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Container that reveals children (motion elements using `fadeUpItem`) one after another. */
export const Stagger: React.FC<StaggerProps> = ({ children, className, delay = 0.05, stagger = 0.1 }) => (
  <motion.div
    className={className}
    variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.12 }}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.div className={className} variants={fadeUpItem}>
    {children}
  </motion.div>
);

export default Reveal;
