import React from 'react';

const Pricing: React.FC = () => {
  return (
    <div className="mb-10">
      <h2 className="text-white text-xl font-bold mb-2">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-6 flex flex-col">
          <h4 className="text-white font-bold mb-1">Basic</h4>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$99</span>
            <span className="text-white text-base font-bold leading-tight">/month</span>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2d2938] text-white text-sm font-bold leading-normal tracking-[0.015em] mb-2">
            <span className="truncate">Get Started</span>
          </button>
          <ul className="text-white text-sm space-y-1">
            <li>AI Consultation</li>
            <li>Basic AI Models</li>
            <li>Email Support</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-6 flex flex-col relative">
          <div className="absolute top-4 right-4 bg-[#7847ea] text-white text-xs font-medium px-3 py-1 rounded">Recommended</div>
          <h4 className="text-white font-bold mb-1">Pro</h4>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">$299</span>
            <span className="text-white text-base font-bold leading-tight">/month</span>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2d2938] text-white text-sm font-bold leading-normal tracking-[0.015em] mb-2">
            <span className="truncate">Get Started</span>
          </button>
          <ul className="text-white text-sm space-y-1">
            <li>Advanced AI Models</li>
            <li>Automation Setup</li>
            <li>Priority Support</li>
          </ul>
        </div>
        <div className="rounded-lg border border-[#433c53] bg-[#1f1c26] p-6 flex flex-col">
          <h4 className="text-white font-bold mb-1">Enterprise</h4>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Custom</span>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#2d2938] text-white text-sm font-bold leading-normal tracking-[0.015em] mb-2">
            <span className="truncate">Contact Us</span>
          </button>
          <ul className="text-white text-sm space-y-1">
            <li>Custom AI Solutions</li>
            <li>Full Automation Suite</li>
            <li>Dedicated Account Manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

