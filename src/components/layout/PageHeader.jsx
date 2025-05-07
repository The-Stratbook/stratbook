import React from 'react';

/**
 * Reusable page header component for consistent page headers
 * @param {string} title - Main page title
 * @param {string} subtitle - Optional subtitle or description
 * @param {JSX.Element} children - Optional additional content to display below the header
 * @param {string} className - Additional CSS classes
 */
const PageHeader = ({ title, subtitle, children, className = "mb-8 text-center" }) => {
  return (
    <div className={className}>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && (
        <p className="text-xl mb-4 text-base-content">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default PageHeader;