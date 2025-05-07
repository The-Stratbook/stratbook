import React from 'react';

/**
 * Component to display an operator's images (main image and logo)
 * @param {string} name - The operator's name or fileName
 * @param {string} className - Additional CSS classes for the container
 * @param {string} imgClassName - Additional CSS classes for the main image
 * @param {string} logoClassName - Additional CSS classes for the logo
 */
const OperatorImageSet = ({ 
  name, 
  className = "relative w-48 h-48 mb-4", 
  imgClassName = "w-full h-full object-contain",
  logoClassName = "absolute bottom-0 right-0 w-12 h-12"
}) => {
  return (
    <div className={className}>
      <img 
        src={`/images/operators/${name}.png`} 
        alt={name}
        className={imgClassName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/general/logo.png";
        }}
      />
      <img 
        src={`/images/operators/${name}_logo.png`} 
        alt={`${name} logo`}
        className={logoClassName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.style.display = "none";
        }}
      />
    </div>
  );
};

export default OperatorImageSet;