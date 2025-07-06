'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
  timeline: string;
  budget: string;
}

interface ProjectType {
  value: string;
  label: string;
}

interface Timeline {
  value: string;
  label: string;
}

interface BudgetRange {
  value: string;
  label: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
    timeline: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log('Message sent successfully:', result);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
        timeline: '',
        budget: ''
      });
      
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again or contact us directly at hello@buildquick.io');
    }
  };

  const projectTypes: ProjectType[] = [
    { value: 'new-website', label: 'New Website Design' },
    { value: 'redesign', label: 'Website Redesign' },
    { value: 'ecommerce', label: 'E-commerce Store' },
    { value: 'web-app', label: 'Web Application' },
    { value: 'consultation', label: 'Strategy Consultation' }
  ];

  const timelines: Timeline[] = [
    { value: 'urgent', label: 'ASAP (Rush Project)' },
    { value: '2-4-weeks', label: '2-4 Weeks' },
    { value: '1-2-months', label: '1-2 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetRanges: BudgetRange[] = [
    { value: 'startup', label: '$40-80/month (Foundation)' },
    { value: 'growth', label: '$80-150/month (Growth)' },
    { value: 'enterprise', label: '$150+/month (Transform)' },
    { value: 'custom', label: 'Custom Solution' },
    { value: 'discuss', label: 'Let&apos;s Discuss' }
  ];

  if (submitted) {
    return (
      <section id="contact" className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#E07A5F]/6 to-[#D4A373]/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D4A373]/4 to-[#E07A5F]/6 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="card-professional max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="font-poppins text-3xl font-bold text-[#111827] mb-4">
                Your Message is <span className="gradient-text">On Its Way</span>
              </h2>
              
              <p className="font-inter text-lg text-[#1f2937] leading-relaxed mb-6">
                Thank you for reaching out! Your message has been sent successfully to our team. We&apos;re excited to learn about your vision and explore how we can bring it to life together.
              </p>
              
              <div className="bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 rounded-xl p-6 mb-8">
                <h3 className="font-poppins font-semibold text-[#E07A5F] mb-3">What Happens Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E07A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <p className="text-[#1f2937] font-inter">We&apos;ll review your project details within 2 hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#D4A373] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <p className="text-[#1f2937] font-inter">Schedule a discovery call to understand your vision</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#E07A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <p className="text-[#1f2937] font-inter">Create a custom proposal tailored to your goals</p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#1f2937] font-inter mb-8">
                In the meantime, feel free to explore our <a href="#portfolio" className="text-[#E07A5F] hover:underline font-semibold">portfolio</a> or learn more about our <a href="#services" className="text-[#E07A5F] hover:underline font-semibold">process</a>.
              </p>
              
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary py-3 px-6 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-[#E07A5F]/6 to-[#D4A373]/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D4A373]/4 to-[#E07A5F]/6 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Emotional Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07A5F]/10 to-[#D4A373]/10 border border-[#E07A5F]/20 text-[#E07A5F] px-4 py-2 rounded-full text-sm font-medium font-poppins">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Let&apos;s Start the Conversation
            </span>
          </div>
          
          <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-[1.1]">
            <span className="block mb-2">Ready to Create</span>
            <span className="block gradient-text">Something Amazing?</span>
          </h2>
          
          <p className="font-inter text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed text-balance">
            Every great digital experience starts with a conversation. Tell us about your vision, 
            and let&apos;s explore how we can bring it to life together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="card-professional">
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Let&apos;s Connect <span className="gradient-text">Personally</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                                  <div className="flex items-start space-x-3 sm:space-x-4 group">
                                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                                      <div>
                      <h4 className="font-poppins font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email Us</h4>
                      <p className="text-gray-600 font-inter mb-2 text-xs sm:text-sm">We respond within 2 hours</p>
                                          <a href="mailto:hello@buildquick.io" className="text-[#E07A5F] font-semibold hover:underline text-sm sm:text-base">
                        hello@buildquick.io
                      </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#D4A373] to-[#E07A5F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-1 text-sm sm:text-base">Call Us</h4>
                    <p className="text-gray-600 font-inter mb-2 text-xs sm:text-sm">Mon-Fri, 9am-6pm PST</p>
                    <a href="tel:+1-555-123-4567" className="text-[#E07A5F] font-semibold hover:underline text-sm sm:text-base">
                      +1 (617) 415-8731
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="card-professional">
              <h4 className="font-poppins font-bold text-gray-900 mb-3 sm:mb-4 text-lg sm:text-xl">
                Why <span className="gradient-text">Choose Us</span>?
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-inter text-sm sm:text-base">Free consultation & strategy session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-inter text-sm sm:text-base">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-inter text-sm sm:text-base">Dedicated project manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-inter text-sm sm:text-base">Transparent, fixed-price model</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Contact Form */}
          <div className="card-professional">
            <h3 className="font-poppins text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Tell Us About Your <span className="gradient-text">Vision</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="form-label">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Amazing Company"
                />
              </div>

              {/* Project Type and Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(timeline => (
                      <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="form-label">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select budget range</option>
                  {budgetRanges.map(budget => (
                    <option key={budget.value} value={budget.value}>{budget.label}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="form-label">Tell us about your vision *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input resize-none"
                  placeholder="Describe your project, goals, and what makes your business unique. The more details you share, the better we can help bring your vision to life."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="loading-spinner w-5 h-5"></div>
                    Sending your message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    Let&apos;s Create Something Beautiful
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-700 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 