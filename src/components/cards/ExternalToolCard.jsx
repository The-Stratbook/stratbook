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
    <div className={`card bg-base-200 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 ${className}`}>
      <figure className="px-4 pt-4">
        <img 
          src={tool.image} 
          alt={getAltText()}
          className="rounded-xl h-32 object-contain bg-base-200 p-2"
          loading="lazy"
          onError={handleImageError}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tool.name}</h2>
        <p className="text-sm">{tool.description}</p>
        <div className="card-actions justify-end mt-4">
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