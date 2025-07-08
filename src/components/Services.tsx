import React from 'react';
import Icons from './Icons';

const Services: React.FC = () => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Services</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#453b54] bg-[#201c27] p-4 flex-col">
          <Icons name="Code" size="24px" className="text-white" />
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">AI Development</h2>
            <p className="text-[#a89db9] text-sm font-normal leading-normal">
              Custom AI solutions tailored to your specific business needs, from machine learning models to natural language processing.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#453b54] bg-[#201c27] p-4 flex-col">
          <Icons name="Robot" size="24px" className="text-white" />
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Automation Implementation</h2>
            <p className="text-[#a89db9] text-sm font-normal leading-normal">
              Seamless integration of automation technologies into your existing infrastructure, optimizing processes and reducing manual effort.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#453b54] bg-[#201c27] p-4 flex-col">
          <Icons name="Gear" size="24px" className="text-white" />
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-base font-bold leading-tight">Consulting &amp; Strategy</h2>
            <p className="text-[#a89db9] text-sm font-normal leading-normal">
              Expert guidance on leveraging AI and automation to achieve your business goals, with strategic roadmaps and implementation support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
