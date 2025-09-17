// Analytics utility functions for conversion tracking

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Conversion tracking events
export const trackSignupAttempt = (city: string) => {
  trackEvent('signup_attempt', {
    city: city,
    event_category: 'engagement',
    event_label: 'newsletter_form'
  });
};

export const trackNewsletterSignup = (city: string) => {
  trackEvent('newsletter_signup', {
    city: city,
    event_category: 'conversion',
    event_label: 'newsletter_form',
    value: 1
  });
};