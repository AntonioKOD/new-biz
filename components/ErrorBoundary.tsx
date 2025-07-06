'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return <DefaultErrorFallback error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

const DefaultErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-poppins">
          Oops! Something went wrong
        </h1>
        
        <p className="text-gray-600 mb-8 font-inter leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working to fix it.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={resetError}
            className="w-full bg-gradient-to-r from-[#E07A5F] to-[#D4A373] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#E07A5F]/30"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-white text-[#E07A5F] font-semibold py-3 px-6 rounded-lg border-2 border-[#E07A5F] transition-all duration-300 hover:bg-[#E07A5F] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#E07A5F]/30"
          >
            Refresh Page
          </button>
        </div>

        {/* Contact Information */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            Still having trouble? Get in touch with us:
          </p>
          <a
            href="mailto:hello@buildquick.io"
            className="text-[#E07A5F] hover:text-[#D4A373] font-semibold transition-colors duration-200"
          >
            hello@buildquick.io
          </a>
        </div>

        {/* Development Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-8 text-left bg-gray-50 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-xs text-gray-600 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default ErrorBoundary; 