import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      {/* Route redirects to prevent dead links on common aliases */}
      <Route path="/work" element={<Navigate to="/#work" replace />} />
      <Route path="/services" element={<Navigate to="/#services" replace />} />
      <Route path="/pricing" element={<Navigate to="/#pricing" replace />} />
      <Route path="/contact" element={<Navigate to="/#contact" replace />} />
      <Route path="/about" element={<Navigate to="/#why-solara" replace />} />
      <Route path="/case-studies" element={<Navigate to="/#work" replace />} />
      {/* Fallback to homepage */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
