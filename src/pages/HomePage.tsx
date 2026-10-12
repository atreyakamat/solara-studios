import React, { useState } from 'react';
import AgencyHeader from '../components/agency/AgencyHeader';
import AgencyHero from '../components/agency/AgencyHero';
import AgencyAbout from '../components/agency/AgencyAbout';
import AgencyServicesGrid from '../components/agency/AgencyServicesGrid';
import AgencyPortfolioCarousel from '../components/agency/AgencyPortfolioCarousel';
import AgencyCapabilities from '../components/agency/AgencyCapabilities';
import AgencyContact from '../components/agency/AgencyContact';
import AgencyFooter from '../components/agency/AgencyFooter';

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
    <div className="min-h-screen bg-ink text-white selection:bg-lime selection:text-ink font-sans flex flex-col">
      {/* 1. Header & Navigation */}
      <AgencyHeader onLetsTalkClick={() => scrollToContact()} />

      <main id="main-content" className="flex-1">
        {/* 2. Dark Cinematic Hero */}
        <AgencyHero onStartProject={() => scrollToContact()} />

        {/* 3 & 4. About Solara Studios & Animated Services Marquee */}
        <AgencyAbout />

        {/* 5. Services Grid */}
        <AgencyServicesGrid onSelectService={(service) => scrollToContact(service)} />

        {/* 6. Selected Work (Horizontal Portfolio Carousel) */}
        <AgencyPortfolioCarousel />

        {/* 7. Technical & Digital Capabilities Feature */}
        <AgencyCapabilities />

        {/* 8. Project Enquiry Section ("Let's talk.") */}
        <AgencyContact initialService={selectedService} />
      </main>

      {/* 9. Footer */}
      <AgencyFooter />
    </div>
  );
};

export default HomePage;
