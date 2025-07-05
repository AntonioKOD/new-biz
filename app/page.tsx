'use client';

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Auto-complete loading after 5 seconds as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadComplete();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Layout>
          {/* Hero Section */}
          <Hero />
          
          {/* Services Section */}
          <Services />
          
          {/* How It Works Section */}
          <HowItWorks />
          
          {/* Portfolio Section */}
          <Portfolio />
          
          {/* Testimonials Section */}
          <Testimonials />
          
          {/* Pricing Section */}
          <Pricing />
          
          {/* FAQ Section */}
          <FAQ />
          
          {/* Contact Section */}
          <Contact />
        </Layout>
      </div>
    </>
  );
}
