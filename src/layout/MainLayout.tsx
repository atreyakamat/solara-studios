import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#131118] font-['Space_Grotesk']">
      <Navbar />
      <main className="flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

