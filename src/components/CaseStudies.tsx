import React, { useState } from 'react';

interface CaseStudy {
  image: string;
  title: string;
  description: string;
  results: {
    metric: string;
    value: string;
  }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8OfUMFJK0upkryHHQQ1z8pcTIP8ftAyBZZnA6jpeEDP3qtqELOhH0WNhvMI0b5Epl-C61-IijIeTc-AmTlhPmyPm596u3IteFDUmYZprpM3_t_3vyTglWoUVN8_wq2apxbaQBYfD6ZOIHPcw-IBhsxseUwWFqka1uqf2WlZYMohfEllQoxp7ufOjfbV1QVdP0w7lHAFOdcw8h6CaINuYh9XuiNT7Q8MQ4RRDf9AlccX8YXCJ6Vw5tttCHbPeVwaS2U6L29E4Ju5i",
    title: "AI-Powered Customer Service Revolution",
    description: "Implemented an advanced AI chatbot system for TechCorp, transforming their customer service operations with 24/7 support and intelligent query resolution.",
    results: [
      { metric: "Customer Satisfaction", value: "+45%" },
      { metric: "Response Time", value: "-85%" },
      { metric: "Support Costs", value: "-40%" },
    ],
    tags: ["AI Chatbot", "Machine Learning", "Customer Service"],
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT8n_oSzEdboyu_x85_BSZwr-3Adpb9vDWDrfs_Uz8TIkY9JQsyBJDkg9f7CAYS5dBGm1l1AtZby95z9BTEXw_pbH3r1EYG8qYBllCILAUFjzgwCWfgc1i3OAhE96pfrDNb10tmelwo5pTB0_dTZMP6aOMRmIEexoFZRXr82yQfyvCmz-OI18yM8-kxtuH6_ZMMaxaiJUQetuNCv_xFkb2FMbQ-8XOyXdalj5-9HiGc5oucqtKDrs-kBsdyl7frrVweVW2JTuDkVHV",
    title: "Manufacturing Excellence Through Automation",
    description: "Revolutionized PrecisionTech's manufacturing processes with AI-driven quality control and predictive maintenance systems.",
    results: [
      { metric: "Production Efficiency", value: "+60%" },
      { metric: "Defect Rate", value: "-75%" },
      { metric: "Maintenance Costs", value: "-35%" },
    ],
    tags: ["Process Automation", "Quality Control", "Predictive Analytics"],
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZ_mFR92_PnxjdNlTw_bO7QsHWv1QEAwcrTxQwGkE7AAGQwcxcHFuUQdInsqtBdLsarMiOp5N4Qq5kB5SYmto3M6uLIaPFLuuX_ePJvmJJg_VdIIuo_xoG9IBqqVd5yPb_1e4h5oUyAAzPc1TADPPHtwSon2EOf_Po-AfTkBr1gYu7_BWU_EvHDxWKtiAWhVFhCfUL3j-47vz42x8MWDqP-F3rcDmCWsPs1u1JoyOqUuQYHC2GZHvztGSU4YOMQjkFJ1ikvbg7Wt3",
    title: "E-Commerce Personalization Engine",
    description: "Developed a sophisticated AI-powered recommendation system for RetailCo, delivering personalized shopping experiences at scale.",
    results: [
      { metric: "Conversion Rate", value: "+85%" },
      { metric: "Average Order Value", value: "+40%" },
      { metric: "Customer Retention", value: "+65%" },
    ],
    tags: ["AI Recommendations", "E-commerce", "Personalization"],
  },
];

const CaseStudyCard: React.FC<CaseStudy & { isActive: boolean; onClick: () => void }> = ({
  image,
  title,
  description,
  results,
  tags,
  isActive,
  onClick,
}) => (
  <div
    className={`group relative p-0.5 rounded-2xl bg-gradient-to-br cursor-pointer transition-all duration-500 ${
      isActive ? 'from-[#6211d4] to-[#4f0eb0]' : 'from-[#2f2839] to-[#1d1825] hover:from-[#6211d4] hover:to-[#4f0eb0]'
    }`}
    onClick={onClick}
  >
    <div className={`relative h-full bg-[#141118] rounded-2xl transition-all duration-500 ${isActive ? 'bg-[#1d1825]' : 'group-hover:bg-[#1d1825]'}`}>
      <div
        className="w-full h-48 bg-center bg-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-[#6211d4]' : 'text-white group-hover:text-[#6211d4]'} transition-colors duration-300`}>
          {title}
        </h3>
        <p className="text-[#a89db9] text-base mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-[#2f2839] text-[#a89db9]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className={`grid grid-cols-3 gap-4 transition-all duration-300 ${isActive ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          {results.map((result) => (
            <div key={result.metric} className="text-center">
              <div className="text-2xl font-bold text-[#6211d4] mb-1">{result.value}</div>
              <div className="text-sm text-[#a89db9]">{result.metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
        <p className="text-[#a89db9] text-lg max-w-2xl mx-auto">
          Discover how we've helped businesses transform their operations with AI and automation solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((study, index) => (
          <div
            key={study.title}
            className="transform hover:-translate-y-2 transition-transform duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <CaseStudyCard
              {...study}
              isActive={activeCase === study.title}
              onClick={() => setActiveCase(activeCase === study.title ? null : study.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
