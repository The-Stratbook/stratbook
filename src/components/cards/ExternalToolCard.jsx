import React from 'react';

const ExternalToolCard = ({ tool, className = '' }) => {
  // Use placeholder image if the tool image isn't available
  const handleImageError = (e) => {
    e.target.src = '/images/general/logo.png';
  };

  // Create more descriptive alt text
  const getAltText = () => {
    return `${tool.name} tool - ${tool.description.substring(0, 50)}${tool.description.length > 50 ? '...' : ''}`;
  };

  return (
    <div className={`card bg-base-200 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 h-full ${className}`}>
      <figure className="px-4 pt-4">
        <div className="w-full h-24 sm:h-32 flex items-center justify-center">
          <img 
            src={tool.image} 
            alt={getAltText()}
            className="rounded-xl max-h-full max-w-full object-contain bg-base-200 p-2"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
      </figure>
      <div className="card-body p-4 sm:p-6 flex flex-col h-full">
        <h2 className="card-title text-lg sm:text-xl">{tool.name}</h2>
        <p className="text-sm line-clamp-3">{tool.description}</p>
        <div className="card-actions justify-end mt-auto pt-3">
          <a 
            href={tool.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExternalToolCard;