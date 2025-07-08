import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ContentSection {
  title: string;
  content: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ethan Carter",
    role: "CEO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-1m1i0qREzKj6JBakfRf0o4hToTcPYwCk2I3v99AGsHP4YYEShhkWUFZUJ77JdNhW8TSxYMOWOsa1BUu4568fjTz1MKd8PBXXZm52v4zTW5tD7rPPGrnp4Hdy3z7MvSrCWM5ebR-6zVD9py4rgMGLkIGdWhbsOw-3dJJIEXmixzea0gq2LenhjV0MwlpJvlQXLaKE30rEhzn8IP9_Or9szdRuF8PB7FsdSziHwZp5aquc4lWszrKTBuY-3hdsMu_McmTC269N0Wz",
  },
  {
    name: "Olivia Bennett",
    role: "CTO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFhfmaeji5Apa-xxTu16RiStFhFxVA5-ZOP4WyN8ZOeCxAXXqGmdUxtqigsgqr9OsGWqdiZ7WNA6h3MLYOrkiTrISv1DRfqmObPACTjKJvEgPdc57ztSRfmjukLXYMyIyFCaVfTyfAVxgstS3UWMfDg_O3gMbvDd7c64seRc3ETI4Irmd8lZxyOD3ARNwXyIkUApMklEiwpsxMNZH8n4qLwJUMTTR4Kk4zsVA5KXMu_QjZja5q7yU0RN17mnX_qNGi9VcqTcVNQ99D",
  },
  {
    name: "Noah Thompson",
    role: "Head of AI",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk2fRou_-_-LiLaY135Fnxf7Ijv1Eq9iCbS1idKSPwxrzJne_xjEZMH6Ws1-DpyYsm1Q52cPV2bnZVdzba0uIHQ3OXvLpDHThjjO7mJpelpvVpAkEMBB9585gqKo1VlzBdGhSTszW8h-wwdVSvWJQUVaxlaLZQ3-F8oIxOlSG61fvLIygkwv3YXz4LLgQThl3o9wF3cgHYvu_zBCdrpEdiX8uBdZV6VWiIOD0n9FIKpTIZAEdfZxjqcBoKBSACDRwAeAKK_6Ir9Cm1",
  },
];

const sections: ContentSection[] = [
  {
    title: "Our Vision",
    content: "Our vision is to be the leading digital agency that empowers businesses to thrive in the digital age. We believe in the transformative power of AI and automation to revolutionize business processes and create unparalleled value for our clients.",
  },
  {
    title: "Our Team",
    content: "Our team comprises seasoned experts in AI, automation, and digital strategy. We are passionate about delivering exceptional results and committed to our clients' success. Meet the talented individuals who drive innovation at Solara Studios.",
  },
  {
    title: "Our Approach",
    content: "We adopt an AI-powered, automation-first philosophy in all our solutions. This approach ensures that our clients benefit from the latest advancements in technology, leading to streamlined operations, enhanced productivity, and a competitive edge in the market. We focus on understanding your unique business needs and crafting tailored solutions that deliver measurable impact.",
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, image }) => (
  <div className="flex flex-col gap-3 text-center pb-3 group">
    <div className="px-4">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full transform transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url("${image}")` }}
      />
    </div>
    <div>
      <p className="text-white text-base font-medium leading-normal">{name}</p>
      <p className="text-[#a89db9] text-sm font-normal leading-normal">{role}</p>
    </div>
  </div>
);

const ContentBlock: React.FC<ContentSection> = ({ title, content }) => (
  <>
    <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">{title}</h2>
    <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">{content}</p>
  </>
);

const About: React.FC = () => {
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
            <nav className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">Home</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">Services</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">About</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-[#6211d4] transition-colors" href="#">Contact</a>
            </nav>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6211d4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4f0eb0] transition-colors">
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">About Solara Studios</p>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Solara Studios, we are a digital agency specializing in AI-powered and automation-first solutions for businesses. Our mission is to build future-ready businesses
              by leveraging cutting-edge technologies to drive efficiency, innovation, and growth.
            </p>
            
            {sections.map((section) => (
              <ContentBlock key={section.title} {...section} />
            ))}

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} {...member} />
              ))}
            </div>

            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#6211d4] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4f0eb0] transition-colors">
                <span className="truncate">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
