import TagManager from 'react-gtm-module';

// Use environment variable for GTM ID
export const initializeGTM = () => {

  const GTM_MEASUREMENT_ID = process.env.REACT_APP_GTM_ID;
  
  // Only initialize if the Measurement ID is available
  if (!GTM_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found in environment variables');
    return;
  }

  
  const tagManagerArgs = {
    gtmId: GTM_MEASUREMENT_ID,
  };
  
  TagManager.initialize(tagManagerArgs);
};