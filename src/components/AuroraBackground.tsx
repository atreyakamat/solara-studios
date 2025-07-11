"use client";

import React from "react";
import { motion } from "motion/react";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden bg-[#131118] ${className}`}>
      {/* Aurora effect lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Purple beam */}
        <motion.div
          className="absolute left-1/4 top-0 h-full w-16 bg-gradient-to-b from-[#a89db9]/70 via-[#6211d4]/60 to-transparent opacity-70 blur-2xl rotate-[-24deg]"
          animate={{
            x: [0, 60, 0],
            y: [0, 120, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Blue beam */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-12 bg-gradient-to-b from-[#4f0eb0]/80 via-[#802cff]/60 to-transparent opacity-60 blur-2xl rotate-[18deg]"
          animate={{
            x: [0, -80, 0],
            y: [0, 160, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Greenish beam */}
        <motion.div
          className="absolute left-[60%] top-0 h-full w-10 bg-gradient-to-b from-[#a89db9]/60 via-[#453b54]/50 to-transparent opacity-50 blur-2xl rotate-[-16deg]"
          animate={{
            x: [0, 40, 0],
            y: [0, 100, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Pink beam */}
        <motion.div
          className="absolute left-[70%] top-0 h-full w-14 bg-gradient-to-b from-[#802cff]/70 via-[#a89db9]/50 to-transparent opacity-60 blur-2xl rotate-[22deg]"
          animate={{
            x: [0, -50, 0],
            y: [0, 140, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* White beam */}
        <motion.div
          className="absolute left-[80%] top-0 h-full w-8 bg-gradient-to-b from-white/40 via-[#a89db9]/30 to-transparent opacity-40 blur-2xl rotate-[-20deg]"
          animate={{
            x: [0, 30, 0],
            y: [0, 180, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 