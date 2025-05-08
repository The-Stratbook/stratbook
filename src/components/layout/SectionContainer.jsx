import React from 'react';

/**
 * Reusable section container with consistent styling
 * @param {string} title - Section title
 * @param {JSX.Element} children - Section content
 * @param {string} className - Additional CSS classes
 */
const SectionContainer = ({ title, children, className = "mb-12" }) => {
  return (
    <div className={className}>
      {title && <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>}
      {children}
    </div>
  );
};

export default SectionContainer;