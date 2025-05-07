import React, { useState } from 'react';

/**
 * A component that displays an image with a fallback if the primary source fails to load
 * 
 * @param {Object} props - Component props
 * @param {string} props.src - Primary image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.fallbackSrc - Fallback image source URL
 * @param {string} [props.className] - Optional CSS classes
 * @param {Object} [props.imgStyle] - Optional inline styles
 * @param {string} [props.aspectRatio] - Optional aspect ratio (e.g. "16/9", "4/3", "1/1")
 * @param {Object} props - Any additional image attributes
 * @returns {React.ReactElement} The image component with fallback handling
 */
const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className = '', 
  imgStyle = {}, 
  aspectRatio,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
    setHasError(true);
    setIsLoading(false);
  };

  // Container styles for aspect ratio
  const containerStyles = aspectRatio ? {
    position: 'relative',
    paddingBottom: `calc(100% / (${aspectRatio}))`,
    overflow: 'hidden'
  } : {};

  // Image styles for aspect ratio
  const imageStyles = aspectRatio ? {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ...imgStyle
  } : imgStyle;

  const imageElement = (
    <img
      src={src}
      alt={alt}
      style={imageStyles}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );

  if (aspectRatio) {
    return (
      <div style={containerStyles} className="img-container">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-base-300">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        )}
        {imageElement}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center bg-base-300" style={imgStyle}>
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )}
      {imageElement}
    </>
  );
};

export default ImageWithFallback;