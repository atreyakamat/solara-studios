import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full py-16 px-4 overflow-hidden">
      {/* Simple gradient background instead of Globe */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#6211d4]/40 to-[#0f172a]/80 pointer-events-none z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-8 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
          Empowering Businesses with AI-Driven Automation
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
          Solara Studios delivers cutting-edge AI and automation solutions, transforming your business for the future. Our innovative strategies and bespoke implementations drive efficiency, reduce costs, and unlock new growth opportunities.
        </p>
        <button className="flex items-center justify-center rounded-full bg-[#6211d4] px-10 py-4 text-lg font-bold text-white hover:bg-[#4f0eb0] transition-colors mt-2">
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
