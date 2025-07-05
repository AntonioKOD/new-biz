/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { TypingAnimation, TextReveal } from './AnimatedComponents';
import { loadStripe } from '@stripe/stripe-js';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#pricing');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          siteDescription: 'Professional Website Package',
          referenceUrl: ''
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(module => 
        module.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      );
      
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your request. Please try again or contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen bg-white flex items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 relative overflow-hidden"
      aria-label="Hero section - Professional website design services"
    >
      {/* Sophisticated Decorative Blur Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-[#E07A5F]/8 to-[#D4A373]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-[#D4A373]/6 to-[#E07A5F]/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#E07A5F]/3 to-[#D4A373]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20">
          {/* Left Side Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Enhanced Trust Badge */}
            <div className="mb-8">
              <span 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E07A5F]/15 to-[#D4A373]/15 border border-[#E07A5F]/30 text-[#E07A5F] px-6 py-3 rounded-full text-sm font-bold font-poppins transition-all duration-200 hover:border-[#E07A5F]/50 hover:bg-gradient-to-r hover:from-[#E07A5F]/20 hover:to-[#D4A373]/20 hover:shadow-lg"
                role="note"
                aria-label="Complete digital experience package"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
                </svg>
                Let&apos;s Create Something Beautiful Together
              </span>
            </div>
            
            {/* Enhanced Main Headline with Fixed Animation */}
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 text-balance">
              <TextReveal className="block mb-4">
                <span className="text-gray-900">Your Business</span>
              </TextReveal>
              <TextReveal delay={300} className="block mb-4 min-h-[1.2em]">
                <TypingAnimation
                  texts={['Deserves Better.', 'Needs Impact.', 'Should Shine.', 'Can Thrive.']}
                  className="gradient-text"
                  typeSpeed={120}
                  deleteSpeed={80}
                  pauseTime={2500}
                />
              </TextReveal>
              <TextReveal delay={600} className="block text-gray-600 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium">
                <span className="gradient-text">Let&apos;s Make It Happen.</span>
              </TextReveal>
            </h1>
            
            {/* Enhanced Value Proposition with Animation */}
            <TextReveal delay={800} className="mb-8">
              <p className="font-inter text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
                Your business has a story worth telling. We&apos;re here to help you share it with the world through a website that feels authentically you.
                <span className="block mt-4 text-lg font-semibold text-gray-900">
                  Professional websites starting at <span className="text-3xl gradient-text font-bold">$40</span>/month — because every business deserves to shine online.
                </span>
              </p>
            </TextReveal>

            {/* Enhanced Benefits with Emotional Language */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-semibold font-inter">Authentically You</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-semibold font-inter">Welcoming & Warm</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 group">
                <div className="w-5 h-5 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-900 font-semibold font-inter">Built to Last</span>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="btn-primary py-4 px-8 text-lg hover:shadow-lg focus:outline-2 focus:outline-[#E07A5F] focus:outline-offset-2 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Start your website project"
                type="button"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      I&apos;m Ready to Get Started!
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              
              <a
                href="#portfolio"
                className="btn-secondary py-4 px-8 text-lg focus:outline-2 focus:outline-[#E07A5F] focus:outline-offset-2 group"
                aria-label="View our portfolio of digital experiences"
              >
                <span className="flex items-center justify-center gap-3">
                  Show Me Some Examples
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </a>
            </div>


          </div>
          
          {/* Enhanced Right Side with Sophisticated Mockup */}
          <div className="flex-1 lg:pl-12">
            <div className="relative max-w-lg mx-auto">
              {/* Main Desktop Mockup with Enhanced Shadows */}
              <div className="relative bg-gray-900 rounded-t-xl p-3 shadow-2xl border border-gray-800 hover:shadow-3xl transition-all duration-500 group dark-bg-card">
                {/* Enhanced Browser Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-lg py-1.5 px-4 ml-4">
                    <div className="text-xs text-gray-300 font-mono">https://yourbusiness.com</div>
                  </div>
                  <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                
                {/* Enhanced Website Content */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
                  {/* Premium Header */}
                  <div className="bg-white px-6 py-4 border-b border-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-28 bg-gradient-to-r from-[#E07A5F] to-[#D4A373] rounded-lg shadow-sm"></div>
                      <div className="flex space-x-6">
                        {['About', 'Services', 'Work', 'Contact'].map((item) => (
                          <div key={item} className="h-3 w-14 bg-gray-200 rounded-full"></div>
                        ))}
                      </div>
                      <div className="h-8 w-20 bg-gradient-to-r from-[#E07A5F] to-[#D4A373] rounded-lg shadow-sm"></div>
                    </div>
                  </div>
                  
                  {/* Sophisticated Hero Section */}
                  <div className="px-6 py-10 bg-gradient-to-br from-gray-50 to-white">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <div className="h-8 bg-gradient-to-r from-[#E07A5F] to-[#D4A373] rounded-lg w-4/5 shadow-sm"></div>
                        <div className="h-6 bg-gradient-to-r from-[#D4A373] to-[#E07A5F] rounded-lg w-3/5 opacity-80"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-300 rounded-full w-4/5"></div>
                        <div className="h-3 bg-gray-300 rounded-full w-3/5"></div>
                      </div>
                      <div className="flex space-x-3 mt-6">
                        <div className="h-10 w-32 bg-gradient-to-r from-[#E07A5F] to-[#D4A373] rounded-lg shadow-sm"></div>
                        <div className="h-10 w-24 border-2 border-[#E07A5F] rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Content Cards */}
                  <div className="px-6 py-8 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-xl mb-4 shadow-sm"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-4/5 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-full mb-1"></div>
                        <div className="h-2 bg-gray-100 rounded-full w-3/5"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Mobile Mockup */}
              <div className="absolute -bottom-8 -right-8 w-28 bg-gray-900 rounded-xl p-1.5 shadow-xl transform rotate-12 hover:rotate-6 transition-transform duration-300 border border-gray-800 dark-bg-card">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-[#E07A5F] to-[#D4A373]"></div>
                  <div className="p-3 space-y-2">
                    <div className="h-1.5 bg-gray-300 rounded-full w-4/5"></div>
                    <div className="h-1 bg-gray-200 rounded-full w-3/5"></div>
                    <div className="grid grid-cols-2 gap-1 mt-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="h-4 bg-gray-100 rounded"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sophisticated Floating Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#E07A5F]/15 to-[#D4A373]/15 rounded-full flex items-center justify-center border border-[#E07A5F]/30 backdrop-blur-sm">
                <svg className="w-10 h-10 text-[#E07A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#D4A373]/15 to-[#E07A5F]/15 rounded-full flex items-center justify-center border border-[#D4A373]/30 backdrop-blur-sm">
                <svg className="w-8 h-8 text-[#D4A373]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              {/* Additional Floating Quality Indicators */}
              <div className="absolute top-1/3 -right-12 w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center border border-emerald-300/50 backdrop-blur-sm">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 