import React, { useState } from 'react';
import { StarIcon } from './Icons';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb3n9AFelbmzXpCQzQBqPexoU1LHwFtrL81nJ91fYCc2-fBANx1WHKn8-CI9L6-6I7OqBT1QJTcRsIAkDO_52-Qk3P15XAsX37hsGqU-akGUzOKrtEoy3hxI5CHxnUfG33BIg7Fy26jRlTYWsiAU-BVfLA1efWI-KRDtTdcIDXRcNTSJjrMgtYQ_qh9KDyWKKXKDGnjY4cphPHkMRJnaJYLm5s37KHQ9hGEesq31S_0ZDl5x02LDA-05ShC_qn--cBh4LwuSkV9--b",
    content: "Solara Studios transformed our customer service with their AI chatbot. The implementation was smooth, and the results exceeded our expectations. Our response times dropped by 85%, and customer satisfaction skyrocketed.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "PrecisionTech",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT8n_oSzEdboyu_x85_BSZwr-3Adpb9vDWDrfs_Uz8TIkY9JQsyBJDkg9f7CAYS5dBGm1l1AtZby95z9BTEXw_pbH3r1EYG8qYBllCILAUFjzgwCWfgc1i3OAhE96pfrDNb10tmelwo5pTB0_dTZMP6aOMRmIEexoFZRXr82yQfyvCmz-OI18yM8-kxtuH6_ZMMaxaiJUQetuNCv_xFkb2FMbQ-8XOyXdalj5-9HiGc5oucqtKDrs-kBsdyl7frrVweVW2JTuDkVHV",
    content: "The automation solutions provided by Solara Studios revolutionized our manufacturing processes. Their predictive maintenance system has saved us millions in potential downtime and repairs. Truly game-changing.",
    rating: 5,
  },
  {
    name: "Emily Thompson",
    role: "Digital Marketing Head",
    company: "RetailCo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZ_mFR92_PnxjdNlTw_bO7QsHWv1QEAwcrTxQwGkE7AAGQwcxcHFuUQdInsqtBdLsarMiOp5N4Qq5kB5SYmto3M6uLIaPFLuuX_ePJvmJJg_VdIIuo_xoG9IBqqVd5yPb_1e4h5oUyAAzPc1TADPPHtwSon2EOf_Po-AfTkBr1gYu7_BWU_EvHDxWKtiAWhVFhCfUL3j-47vz42x8MWDqP-F3rcDmCWsPs1u1JoyOqUuQYHC2GZHvztGSU4YOMQjkFJ1ikvbg7Wt3",
    content: "The personalization engine developed by Solara Studios has been a game-changer for our e-commerce platform. Our conversion rates have nearly doubled, and customer engagement is at an all-time high.",
    rating: 5,
  },
];

const TestimonialCard: React.FC<Testimonial & { isActive: boolean; onClick: () => void }> = ({
  name,
  role,
  company,
  image,
  content,
  rating,
  isActive,
  onClick,
}) => (
  <div
    className={`group relative p-0.5 rounded-2xl bg-gradient-to-br cursor-pointer transition-all duration-500 ${
      isActive ? 'from-[#6211d4] to-[#4f0eb0]' : 'from-[#2f2839] to-[#1d1825] hover:from-[#6211d4] hover:to-[#4f0eb0]'
    }`}
    onClick={onClick}
  >
    <div className={`relative h-full bg-[#141118] rounded-2xl p-6 transition-all duration-500 ${isActive ? 'bg-[#1d1825]' : 'group-hover:bg-[#1d1825]'}`}>
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#6211d4] rounded-full p-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h3 className={`font-bold ${isActive ? 'text-[#6211d4]' : 'text-white group-hover:text-[#6211d4]'} transition-colors duration-300`}>
            {name}
          </h3>
          <p className="text-[#a89db9] text-sm">
            {role} at {company}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>

      <blockquote className="relative">
        <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-[#6211d4] opacity-10" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="relative text-[#a89db9] text-base">
          {content}
        </p>
      </blockquote>

      <div className={`mt-6 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <button className="w-full py-3 rounded-xl bg-[#6211d4] text-white font-medium hover:bg-[#4f0eb0] transition-colors duration-300">
          Read Full Story
        </button>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);

  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
        <p className="text-[#a89db9] text-lg max-w-2xl mx-auto">
          Hear from our clients about their transformative experiences with our AI and automation solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="transform hover:-translate-y-2 transition-transform duration-300"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <TestimonialCard
              {...testimonial}
              isActive={activeTestimonial === testimonial.name}
              onClick={() => setActiveTestimonial(activeTestimonial === testimonial.name ? null : testimonial.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
