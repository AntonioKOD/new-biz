'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 300);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-50 flex items-center justify-center"
        >
          <div className="text-center px-4 sm:px-6">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-poppins">
                BuildQuick
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-2 font-inter">
                Crafting your digital presence
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full max-w-xs mx-auto mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm text-gray-600 font-inter">Loading</span>
                <span className="text-xs sm:text-sm text-gray-600 font-inter">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 sm:h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#E07A5F] to-[#D4A373] rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Loading Animation */}
            <div className="flex justify-center space-x-1 sm:space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-[#E07A5F] to-[#D4A373] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 font-inter"
            >
              Preparing your experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 