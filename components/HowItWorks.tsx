'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Step {
  id: number;
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: 'Discovery',
      duration: '1 Day',
      description: 'We dive deep into your business goals, target audience, and brand vision to create the perfect strategy.',
      icon: (
        <svg className="w-12 h-12 text-[#E07A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Design & Build',
      duration: '3–5 Days',
      description: 'Our team crafts your custom website with modern design principles and cutting-edge technology.',
      icon: (
        <svg className="w-12 h-12 text-[#E07A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Launch & Grow',
      duration: 'Instant',
      description: 'Your website goes live with hosting, domain, and ongoing support to help your business thrive.',
      icon: (
        <svg className="w-12 h-12 text-[#E07A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            A simple, collaborative process that puts you in control every step of the way
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 sm:gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex-1 text-center px-4 sm:px-0"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 sm:mb-4">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="font-bold text-gray-900 mt-2 text-lg sm:text-xl mb-2">
                {step.title}
              </h3>
              
              {/* Duration */}
              <div className="text-gray-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                ({step.duration})
              </div>
              
              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
              
              {/* Step Connector (not visible on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#E07A5F] to-transparent transform translate-x-4 translate-y-6"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline for Mobile */}
        <div className="lg:hidden mt-8 sm:mt-12">
          <div className="flex justify-center items-center space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="w-3 h-3 bg-[#E07A5F] rounded-full"></div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-px bg-[#E07A5F]/30"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
            Ready to start this journey together? Let&apos;s bring your vision to life.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-[#E07A5F] hover:bg-[#D4A373] text-white py-3 px-6 sm:px-8 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base touch-manipulation"
          >
            Let&apos;s Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 