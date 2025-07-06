'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-083KY4M62N', {
        page_path: pathname,
        page_title: document.title,
        custom_map: {
          'custom_parameter_1': 'business_type',
          'custom_parameter_2': 'project_timeline',
          'custom_parameter_3': 'budget_range'
        }
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Track form submissions
    const trackFormSubmission = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.closest('form')) {
        const form = target.closest('form');
        const formId = form?.id || 'unknown_form';
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: formId,
            value: 1
          });
        }
      }
    };

    // Track button clicks
    const trackButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a');
      if (button) {
        const buttonText = button.textContent?.trim() || 'unknown_button';
        const buttonHref = (button as HTMLAnchorElement).href;
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'button_click', {
            event_category: 'engagement',
            event_label: buttonText,
            link_url: buttonHref,
            value: 1
          });
        }
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(maxScroll)) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${maxScroll}%`,
              value: maxScroll
            });
          }
        }
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'engagement',
          value: timeSpent
        });
      }
    };

    // Add event listeners
    document.addEventListener('submit', trackFormSubmission);
    document.addEventListener('click', trackButtonClick);
    window.addEventListener('scroll', trackScrollDepth);
    
    // Track time on page every 30 seconds
    const timeInterval = setInterval(trackTimeOnPage, 30000);

    // Cleanup
    return () => {
      document.removeEventListener('submit', trackFormSubmission);
      document.removeEventListener('click', trackButtonClick);
      window.removeEventListener('scroll', trackScrollDepth);
      clearInterval(timeInterval);
    };
  }, []);

  return null;
};

export default Analytics; 