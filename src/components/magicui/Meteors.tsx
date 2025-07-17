import React, { useEffect, useRef } from 'react';

interface MeteorsProps {
  number?: number;
  color?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 30, color = '#8444e3' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meteors: HTMLDivElement[] = [];
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < number; i++) {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = 3 + Math.random() * 2.5; // slower
      const angle = -45; // degrees, for diagonal
      meteor.style.position = 'absolute';
      meteor.style.left = `${left}%`;
      meteor.style.top = '-10%';
      meteor.style.width = '2px';
      meteor.style.height = `${100 + Math.random() * 100}px`;
      meteor.style.background = `linear-gradient(90deg, ${color}, transparent)`;
      meteor.style.opacity = '0.7';
      meteor.style.borderRadius = '9999px';
      meteor.style.pointerEvents = 'none';
      meteor.style.filter = 'blur(0.5px)';
      meteor.style.transform = `rotate(${angle}deg)`;
      meteor.style.animation = `meteor-diagonal-fall ${duration}s linear ${delay}s infinite`;
      container.appendChild(meteor);
      meteors.push(meteor);
    }
    return () => {
      meteors.forEach(meteor => container.removeChild(meteor));
    };
  }, [number, color]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0 overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes meteor-diagonal-fall {
          0% {
            opacity: 0;
            transform: translate(0, 0) rotate(-45deg) scaleX(1);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(40vw, 110vh) rotate(-45deg) scaleX(1.2);
          }
        }
      `}</style>
    </div>
  );
}; 