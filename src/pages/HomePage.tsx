import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import AgencyHeader from '../components/agency/AgencyHeader';
import AgencyHero from '../components/agency/AgencyHero';
import AgencyAbout from '../components/agency/AgencyAbout';
import AgencyServicesGrid from '../components/agency/AgencyServicesGrid';
import AgencyAudiences from '../components/agency/AgencyAudiences';
import AgencyPortfolioCarousel from '../components/agency/AgencyPortfolioCarousel';
import AgencyProcess from '../components/agency/AgencyProcess';
import AgencyOffer from '../components/agency/AgencyOffer';
import AgencyFounder from '../components/agency/AgencyFounder';
import AgencyCapabilities from '../components/agency/AgencyCapabilities';
import AgencyContact from '../components/agency/AgencyContact';
import AgencyFooter from '../components/agency/AgencyFooter';
import ScrollProgress from '../components/motion/ScrollProgress';
import { Reveal } from '../components/motion/Reveal';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Website design and development');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink text-white selection:bg-lime selection:text-ink font-sans flex flex-col">
        <ScrollProgress />
        <AgencyHeader onLetsTalkClick={() => scrollToContact()} />

        <main id="main-content" className="flex-1">
          <AgencyHero onStartProject={() => scrollToContact()} />
          <AgencyAbout />
          <AgencyServicesGrid onSelectService={(service) => scrollToContact(service)} />
          <AgencyAudiences />
          <Reveal y={40}>
            <AgencyPortfolioCarousel />
          </Reveal>
          <AgencyProcess />
          <AgencyOffer onSelectPlan={(service) => scrollToContact(service)} />
          <AgencyFounder />
          <AgencyCapabilities />
          <Reveal y={40}>
            <AgencyContact initialService={selectedService} />
          </Reveal>
        </main>

        <AgencyFooter />
      </div>
    </MotionConfig>
  );
};

export default HomePage;
