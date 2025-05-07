import React from 'react';

const ImageWithFallback = ({ src, alt, fallbackSrc, ...props }) => (
  <img
    src={src}
    alt={alt}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = fallbackSrc;
    }}
    {...props}
  />
);

export default ImageWithFallback;