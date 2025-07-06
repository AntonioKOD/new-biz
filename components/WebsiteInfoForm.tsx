'use client';

import React, { useState } from 'react';
import { TextReveal } from './AnimatedComponents';

interface WebsiteInfoFormProps {
  onSubmit: (formData: WebsiteFormData) => void;
  onBack: () => void;
  isLoading?: boolean;
}

export interface WebsiteFormData {
  businessName: string;
  businessType: string;
  contactEmail: string;
  contactPhone: string;
  siteDescription: string;
  referenceUrl: string;
  features: string[];
  timeline: string;
  budget: string;
  additionalNotes: string;
}

const WebsiteInfoForm: React.FC<WebsiteInfoFormProps> = ({ onSubmit, onBack, isLoading = false }) => {
  const [formData, setFormData] = useState<WebsiteFormData>({
    businessName: '',
    businessType: '',
    contactEmail: '',
    contactPhone: '',
    siteDescription: '',
    referenceUrl: '',
    features: [],
    timeline: '',
    budget: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Partial<WebsiteFormData>>({});

  const businessTypes = [
    'Restaurant & Food',
    'Professional Services',
    'E-commerce',
    'Healthcare',
    'Real Estate',
    'Creative & Design',
    'Technology',
    'Education',
    'Non-profit',
    'Other'
  ];

  const availableFeatures = [
    'Contact Forms',
    'Online Booking',
    'Blog/News Section',
    'Portfolio Gallery',
    'Testimonials',
    'Social Media Integration',
    'SEO Optimization',
    'Mobile Responsive',
    'Analytics Setup',
    'Content Management System'
  ];

  const timelineOptions = [
    'As soon as possible',
    'Within 2 weeks',
    'Within 1 month',
    'Within 2-3 months',
    'No specific timeline'
  ];

  const budgetOptions = [
    'Just the monthly subscription ($40/month)',
    'Additional one-time setup fee ($200)',
    'Premium package with custom features ($500 setup)',
    'Enterprise solution (custom pricing)'
  ];

  const handleInputChange = (field: keyof WebsiteFormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    handleInputChange('features', newFeatures);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<WebsiteFormData> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    if (!formData.businessType) {
      newErrors.businessType = 'Please select your business type';
    }
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }
    if (!formData.siteDescription.trim()) {
      newErrors.siteDescription = 'Please describe your website needs';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 py-8 sm:py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-[#E07A5F]/8 to-[#D4A373]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-[#D4A373]/6 to-[#E07A5F]/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <TextReveal>
              <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tell Us About Your Website
              </h1>
            </TextReveal>
            <TextReveal delay={200}>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Help us understand your vision so we can create the perfect website for your business. 
                After checkout, we&apos;ll reach out to discuss the details and get started on your project.
              </p>
            </TextReveal>
          </div>

                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" role="form" aria-labelledby="form-title">
          {/* Business Information */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="text-lg font-semibold text-gray-900 mb-4 font-poppins">Business Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 ${
                    errors.businessName ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Your business name"
                />
                {errors.businessName && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
                )}
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 ${
                    errors.businessType ? 'border-red-300' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select your business type</option>
                  {businessTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
                )}
              </div>
            </div>
          </fieldset>

          {/* Contact Information */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="text-lg font-semibold text-gray-900 mb-4 font-poppins">Contact Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 ${
                    errors.contactEmail ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.contactEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>
                )}
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </fieldset>

          {/* Website Description */}
          <fieldset className="border-0 p-0 m-0">
            <legend className="text-lg font-semibold text-gray-900 mb-4 font-poppins">Website Requirements</legend>
            <div>
              <label htmlFor="siteDescription" className="block text-sm font-semibold text-gray-900 mb-2">
                Describe Your Website Needs *
              </label>
              <textarea
                id="siteDescription"
                value={formData.siteDescription}
                onChange={(e) => handleInputChange('siteDescription', e.target.value)}
                rows={4}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200 ${
                  errors.siteDescription ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Tell us about your business, target audience, and what you want to achieve with your website..."
              />
              {errors.siteDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.siteDescription}</p>
              )}
            </div>

            {/* Reference URL */}
            <div>
              <label htmlFor="referenceUrl" className="block text-sm font-semibold text-gray-900 mb-2">
                Reference Website (Optional)
              </label>
              <input
                type="url"
                id="referenceUrl"
                value={formData.referenceUrl}
                onChange={(e) => handleInputChange('referenceUrl', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200"
                placeholder="https://example.com (a website you like the style of)"
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 sm:mb-4">
                Desired Features (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {availableFeatures.map(feature => (
                  <label key={feature} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="w-4 h-4 text-[#E07A5F] border-gray-300 rounded focus:ring-[#E07A5F] focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {feature}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                  Budget Preference
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select budget option</option>
                  {budgetOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-semibold text-gray-900 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                id="additionalNotes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E07A5F] focus:border-transparent transition-all duration-200"
                placeholder="Any other details, special requirements, or questions..."
              />
            </div>
          </fieldset>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button
                type="button"
                onClick={onBack}
                className="btn-secondary py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg focus:outline-2 focus:outline-[#E07A5F] focus:outline-offset-2 w-full sm:w-auto"
              >
                ← Go Back
              </button>
              
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg hover:shadow-lg focus:outline-2 focus:outline-[#E07A5F] focus:outline-offset-2 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed flex-1 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to Checkout
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mt-8">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Complete your payment securely with Stripe</li>
                    <li>• We&apos;ll review your information and reach out within 24 hours</li>
                    <li>• We&apos;ll schedule a call to discuss your project in detail</li>
                    <li>• Your website development will begin based on your timeline</li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WebsiteInfoForm; 