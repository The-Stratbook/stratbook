import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A component to display community tips and strategies related to an operator
 * 
 * @param {Object} props
 * @param {Array} props.tips - Array of tip objects
 * @param {string} props.operatorName - Name of the operator for view all link
 */
const RelatedTips = ({ tips, operatorName }) => {
  if (!tips || tips.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Community Tips & Strategies</h2>
      <ul className="space-y-4">
        {tips.slice(0, 3).map((tip, index) => (
          <li key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <Link to={`/siege/tip/${tip.id}`} className="block">
              <h3 className="font-semibold text-lg text-primary hover:text-primary-focus mb-1">{tip.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {tip.description && tip.description.substring(0, 120)}...
              </p>
              <div className="flex flex-wrap gap-2">
                {tip.skill && (
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    {tip.skill} Skill
                  </span>
                )}
                {tip.map && (
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                    {tip.map}
                  </span>
                )}
                {tip.tags && tip.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {tips.length > 3 && (
        <div className="mt-4 text-center">
          <Link to={`/siege/tips?operator=${operatorName}`} className="text-primary hover:text-primary-focus">
            View all {tips.length} tips for {operatorName}
          </Link>
        </div>
      )}
    </div>
  );
};

export default RelatedTips;