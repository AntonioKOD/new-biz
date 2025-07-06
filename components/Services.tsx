'use client';

import React from 'react';

interface Experience {
  id: number;
  title: string;
  description: string;
  emotion: string;
  icon: React.ReactNode;
  gradient: string;
}

const Services: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'First Impressions That Wow',
      description: 'When someone visits your website, you get one chance to make them think &ldquo;These people know what they&apos;re doing.&rdquo; We make sure that happens every single time.',
      emotion: 'Professional & Trustworthy',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
        </svg>
      ),
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Speed That Impresses',
      description: 'Nothing kills excitement like a slow website. Your site will load lightning-fast, keeping visitors engaged and Google happy with your search rankings.',
      emotion: 'Fast & Reliable',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 3,
      title: 'Perfect on Every Device',
      description: 'Whether your customers are browsing on their phone during lunch or their laptop at home, your website will look absolutely perfect on every screen size.',
      emotion: 'Seamless & Beautiful',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Worry-Free Maintenance',
      description: 'While you focus on running your business, we handle all the technical stuff behind the scenes — updates, security, backups, and keeping everything running smoothly.',
      emotion: 'Peace of Mind',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622C21 6.109 18.6 3.436 15.56 2.749L12 2.036z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-[#E07A5F]/6 to-[#D4A373]/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#D4A373]/4 to-[#E07A5F]/6 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#E07A5F]/3 to-[#D4A373]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Emotional Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-4 py-2 rounded-full text-sm font-medium font-poppins">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
              </svg>
              Everything You Need to Succeed Online
            </span>
          </div>
          
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-[1.1]">
            <span className="block mb-2">Your Website Should Work</span>
            <span className="block gradient-text">As Hard As You Do.</span>
          </h2>
          
          <p className="font-inter text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
            We don&apos;t just build websites — we create digital spaces that make your business look amazing, 
            work perfectly, and help you grow without any of the technical headaches.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group relative"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Card with Enhanced Hover Effects */}
              <div className="card-professional h-full relative overflow-hidden">
                {/* Subtle Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Enhanced Animation */}
                  <div className="mb-4 sm:mb-6">
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${experience.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      {experience.icon}
                    </div>
                  </div>
                  
                  {/* Emotion Badge */}
                  <div className="inline-block bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 font-poppins group-hover:bg-gradient-to-r group-hover:from-[#E07A5F]/15 group-hover:to-[#D4A373]/15 transition-all duration-300">
                    <span className="text-[#E07A5F]">{experience.emotion}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-poppins font-bold text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:text-[#E07A5F] transition-colors duration-300 leading-tight">
                    {experience.title}
                  </h3>
                  
                  {/* Emotional Description */}
                  <p className="font-inter text-gray-700 leading-relaxed text-base sm:text-lg">
                    {experience.description}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-full h-full bg-gradient-to-br ${experience.gradient} rounded-full blur-sm`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Philosophy Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance">
              We&apos;re Here to Make <span className="gradient-text">Your Life Easier</span>
            </h3>
            <p className="font-inter text-base sm:text-lg text-gray-700 leading-relaxed text-balance mb-6 sm:mb-8">
              You started your business to follow your passion — not to become a web developer. 
              That&apos;s where we come in. We handle all the technical stuff so you can focus on what you love doing most.
            </p>
            
            {/* Process Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                                  <h4 className="font-poppins font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">We Listen</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Tell us about your business and what you want to achieve</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4A373] to-[#E07A5F] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">We Create</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Design and build a website that perfectly represents your brand</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">We Support</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Keep everything running smoothly while you focus on your business</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elevated CTA Section */}
        <div className="text-center">
          <div className="card-professional max-w-4xl mx-auto text-center relative overflow-hidden">
            {/* Subtle Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E07A5F]/5 to-[#D4A373]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-[#E07A5F] opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
                </svg>
              </div>
              
              <h3 className="font-poppins text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-balance">
                Ready to Love <span className="gradient-text">Your Website</span>?
              </h3>
              
              <p className="font-inter text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg text-balance max-w-2xl mx-auto leading-relaxed">
                Join business owners who&apos;ve discovered what it feels like to have a website that actually helps their business grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="#pricing"
                  className="btn-primary py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg hover:shadow-lg inline-flex items-center gap-3 group w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09z" />
                  </svg>
                  Yes, Let&apos;s Get Started!
                </a>
                
                <a
                  href="#portfolio"
                  className="btn-secondary py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg inline-flex items-center gap-3 group w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Show Me Some Examples
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 