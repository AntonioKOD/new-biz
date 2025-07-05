'use client';

import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "We went from feeling invisible online to having customers find us every day. The difference isn&apos;t just in the design—it&apos;s in how it makes people feel when they discover our brand.",
      name: "Sarah Chen",
      title: "Boutique Owner",
      business: "Bloom & Co",
      transformation: "From 2 online orders to 50+ per month",
      emotion: "From invisible to memorable",
      avatar: "SC",
      gradient: "from-rose-400 to-pink-500",
      industry: "Retail"
    },
    {
      id: 2,
      quote: "Our old website felt like a placeholder. Now it feels like us—warm, professional, and inviting. Clients tell us they chose us because our website made them feel confident about working with us.",
      name: "Marcus Rodriguez",
      title: "Architect", 
      business: "Rodriguez Design Studio",
      transformation: "3x increase in qualified leads",
      emotion: "From placeholder to authentic",
      avatar: "MR",
      gradient: "from-blue-400 to-cyan-500",
      industry: "Architecture"
    },
    {
      id: 3,
      quote: "The best part isn&apos;t the compliments on our design—it&apos;s watching potential clients spend 5+ minutes exploring our site instead of bouncing in 10 seconds. They&apos;re actually engaging with our story.",
      name: "Emma Thompson",
      title: "Wellness Coach",
      business: "Inner Balance Wellness",
      transformation: "85% reduction in bounce rate",
      emotion: "From overlooked to engaging",
      avatar: "ET",
      gradient: "from-emerald-400 to-teal-500",
      industry: "Wellness"
    },
    {
      id: 4,
      quote: "Every interaction with the team felt personal and intentional. They didn&apos;t just build us a website—they helped us understand what our brand could become. The result speaks for itself.",
      name: "David Park",
      title: "Restaurant Owner",
      business: "Harbor Table",
      transformation: "40% increase in reservation calls",
      emotion: "From uncertain to confident",
      avatar: "DP",
      gradient: "from-amber-400 to-orange-500",
      industry: "Hospitality"
    },
    {
      id: 5,
      quote: "We thought we needed a website. What we got was a digital experience that tells our story beautifully. Customers often mention how professional and trustworthy we feel online now.",
      name: "Lisa Johnson",
      title: "Financial Advisor",
      business: "Johnson Financial Group",
      transformation: "60% more consultation bookings",
      emotion: "From amateur to authoritative",
      avatar: "LJ",
      gradient: "from-purple-400 to-indigo-500",
      industry: "Finance"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#E07A5F]/4 to-[#D4A373]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D4A373]/6 to-[#E07A5F]/4 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Emotional Section Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-4 py-2 rounded-full text-sm font-medium font-poppins">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Stories of Transformation
            </span>
          </div>
          
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance leading-[1.1]">
            <span className="block mb-2">Real Stories.</span>
            <span className="block gradient-text">Real Impact.</span>
          </h2>
          
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
            Every website tells a story. Here&apos;s how we&apos;ve helped businesses transform their digital presence 
            into something that truly connects with their audience.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card-professional relative overflow-hidden min-h-[400px] group">
            {/* Subtle Background Animation */}
            <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-xl`}></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              {/* Quote */}
              <div className="text-center mb-8">
                <div className="mb-6">
                  <svg className="w-12 h-12 mx-auto text-[#E07A5F] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                <blockquote className="font-inter text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-relaxed font-light italic mb-8 text-balance">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${current.gradient} rounded-2xl flex items-center justify-center text-white font-poppins font-bold text-lg shadow-lg`}>
                    {current.avatar}
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-poppins font-bold text-gray-900 text-lg">
                      {current.name}
                    </h4>
                    <p className="text-gray-600 font-inter">
                      {current.title}
                    </p>
                    <p className="text-[#E07A5F] font-inter font-semibold text-sm">
                      {current.business}
                    </p>
                  </div>
                </div>
              </div>

              {/* Transformation Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-4 py-3 rounded-xl font-poppins font-semibold">
                    <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Transformation</div>
                    <div className="font-bold">{current.emotion}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl font-poppins font-semibold">
                    <div className="text-xs uppercase tracking-wide opacity-80 mb-1">Impact</div>
                    <div className="font-bold">{current.transformation}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-6">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-[#E07A5F] hover:text-[#E07A5F] transition-all duration-200 group shadow-sm"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Progress Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#E07A5F] scale-125'
                      : 'bg-gray-300 hover:bg-[#E07A5F]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-[#E07A5F] hover:text-[#E07A5F] transition-all duration-200 group shadow-sm"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Industry Stories Grid */}
        <div className="mb-20">
          <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12 text-balance">
            Transformations Across <span className="gradient-text">Every Industry</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`card-professional cursor-pointer transition-all duration-300 group ${
                  currentTestimonial === index ? 'ring-2 ring-[#E07A5F] shadow-lg' : 'hover:shadow-md'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-xl flex items-center justify-center text-white font-poppins font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    {testimonial.avatar}
                  </div>
                  
                  <h4 className="font-poppins font-bold text-gray-900 mb-2 group-hover:text-[#E07A5F] transition-colors duration-200">
                    {testimonial.name}
                  </h4>
                  
                  <p className="text-gray-700 font-inter mb-3">
                    {testimonial.business}
                  </p>
                  
                  <div className="text-gray-700 font-semibold bg-[#E07A5F]/10 px-3 py-1 rounded-full">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Trust Statistics */}
        <div className="text-center">
          <div className="card-professional max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E07A5F]/5 to-[#D4A373]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-8 text-balance">
                Every Story Matters to <span className="gradient-text">Us</span>
              </h3>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 font-inter text-lg leading-relaxed mb-8 text-balance">
                  Behind every website is a real person with real dreams for their business. We don&apos;t just build websites—we build bridges between your passion and the people who need what you offer.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-gray-900 font-semibold font-poppins mb-2">
                      Personal Touch
                    </h4>
                    <p className="text-gray-700 font-inter text-sm">
                      Every project gets our full attention and care
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D4A373] to-[#E07A5F] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-gray-900 font-semibold font-poppins mb-2">
                      Honest Approach
                    </h4>
                    <p className="text-gray-700 font-inter text-sm">
                      We believe in transparency and doing what&apos;s right
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-gray-900 font-semibold font-poppins mb-2">
                      Your Success Story
                    </h4>
                    <p className="text-gray-700 font-inter text-sm">
                      We&apos;re here to help you write your next chapter
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                                  <p className="text-gray-700 font-inter italic text-lg text-balance">
                    &quot;Success isn&apos;t measured in numbers alone—it&apos;s measured in the moment when someone discovers exactly what they were looking for on your website.&quot;
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 