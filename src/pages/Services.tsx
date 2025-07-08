import React, { useState } from "react";

const services = [
  {
    title: "Web Design & PWAs",
    description:
      "Crafting immersive web experiences with cutting-edge design and Progressive Web App (PWA) technology. We build responsive, high-performance websites that engage users and drive results. Our PWAs offer app-like functionality, enhancing user experience and accessibility.",
  },
  {
    title: "Automation-as-a-Service",
    description:
      "Streamlining business processes through automation. We identify repetitive tasks and implement intelligent automation solutions, freeing up your team to focus on strategic initiatives. Our services include workflow automation, data processing, and system integration.",
  },
  {
    title: "AI Chatbots & Predictive Dashboards",
    description:
      "Leveraging AI to create intelligent chatbots and predictive dashboards. Our chatbots enhance customer engagement and provide instant support, while our dashboards offer real-time insights and predictive analytics to inform decision-making.",
  },
  {
    title: "App Development",
    description:
      "Developing custom mobile and web applications tailored to your business needs. From concept to deployment, we deliver scalable, user-friendly applications that drive growth and improve efficiency. Our expertise spans various platforms and technologies.",
  },
  {
    title: "White-labeled SaaS Products",
    description:
      "Creating white-labeled Software-as-a-Service (SaaS) products that you can brand and sell as your own. We handle the technical development, allowing you to focus on marketing and distribution. Our solutions are customizable and designed for seamless integration.",
  },
];

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
              <a className="text-white text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">Portfolio</a>
              <a className="text-white text-sm font-medium leading-normal" href="#">About</a>
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
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Our Services</p>
            </div>
            {services.map((service, idx) => (
              <div key={service.title} className="mb-2">
                <button
                  type="button"
                  className="w-full text-left focus:outline-none"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`service-desc-${idx}`}
                >
                  <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 flex items-center">
                    <span className="flex-1">{service.title}</span>
                    <span className="ml-2 text-[#a89db9]">{openIndex === idx ? "-" : "+"}</span>
                  </h2>
                </button>
                {openIndex === idx && (
                  <p
                    id={`service-desc-${idx}`}
                    className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4 transition-all duration-300"
                  >
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">Home</a>
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">Services</a>
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">Portfolio</a>
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a className="text-[#a89db9] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#a89db9]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z" />
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#a89db9]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#a89db9]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#a89db9] text-base font-normal leading-normal">© 2023 Solara Studios. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Services;
