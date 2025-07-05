'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-[#FAFAFA] py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Email */}
        <div className="mb-4">
          <a
            href="mailto:hello@buildquick.io"
            className="text-lg underline hover:text-[#E07A5F] transition-colors duration-200"
          >
            hello@buildquick.io
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center mb-4">
          {/* GitHub Icon - Hand-drawn style */}
          <a
            href="https://github.com/AntonioKOD"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-[#E07A5F] transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.2 2.1c-5.5 0-9.9 4.5-9.9 10 0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5 0-5.5-4.4-10-9.9-10z"
                style={{
                  strokeDasharray: '2,2',
                  filter: 'url(#roughen)'
                }}
              />
              <defs>
                <filter id="roughen">
                  <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8"/>
                </filter>
              </defs>
            </svg>
          </a>

          {/* LinkedIn Icon - Hand-drawn style */}
          <a
            href="https://www.linkedin.com/in/antonio-kodheli-1430aa290/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-[#E07A5F] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.1 20.1h-3.4v-5.3c0-1.3 0-2.9-1.8-2.9-1.8 0-2.1 1.4-2.1 2.8v5.4H9.4V9.1h3.3v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3v6zm-13-11.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM8.6 20.1H5.4V9.1h3.2v11zM21.9 0H2.1C.9 0 0 .9 0 2.1v19.8C0 23.1.9 24 2.1 24h19.8c1.2 0 2.1-.9 2.1-2.1V2.1C24 .9 23.1 0 21.9 0z"
                style={{
                  strokeDasharray: '3,1',
                  filter: 'url(#roughen2)'
                }}
              />
              <defs>
                <filter id="roughen2">
                  <feTurbulence baseFrequency="0.03" numOctaves="2" result="noise" seed="2"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
                </filter>
              </defs>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-4 text-[#9CA3AF]">
          <p>&copy; {new Date().getFullYear()} BuildQuick. All rights reserved.</p>
          <p className="mt-1">
            Built with ❤️ for businesses ready to grow online
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 