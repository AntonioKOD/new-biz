'use client';

import React, { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What's included in the $40/month package?",
      answer: "Everything you need for a professional online presence: custom website design, domain registration, premium hosting with SSL certificate, mobile-responsive design, basic SEO optimization, regular backups, security updates, and 24/7 customer support. No hidden fees or setup costs."
    },
    {
      id: 2,
      question: "How long does it take to build my website?",
      answer: "We follow a streamlined 3-step process: Discovery (1 day), Design & Build (3-5 days), and Launch (instant). Most websites are live within a week of starting the project. We'll keep you updated throughout the entire process."
    },
    {
      id: 3,
      question: "Can I make changes to my website after it's built?",
      answer: "Absolutely! Minor content updates and changes are included in your monthly subscription. For major design overhauls or new features, we'll provide a custom quote."
    },
    {
      id: 4,
      question: "What happens if I want to cancel my subscription?",
      answer: "You can cancel anytime with 30 days notice. "
    },
    {
      id: 5,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! Your monthly subscription includes regular security updates, performance monitoring, daily backups, uptime monitoring, and technical support. We also provide basic content updates and answer any questions you have about managing your website."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
                      <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to know about our website services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border border-[#E5E5E5] rounded-lg overflow-hidden">
              {/* Question Header */}
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center p-3 sm:p-4 bg-[#FAFAFA] border-b border-[#E5E5E5] cursor-pointer hover:bg-[#F5F5F5] transition-colors duration-200 touch-manipulation"
              >
                <h3 className="font-semibold text-gray-900 text-left pr-4 text-sm sm:text-base">
                  {faq.question}
                </h3>
                <div
                  className={`flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <svg 
                    className="w-5 h-5 text-gray-700" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </div>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="overflow-hidden">
                  <p className="px-4 py-2 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-6 bg-[#FAFAFA] rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-4">
            We&apos;re here to help! Get in touch with our team for personalized assistance.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E07A5F] hover:bg-[#D4A373] text-white py-2 px-6 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 