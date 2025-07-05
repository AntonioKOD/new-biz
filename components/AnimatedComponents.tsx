'use client';

import React, { useState, useEffect, useRef } from 'react';

// Interface definitions
interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface MorphingCardProps {
  children: React.ReactNode;
  className?: string;
}

interface FloatingIcon {
  x: number;
  y: number;
  element: React.ReactNode;
}

interface FloatingIconsProps {
  icons: FloatingIcon[];
  className?: string;
}

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

interface TypingAnimationProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

// Animated Counter Component
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  target, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Magnetic Button Component
export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`transform transition-transform duration-300 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

// Morphing Card Component
export const MorphingCard: React.FC<MorphingCardProps> = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#E07A5F]/20 to-[#D4A373]/20 transition-all duration-500 ${
          isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Floating Icons Component
export const FloatingIcons: React.FC<FloatingIconsProps> = ({ icons, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20 hover:opacity-60 transition-opacity duration-300"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {icon.element}
        </div>
      ))}
    </div>
  );
};

// Text Reveal Animation
export const TextReveal: React.FC<TextRevealProps> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-800 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// Glitch Effect Component
export const GlitchText: React.FC<GlitchTextProps> = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <span className={`relative z-10 ${isGlitching ? 'animate-glitch' : ''}`}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-red-500 animate-glitch-1"
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 text-blue-500 animate-glitch-2"
            aria-hidden="true"
          >
            {children}
          </span>
        </>
      )}
    </div>
  );
};

// Particle System Component
export const ParticleSystem: React.FC<ParticleSystemProps> = ({ particleCount = 50, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 122, 95, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};

// Typing Animation Component
export const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  texts, 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = '' 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-block min-w-0 ${className}`} style={{ minWidth: 'clamp(200px, 30vw, 300px)' }}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

// Ripple Effect Component
export const RippleButton: React.FC<RippleButtonProps> = ({ 
  children, 
  className = '', 
  onClick, 
  ...props 
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(event);
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

// CSS Animations (to be added to global CSS)
const AnimationStyles: React.FC = () => (
  <style jsx global>{`
    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }

    @keyframes glitch-1 {
      0% { clip: rect(42px, 9999px, 44px, 0); }
      25% { clip: rect(12px, 9999px, 59px, 0); }
      50% { clip: rect(69px, 9999px, 74px, 0); }
      75% { clip: rect(86px, 9999px, 91px, 0); }
      100% { clip: rect(42px, 9999px, 44px, 0); }
    }

    @keyframes glitch-2 {
      0% { clip: rect(65px, 9999px, 119px, 0); }
      25% { clip: rect(52px, 9999px, 74px, 0); }
      50% { clip: rect(79px, 9999px, 85px, 0); }
      75% { clip: rect(106px, 9999px, 122px, 0); }
      100% { clip: rect(65px, 9999px, 119px, 0); }
    }

    @keyframes ripple {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(4); opacity: 0; }
    }

    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }

    .animate-glitch {
      animation: glitch 0.2s infinite;
    }

    .animate-glitch-1 {
      animation: glitch-1 0.2s infinite;
    }

    .animate-glitch-2 {
      animation: glitch-2 0.2s infinite;
    }

    .animate-ripple {
      animation: ripple 0.6s linear;
    }

    .animate-blink {
      animation: blink 1s infinite;
    }
  `}</style>
);

// Export all components
const AnimatedComponentsBundle = {
  AnimatedCounter,
  MagneticButton,
  MorphingCard,
  FloatingIcons,
  TextReveal,
  GlitchText,
  ParticleSystem,
  TypingAnimation,
  RippleButton,
  AnimationStyles,
};

export default AnimatedComponentsBundle; 