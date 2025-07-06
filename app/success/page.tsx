import React from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#333333] mb-4">
            Welcome to the Team! 🎉
          </h1>
          <p className="text-[#666666] mb-6">
            Your subscription has been successfully activated! We&apos;ve received your project details and will be in touch within 24 hours to discuss your website requirements and get started.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-[#333333] mb-4">What Happens Next?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#E07A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <p className="text-[#666666] text-sm">
                Our team will review your project details and reach out within 24 hours to discuss your requirements
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#E07A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <p className="text-[#666666] text-sm">
                We&apos;ll create your custom website design and get your approval
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-[#E07A5F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <p className="text-[#666666] text-sm">
                Your website will be live with hosting and domain included
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#E07A5F] hover:bg-[#D4A373] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
          >
            Back to Home
          </Link>
          <p className="text-sm text-[#666666]">
            Questions? Email us at{' '}
            <a 
              href="mailto:hello@buildquick.io" 
              className="text-[#E07A5F] hover:underline"
            >
                              hello@buildquick.io
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 