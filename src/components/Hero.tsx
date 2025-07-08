import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="@container">
      <div className="p-4">
        <div
          className="flex min-h-[480px] flex-col items-center justify-center gap-8 rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("/images/city-skyline.jpg")',
            backgroundPosition: 'center bottom'
          }}
        >
          <div className="flex max-w-[800px] flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
              Empowering Businesses with AI-Driven Automation
            </h1>
            <p className="text-white/90 text-base font-normal leading-relaxed @[480px]:text-lg">
              Solara Studios delivers cutting-edge AI and automation solutions, transforming your business for the future. Our
              innovative strategies and bespoke implementations drive efficiency, reduce costs, and unlock new growth
              opportunities.
            </p>
          </div>
          <button className="flex items-center justify-center rounded-full bg-[#6211d4] px-8 py-3 text-base font-bold text-white hover:bg-[#4f0eb0] transition-colors">
            Explore Our Solutions
          </button>
          <div className="absolute bottom-8 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
