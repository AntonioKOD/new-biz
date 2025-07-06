'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { 
      name: 'Home', 
      href: '#home'
    },
    { 
      name: 'Services', 
      href: '#services'
    },
    { 
      name: 'Portfolio', 
      href: '#portfolio'
    },
    { 
      name: 'Process', 
      href: '#how-it-works'
    },
    { 
      name: 'Pricing', 
      href: '#pricing'
    },
    { 
      name: 'Contact', 
      href: '#contact'
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#E07A5F] text-white px-4 py-2 rounded-lg z-[9999] focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'navbar-scrolled py-1' 
            : 'navbar-professional py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* BuildQuick Logo */}
            <div className="flex-shrink-0">
              <a
                href="#main-content"
                aria-label="BuildQuick - Go to homepage"
                className="group flex items-center"
              >
                {/* Logo Image */}
                <Image
                  src="/build.svg"
                  alt="BuildQuick Logo"
                  className={`transition-all duration-300 ease-out group-hover:scale-105 -m-2`}
                  width={100}
                  height={100}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav 
              className="hidden lg:flex items-center space-x-8"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link-professional font-medium text-sm tracking-wide"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#pricing"
                className="btn-primary"
                aria-label="Get started with website design"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative w-10 h-10 text-gray-900 hover:text-[#E07A5F] focus:outline-none transition-colors duration-200 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span 
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span 
                    className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-out ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile navigation menu"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Mobile Menu Panel */}
        <nav 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] mobile-menu-professional shadow-xl transform transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="navigation" 
          aria-label="Mobile navigation"
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <Image
                src="/build.svg"
                alt="BuildQuick Logo"
                className="h-4"
                width={16}
                height={16}
              />
              <span className="font-semibold text-lg font-poppins text-gray-900">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-[#E07A5F] focus:outline-2 focus:outline-[#E07A5F] rounded-lg transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-6">
              <a
                href="#pricing"
                className="btn-primary w-full text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Get started with website design"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar; 