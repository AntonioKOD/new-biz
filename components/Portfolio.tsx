'use client';

import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern E-commerce Store',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Restaurant Website',
      category: 'Food & Beverage',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Tech Startup Landing',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Creative Agency Portfolio',
      category: 'Creative',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Healthcare Practice',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 7,
      title: 'Fitness Studio',
      category: 'Health & Fitness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 8,
      title: 'Photography Portfolio',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    },
    {
      id: 9,
      title: 'Law Firm Website',
      category: 'Legal',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop&crop=entropy&cs=tinysrgb',
      liveUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stories We&apos;ve Helped Tell
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Every website has a story. Here are some of the beautiful digital experiences we&apos;ve had the joy of creating with our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="grid"
          aria-label="Portfolio showcase of completed websites"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl drop-shadow-md group cursor-pointer"
              role="gridcell"
              tabIndex={0}
              aria-label={`Portfolio item ${index + 1}: ${item.title} - ${item.category}`}
            >
              {/* Thumbnail Image */}
              <img
                src={item.image}
                alt={`Screenshot of ${item.title} website - A ${item.category.toLowerCase()} website design showcase`}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                loading={index < 6 ? 'eager' : 'lazy'}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#333333]/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center portfolio-overlay">
                <div className="text-center">
                  <a
                    href={item.liveUrl}
                    className="text-white font-semibold text-lg hover:text-[#D4A373] transition-colors duration-200 focus:outline-2 focus:outline-white focus:outline-offset-2"
                    aria-label={`View live ${item.title} website - ${item.category} project`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </a>
                  <p className="text-white/80 text-sm mt-2" aria-hidden="true">{item.category}</p>
                </div>
              </div>
              
              {/* Card Info (visible below image) */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Ready to create your own beautiful story?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E07A5F] hover:bg-[#D4A373] text-white py-3 px-8 rounded-lg font-semibold transition-colors duration-200"
          >
            Let&apos;s Chat About Your Vision
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 