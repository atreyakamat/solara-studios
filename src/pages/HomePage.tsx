import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import AIDemo from '../components/AIDemo';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { AuroraBackground } from '../components/AuroraBackground';

const HomePage: React.FC = () => {
  return (
    <AuroraBackground>
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-10">
          <Hero />
          <WhyChooseUs />
          <Services />
          <CaseStudies />
          <Pricing />
          <AIDemo />
          <Testimonials />
          <CTA />
        </div>
      </div>
    </AuroraBackground>
  );
};

export default HomePage;
