import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable component for "Get Involved" sections
 * @param {string} title - Section title
 * @param {string} description - Section description
 * @param {Array} items - Array of contribution methods, each with title and description
 * @param {string} buttonText - Call-to-action button text
 * @param {string} buttonLink - Link for the call-to-action
 */
const ContributeCard = ({ 
  title = "Get Involved", 
  description = "We're passionate about building the ultimate resource for tactical FPS players, but we need your help!",
  items = [],
  buttonText = "Learn How to Contribute",
  buttonLink = "/contribute" 
}) => {
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">{title}</h2>
        <p className="mb-4 text-base-content">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {items.map((item, index) => (
            <div key={index} className="bg-base-200 p-4 rounded-lg">
              <h3 className="font-bold text-primary">{item.title}</h3>
              <p className="text-sm text-base-content">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="card-actions justify-center mt-6">
          <Link to={buttonLink} className="btn btn-primary">{buttonText}</Link>
        </div>
      </div>
    </div>
  );
};

export default ContributeCard;