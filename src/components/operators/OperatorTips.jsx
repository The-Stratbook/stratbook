import React from 'react';

/**
 * A component to display operator gameplay tips
 * 
 * @param {Object} props
 * @param {Array} props.tips - Array of gameplay tips
 */
const OperatorTips = ({ tips }) => {
  if (!tips || tips.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Gameplay Tips</h2>
      <ul className="list-disc pl-5 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default OperatorTips;