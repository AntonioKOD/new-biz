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
      title: 'Construct Concepts',
      category: 'Construction',
      image: '/construct.png',
      liveUrl: 'https://constructconcepts.com',
      description: 'Professional construction company website with modern design and project showcase'
    },
    {
      id: 2,
      title: 'Gjovanas Villas',
      category: 'Hospitality',
      image: '/gjovanasvillas.png',
      liveUrl: 'https://gjovanasvillas.com',
      description: 'Luxury villa rental website with booking system and stunning photography'
    },
    {
      id: 3,
      title: 'Hotel As Baksrrjoll',
      category: 'Hotels',
      image: '/hotelas.png',
      liveUrl: 'https://hotelasbaksrrjoll.com',
      description: 'Boutique hotel website with reservation system and local attractions guide'
    },
    {
      id: 4,
      title: 'Malci Construction',
      category: 'Construction',
      image: '/malci.png',
      liveUrl: 'https://malciconstruction.com',
      description: 'Full-service construction company with portfolio and service showcase'
    },
    {
      id: 5,
      title: 'Roaming Mix',
      category: 'Travel',
      image: '/roaming.png',
      liveUrl: 'https://roamingmix.com',
      description: 'Travel and lifestyle blog with engaging content and social integration'
    },
    {
      id: 6,
      title: 'Unfinished Sentences',
      category: 'Creative',
      image: '/unfinished.png',
      liveUrl: 'https://unfinishedsentences.co',
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
              Real Projects, Real Results
            </span>
          </div>
          
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-[1.1]">
            <span className="block mb-2">Websites That</span>
            <span className="block gradient-text">Make a Difference</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
            From construction companies to luxury villas, creative platforms to travel blogs — 
            see how we&apos;ve helped businesses across different industries create their perfect digital home.
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
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a
                      href={item.liveUrl}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-2 focus:outline-white focus:outline-offset-2"
                      aria-label={`View live ${item.title} website`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live Site
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#E07A5F] transition-colors duration-200"
                    aria-label={`Visit ${item.title} website`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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