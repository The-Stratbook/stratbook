import React from 'react';

/**
 * A reusable loading component with various styles
 * 
 * @param {Object} props - Component props
 * @param {string} [props.type='spinner'] - Type of loader (spinner, dots, ring)
 * @param {string} [props.size='md'] - Size of the loader (xs, sm, md, lg)
 * @param {string} [props.color='primary'] - Color of the loader (primary, secondary, accent, etc.)
 * @param {boolean} [props.fullPage=false] - Whether to display as a full-page overlay
 * @param {string} [props.text] - Optional loading text to display
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {React.ReactElement} The loading component
 */
const Loading = ({
  type = 'spinner',
  size = 'md',
  color = 'primary',
  fullPage = false,
  text,
  className = '',
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
  };

  // Color classes
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    neutral: 'text-neutral',
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
  };

  // Type classes
  const typeClasses = {
    spinner: 'loading-spinner',
    dots: 'loading-dots',
    ring: 'loading-ring',
  };

  // Combined classes
  const combinedClasses = [
    'loading',
    typeClasses[type] || 'loading-spinner',
    sizeClasses[size] || '',
    colorClasses[color] || '',
    className,
  ].filter(Boolean).join(' ');

  // Full page loading overlay
  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-base-300 bg-opacity-75 z-50">
        <div className="flex flex-col items-center">
          <span className={combinedClasses} {...props}></span>
          {text && <p className="mt-4 text-lg font-medium">{text}</p>}
        </div>
      </div>
    );
  }

  // Regular loading spinner with optional text
  return (
    <div className="flex flex-col items-center">
      <span className={combinedClasses} {...props}></span>
      {text && <p className="mt-2 text-sm">{text}</p>}
    </div>
  );
};

export default Loading;