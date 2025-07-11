import React from 'react';
import { Globe } from './Globe';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[500px] w-full py-12 px-4 overflow-hidden">
      {/* Globe background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0">
        <Globe className="opacity-40 scale-150" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-6 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
          Empowering Businesses with AI-Driven Automation
        </h1>
        <p className="text-white/90 text-base md:text-lg font-normal leading-relaxed">
          Solara Studios delivers cutting-edge AI and automation solutions, transforming your business for the future. Our innovative strategies and bespoke implementations drive efficiency, reduce costs, and unlock new growth opportunities.
        </p>
        <button className="flex items-center justify-center rounded-full bg-[#6211d4] px-8 py-3 text-base font-bold text-white hover:bg-[#4f0eb0] transition-colors mt-2">
          Explore Our Solutions
        </button>
      </div>
      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
