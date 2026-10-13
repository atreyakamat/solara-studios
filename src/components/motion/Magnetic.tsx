import React, { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/** Pulls its child gently toward the pointer. Ignored for touch input and reduced motion. */
export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.3, className = 'inline-block' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.2 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === 'touch' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
};

export default Magnetic;
