'use client';

import React, { useState } from 'react';
import { AnimatedCounter, MagneticButton, TextReveal } from './AnimatedComponents';
import WebsiteInfoForm, { WebsiteFormData } from './WebsiteInfoForm';

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const mainPlan = {
    id: 'professional',
    name: 'Professional Website',
    price: 40,
    originalPrice: 65,
    description: 'Everything you need for a stunning professional website',
    popular: true,
    features: [
      'Custom website design that reflects your brand',
      'Mobile-responsive across all devices', 
      'Professional domain & SSL security included',
      'Lightning-fast hosting & 99.9% uptime',
      'SEO optimization for better discovery',
      'Google Analytics integration',
      'Monthly updates & maintenance',
      'Email support & training',
    ],
    highlights: [
      'No setup fees',
      'No hidden costs', 
      'Cancel anytime',
    ]
  };

  const additionalServices = [
    {
      title: 'E-commerce Store',
      description: 'Online store with payment processing, inventory management, and order tracking',
      price: 'Starting at $80/month',
      features: ['Product catalog', 'Payment processing', 'Inventory management', 'Order tracking', 'Customer accounts']
    },
    {
      title: 'Web Application',
      description: 'Custom web applications with advanced functionality and user management',
      price: 'Custom pricing',
      features: ['User authentication', 'Database integration', 'API development', 'Advanced features', 'Scalable architecture']
    },
    {
      title: 'Enterprise Solution',
      description: 'Large-scale websites with custom integrations and dedicated support',
      price: 'Contact us',
      features: ['Custom integrations', 'Dedicated support', 'Multiple environments', 'Advanced security', 'Performance optimization']
    }
  ];

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleFormBack = () => {
    setShowForm(false);
  };

  const handleFormSubmit = async (formData: WebsiteFormData) => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          siteDescription: formData.siteDescription,
          referenceUrl: formData.referenceUrl,
          businessName: formData.businessName,
          businessType: formData.businessType,
          contactEmail: formData.contactEmail,
          contactPhone: formData.contactPhone,
          features: formData.features,
          timeline: formData.timeline,
          budget: formData.budget,
          additionalNotes: formData.additionalNotes
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

  // Show the form if user clicked "Get Started"
  if (showForm) {
    return (
      <WebsiteInfoForm
        onSubmit={handleFormSubmit}
        onBack={handleFormBack}
        isLoading={isLoading}
      />
    );
  }

  return (
    <section id="pricing" className="section-spacing px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#E07A5F]/4 to-[#D4A373]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#D4A373]/6 to-[#E07A5F]/4 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <TextReveal className="text-center mb-20">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-6 py-3 rounded-full text-base font-semibold font-poppins">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Simple, Transparent Pricing
            </span>
          </div>
          
          <h2 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-balance leading-[1.05]">
            <span className="block mb-3">Get Your Dream Website</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl gradient-text">$40/month</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-600 mt-2">Everything Included</span>
          </h2>
          
          <p className="font-inter text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-balance">
            Professional website design, hosting, domain, and ongoing support. 
            <strong className="text-[#E07A5F] font-semibold"> No setup fees. No hidden costs. Cancel anytime.</strong>
          </p>
        </TextReveal>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative group">
            {/* Popular Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-[#E07A5F] to-[#D4A373] text-white px-8 py-3 rounded-full text-lg font-bold font-poppins shadow-xl">
                🔥 Most Popular Choice
              </span>
            </div>

            {/* Main Card */}
            <div className="card-professional relative overflow-hidden border-2 border-[#E07A5F]/20 shadow-2xl">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E07A5F]/5 to-[#D4A373]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center p-12">
                {/* Pricing Header */}
                <div className="mb-10">
                  <h3 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
                    {mainPlan.name}
                  </h3>
                  <p className="text-gray-600 font-inter text-lg mb-6">
                    {mainPlan.description}
                  </p>
                  
                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-lg text-gray-600 line-through font-inter">
                        ${mainPlan.originalPrice}/month
                      </span>
                      <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Save ${mainPlan.originalPrice - mainPlan.price}/month
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-6xl sm:text-7xl font-bold font-poppins text-[#E07A5F]">
                        $<AnimatedCounter target={mainPlan.price} />
                      </span>
                      <span className="text-2xl text-gray-600 font-inter ml-2">/month</span>
                    </div>
                    <p className="text-gray-600 font-inter">
                      Billed monthly • Cancel anytime • No contracts
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
                  {mainPlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-inter text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {mainPlan.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-4 py-2 rounded-full text-sm font-semibold font-poppins">
                      ✓ {highlight}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <MagneticButton 
                  className="btn-primary py-5 px-12 text-xl font-bold shadow-2xl hover:shadow-3xl group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleGetStarted}
                  disabled={isLoading}
                >
                  <span className="flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Get Started Today
                        <svg className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </MagneticButton>

                {/* Legal Small Print */}
                <div className="mt-6 max-w-2xl mx-auto">
                  <p className="text-xs text-gray-500 font-inter leading-relaxed text-center">
                    By purchasing this service, you acknowledge and agree that all website code, templates, and proprietary development methods remain the intellectual property of BuildQuick. You receive a license to use the final website for your business purposes. Custom content, images, and branding provided by you remain your property.
                  </p>
                </div>

                {/* Trust Elements */}
                <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-gray-600 font-inter">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure & protected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <TextReveal className="text-center mb-16">
          <h3 className="font-poppins text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-balance">
            Need Something <span className="gradient-text">More Advanced</span>?
          </h3>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
            We also build custom solutions for businesses with specific needs.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
          {additionalServices.map((service, index) => (
            <TextReveal key={index} delay={index * 200}>
              <div className="card-professional h-full group hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6 ">
                  <h4 className="font-poppins text-2xl font-bold mb-3 group-hover:text-[#E07A5F] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 font-inter leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-white font-poppins">
                    <span className="text-white">{service.price}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-[#E07A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-inter">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className="btn-secondary w-full py-3 px-6 text-center inline-flex items-center justify-center gap-2 group/link"
                  >
                    <span>Discuss This Project</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 