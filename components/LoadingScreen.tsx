'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('loading'); // loading, reveal, complete
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setStage('reveal');
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (stage === 'reveal') {
      const timer = setTimeout(() => {
        setStage('complete');
        setTimeout(() => {
          setIsVisible(false);
          onLoadComplete?.();
        }, 800);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stage, onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-800 ${
      stage === 'complete' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E07A5F] via-[#D4A373] to-[#E07A5F] animate-gradient-shift">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/15 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/20 rounded-full blur-md animate-bounce-slow"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full p-8 animate-pulse">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 rounded animate-fade-in-stagger"
                style={{ animationDelay: `${(i % 12) * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white loading-screen-text">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1000 ${
          stage === 'reveal' ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
        }`}>
          <div className="relative inline-block">
            {/* Logo Background Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg scale-110 animate-pulse-glow"></div>
            
            {/* Logo */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/build.svg"
                    alt="BuildQuick Logo"
                    className="h-16 w-auto filter brightness-0 invert"
                    width={200}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping opacity-30"></div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="text-2xl font-bold font-poppins tracking-tight">BuildQuick</div>
                <div className="text-sm opacity-80 font-inter">Digital Experiences</div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text Animation */}
        <div className="mb-8">
          <div className={`text-xl font-inter transition-all duration-500 ${
            stage === 'loading' ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="inline-block animate-typewriter">
              Crafting your digital experience
            </span>
            <span className="animate-blink">|</span>
          </div>
          
          <div className={`text-2xl font-poppins font-bold transition-all duration-500 ${
            stage === 'reveal' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Welcome to the future of web design
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`w-80 mx-auto transition-all duration-500 ${
          stage === 'complete' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Progress Fill */}
              <div 
                className="h-full bg-gradient-to-r from-white via-white/90 to-white rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            {/* Progress Text */}
            <div className="flex justify-between items-center mt-3 text-sm font-inter">
              <span className="opacity-80">Loading experience</span>
              <span className="font-semibold">{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className={`mt-8 flex justify-center space-x-2 transition-all duration-500 ${
          stage === 'reveal' ? 'opacity-0' : 'opacity-60'
        }`}>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(8px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in-stagger {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end);
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fade-in-stagger {
          animation: fade-in-stagger 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen; 