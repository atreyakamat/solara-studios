import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    yearly: 490,
    features: [
      "AI-powered insights",
      "Basic automation tools",
      "Email support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    monthly: 99,
    yearly: 990,
    features: [
      "Advanced AI analytics",
      "Enhanced automation workflows",
      "Priority support",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Recommended",
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    features: [
      "Custom AI solutions",
      "Full automation suite",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<'Monthly' | 'Yearly'>('Monthly');

  return (
    <div className="relative flex min-h-screen flex-col bg-[#141118] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Space Grotesk, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2f2839] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Solara Studios</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Case Studies</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">About Us</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6211d4] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Choose the right plan for your business</p>
            </div>
            <div className="flex px-4 py-3">
              <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#2f2839] p-1">
                <label
                  className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal ${billing === 'Monthly' ? 'bg-[#141118] shadow-[0_0_4px_rgba(0,0,0,0.1)] text-white' : 'text-[#a89db9]'}`}
                >
                  <span className="truncate">Monthly</span>
                  <input
                    type="radio"
                    name="billing"
                    className="invisible w-0"
                    value="Monthly"
                    checked={billing === 'Monthly'}
                    onChange={() => setBilling('Monthly')}
                  />
                </label>
                <label
                  className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 text-sm font-medium leading-normal ${billing === 'Yearly' ? 'bg-[#141118] shadow-[0_0_4px_rgba(0,0,0,0.1)] text-white' : 'text-[#a89db9]'}`}
                >
                  <span className="truncate">Yearly</span>
                  <input
                    type="radio"
                    name="billing"
                    className="invisible w-0"
                    value="Yearly"
                    checked={billing === 'Yearly'}
                    onChange={() => setBilling('Yearly')}
                  />
                </label>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#453b54] bg-[#201c27] p-6 ${plan.highlight ? 'ring-2 ring-[#6211d4]' : ''}`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h1 className="text-white text-base font-bold leading-tight">{plan.name}</h1>
                      {plan.badge && (
                        <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-full bg-[#6211d4] px-3 py-[3px] text-center">{plan.badge}</p>
                      )}
                    </div>
                    <p className="flex items-baseline gap-1 text-white">
                      {plan.monthly !== null ? (
                        <>
                          <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                            {billing === 'Monthly' ? `$${plan.monthly}` : `$${plan.yearly}`}
                          </span>
                          <span className="text-white text-base font-bold leading-tight">/{billing.toLowerCase()}</span>
                        </>
                      ) : (
                        <span className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Custom</span>
                      )}
                    </p>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2f2839] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">{plan.cta}</span>
                  </button>
                  <div className="flex flex-col gap-2">
                    {plan.features.map((feature) => (
                      <div key={feature} className="text-[13px] font-normal leading-normal flex gap-3 text-white">
                        <div className="text-white" data-icon="Check" data-size="20px" data-weight="regular">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">All plans come with a 14-day free trial. No credit card required.</p>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <p className="text-[#a89db9] text-base font-normal leading-normal">© 2023 Solara Studios. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Pricing;
