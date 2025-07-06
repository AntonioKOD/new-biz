'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main 
        id="main-content"
        className="flex-1 scroll-smooth"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout; 