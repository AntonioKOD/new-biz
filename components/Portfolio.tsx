'use client';

import Image from 'next/image';
import React from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  liveUrl: string;
  description: string;
}

const Portfolio = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Modern Construction Co.',
      category: 'Construction',
      image: '/construct.png',
      liveUrl: '#',
      description: 'Professional construction company website with modern design and project showcase'
    },
    {
      id: 2,
      title: 'Luxury Villa Rentals',
      category: 'Hospitality',
      image: '/gjovanasvillas.png',
      liveUrl: '#',
      description: 'Elegant vacation rental website with booking system and stunning photography'
    },
    {
      id: 3,
      title: 'Boutique Hotel Design',
      category: 'Hotels',
      image: '/hotelas.png',
      liveUrl: '#',
      description: 'Sophisticated hotel website with reservation system and local attractions guide'
    },
    {
      id: 4,
      title: 'Premium Construction Services',
      category: 'Construction',
      image: '/malci.png',
      liveUrl: '#',
      description: 'Full-service construction company with portfolio and service showcase'
    },
    {
      id: 5,
      title: 'Travel & Lifestyle Blog',
      category: 'Travel',
      image: '/roaming.png',
      liveUrl: '#',
      description: 'Engaging travel blog with rich content and social media integration'
    },
    {
      id: 6,
      title: 'Creative Writing Platform',
      category: 'Creative',
      image: '/unfinished.png',
      liveUrl: '#',
      description: 'Creative writing platform with community features and publishing tools'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-4 py-2 rounded-full text-sm font-medium font-poppins">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
              </svg>
              Design Examples & Templates
            </span>
          </div>
          
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-[1.1]">
            <span className="block mb-2">Beautiful Designs</span>
            <span className="block gradient-text">Built for Your Success</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
            From construction companies to luxury hospitality, creative platforms to travel blogs — 
            explore our design capabilities and see how we can create the perfect digital presence for your business.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="grid"
          aria-label="Portfolio showcase of completed websites"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              role="gridcell"
              tabIndex={0}
              aria-label={`Portfolio item ${index + 1}: ${item.title} - ${item.category}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  width={500}
                  height={500}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Design Preview
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="font-poppins text-xl font-bold text-gray-900 group-hover:text-[#E07A5F] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-inter text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-professional max-w-3xl mx-auto">
            <div className="mb-6">
              <svg className="w-12 h-12 mx-auto text-[#E07A5F] opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
              </svg>
            </div>
            
            <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-balance">
              Your Business <span className="gradient-text">Deserves This Too</span>
            </h3>
            
            <p className="font-inter text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto text-balance">
              Every successful website starts with understanding your unique business. 
              Let&apos;s create something amazing that represents your vision and helps you grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="btn-primary py-4 px-8 text-lg inline-flex items-center gap-3 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
                </svg>
                Start My Project
              </a>
              
              <a
                href="#contact"
                className="btn-secondary py-4 px-8 text-lg inline-flex items-center gap-3 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                Let&apos;s Talk First
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 