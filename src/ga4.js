import ReactGA from 'react-ga4';

// Use environment variable for GA Measurement ID
export const initializeGA = () => {
  const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
  
  // Only initialize if the Measurement ID is available
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found in environment variables');
    return;
  }
  
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};