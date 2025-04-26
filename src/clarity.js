export const initializeClarity = () => {
  // Check if Clarity is already initialized to avoid duplicate initializations
  if (window.clarity) return;
  
  // Only initialize if the Clarity ID is available in environment variables
  const clarityId = process.env.REACT_APP_CLARITY_ID;
  if (!clarityId) {
    console.warn('Clarity ID not found in environment variables');
    return;
  }

  (function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", clarityId);
};