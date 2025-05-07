import React from 'react';
import StatBar from './StatBar';

/**
 * A hero banner component for operator detail pages
 * Displays operator image, stats, and basic info
 * 
 * @param {Object} props
 * @param {Object} props.operator - The operator data object
 */
const OperatorBanner = ({ operator }) => {
  if (!operator) return null;
  
  return (
    <div className="flex flex-col md:flex-row items-center">
      {/* Operator Info */}
      <div className="flex-1 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{operator.name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">{operator.side}</span>
          {operator.roles && operator.roles.map((role, index) => (
            <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{role}</span>
          ))}
        </div>
        <p className="text-gray-300">{operator.biography && operator.biography.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-6">
          <StatBar 
            label="Health" 
            value={operator.health} 
            activeColor="bg-green-500" 
          />
          
          <StatBar 
            label="Speed" 
            value={operator.speed} 
            activeColor="bg-blue-500" 
          />
          
          <StatBar 
            label="Difficulty" 
            value={operator.difficulty} 
            activeColor="bg-yellow-500" 
          />
        </div>
        
        {operator.squad && (
          <div className="mt-4">
            <span className="bg-purple-700 px-3 py-1 rounded-full text-sm">
              Squad: {operator.squad}
            </span>
          </div>
        )}
      </div>
      
      {/* Operator Images */}
      <div className="mt-6 md:mt-0 flex items-center justify-center relative">
        <img 
          src={`/images/operators/${operator.name}.png`} 
          alt={operator.name} 
          className="w-64 h-auto z-10"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/general/logo.png";
          }}
        />
        <img 
          src={`/images/operators/${operator.name}_logo.png`} 
          alt={`${operator.name} logo`} 
          className="absolute bottom-0 right-0 w-16 h-16 z-20"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
        />
      </div>
    </div>
  );
};

export default OperatorBanner;