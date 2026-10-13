import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { EASE } from './Reveal';

interface WordRotatorProps {
  words: string[];
  interval?: number;
  className?: string;
}

/** Cycles through a list of words with a blur-and-slide swap. Screen readers get the full list once. */
export const WordRotator: React.FC<WordRotatorProps> = ({ words, interval = 2400, className = '' }) => {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [reduce, words.length, interval]);

  return (
    <span className={`relative inline-block align-bottom ${className}`}>
      <span className="sr-only">{words.join(', ')}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: '60%', filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: '0%', filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: '-60%', filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default WordRotator;
