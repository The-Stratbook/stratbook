import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls to the top of the page when the route changes
 * This solves the issue of maintaining scroll position when navigating between pages
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;