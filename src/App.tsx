import React from 'react';
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141118] font-['Space_Grotesk']">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <div className="mx-auto w-full max-w-7xl">
          <WhyChooseUs />
          <Services />
        </div>
      </main>
    </div>
  );
};

export default App;
