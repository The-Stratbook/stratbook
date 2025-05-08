import React from 'react';
import { Link } from 'react-router-dom';
import OperatorBadge from '../../components/badges/OperatorBadge';
import OperatorImageSet from '../../features/operators/components/operators/OperatorImageSet';
import OperatorRoles from '../../features/operators/components/operators/OperatorRoles';

/**
 * Component for displaying an operator's details in a card format
 * @param {Object} operator - The operator data object
 * @param {boolean} loading - Whether the component is in a loading state
 */
const OperatorCard = ({ operator, loading }) => {
  if (loading) {
    return (
      <div className="card bg-base-200 rounded-lg shadow-xl p-4 sm:p-6 flex flex-col items-center h-full">
        <div className="flex justify-center items-center h-full w-full py-10">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      </div>
    );
  }

  if (!operator) {
    return null;
  }

  const operatorName = operator.fileName || operator.name;

  return (
    <div className="card bg-base-200 rounded-lg shadow-xl h-full flex flex-col relative">
      <div className="absolute top-4 right-4 z-10">
        <OperatorBadge side={operator.side} />
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col items-center h-full">
        <div className="w-full mb-4">
          <OperatorImageSet name={operatorName} />
        </div>
      
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">{operatorName}</h2>
        
        <div className="mb-3">
          <OperatorRoles roles={operator.roles} />
        </div>
        
        <p className="text-center text-base-content/70 mb-4 line-clamp-3 text-sm">
          {operator.biography && operator.biography.description}
        </p>
        
        <div className="mt-auto pt-2">
          <Link 
            to={`/siege/hub/operator/${operatorName}`}
            className="btn btn-sm btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OperatorCard;