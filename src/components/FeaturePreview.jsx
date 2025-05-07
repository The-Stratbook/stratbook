import React from 'react';

/**
 * Component for displaying upcoming features
 * @param {Array} features - Array of feature objects with title and description
 */
const FeaturePreview = ({ features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Coming Soon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 text-center"
          >
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePreview;