import React from 'react';
import Icons from './Icons';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 px-4 py-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-white">
          Why Choose Solara Studios?
        </h2>
        <p className="text-lg text-white/80 max-w-[720px]">
          We combine deep industry expertise with advanced AI and automation technologies to deliver transformative results for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-lg border border-[#453b54] bg-[#201c27] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6211d4]">
            <Icons name="Robot" size="24px" className="text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">AI-Powered Solutions</h3>
            <p className="text-base text-[#a89db9] leading-relaxed">
              Leverage the power of artificial intelligence to automate complex tasks, gain actionable insights, and enhance decision-making.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-[#453b54] bg-[#201c27] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6211d4]">
            <Icons name="Gear" size="24px" className="text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">Custom Automation Strategies</h3>
            <p className="text-base text-[#a89db9] leading-relaxed">
              Our tailored automation strategies streamline workflows, eliminate bottlenecks, and maximize operational efficiency.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg border border-[#453b54] bg-[#201c27] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6211d4]">
            <Icons name="ChartLine" size="24px" className="text-white" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-white">Data-Driven Optimization</h3>
            <p className="text-base text-[#a89db9] leading-relaxed">
              We use data analytics to continuously monitor and optimize your AI and automation systems, ensuring peak performance and ROI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 