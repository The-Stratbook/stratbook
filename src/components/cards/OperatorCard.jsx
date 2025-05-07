import React from 'react';
import { Link } from 'react-router-dom';
import OperatorBadge from '../badges/OperatorBadge';
import OperatorImageSet from '../operators/OperatorImageSet';
import OperatorRoles from '../operators/OperatorRoles';

/**
 * Component for displaying an operator's details in a card format
 * @param {Object} operator - The operator data object
 * @param {boolean} loading - Whether the component is in a loading state
 */
const OperatorCard = ({ operator, loading }) => {
  if (loading) {
    return (
      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 flex flex-col items-center max-w-md mx-auto relative">
        <span className="loading loading-spinner"></span>
      </div>
    );
  }

  if (!operator) {
    return null;
  }

  const operatorName = operator.fileName || operator.name;

  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 flex flex-col items-center max-w-md mx-auto relative">
      <OperatorBadge 
        side={operator.side} 
        position="top-4 right-4"
      />
      
      <OperatorImageSet name={operatorName} />
    
      <h2 className="text-2xl font-bold mb-2">{operatorName}</h2>
      
      <OperatorRoles roles={operator.roles} />
      
      <p className="text-center text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {operator.biography && operator.biography.description}
      </p>
      
      <Link 
        to={`/siege/hub/operator/${operatorName}`}
        className="btn btn-sm btn-primary"
      >
        View Details
      </Link>
    </div>
  );
};

export default OperatorCard;