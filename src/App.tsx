import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Documentation from './pages/Documentation';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Consultation from './pages/Consultation';
import APIReference from './pages/APIReference';
import Tutorials from './pages/Tutorials';
import GlobeDemo from './pages/GlobeDemo';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="blog" element={<Blog />} />
        <Route path="support" element={<Support />} />
        <Route path="consultation" element={<Consultation />} />
        <Route path="api-reference" element={<APIReference />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="globe-demo" element={<GlobeDemo />} />
      </Route>
    </Routes>
  );
};

export default App;
