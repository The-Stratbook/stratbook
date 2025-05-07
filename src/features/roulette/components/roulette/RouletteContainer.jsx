import React from 'react';
import RouletteControls from '../RouletteControls';
import OperatorCard from '../../../../components/cards/OperatorCard';

/**
 * Component that wraps the operator roulette functionality including controls and result display
 * 
 * @param {Object} props
 * @param {Function} props.onSelectOperator - Function to call when getting a random operator
 * @param {boolean} props.loading - Whether the component is in a loading state
 * @param {Object} props.selectedOperator - The currently selected operator
 * @param {boolean} props.attackersAvailable - Whether attackers are available to select
 * @param {boolean} props.defendersAvailable - Whether defenders are available to select
 * @param {JSX.Element} props.children - Optional content to display before the controls
 * @param {string} props.className - Additional CSS classes
 */
const RouletteContainer = ({ 
  onSelectOperator, 
  loading, 
  selectedOperator,
  attackersAvailable = true,
  defendersAvailable = true,
  children,
  className = ""
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {/* Optional header content */}
      {children}
      
      {/* Selection Controls */}
      <RouletteControls 
        onSelectOperator={onSelectOperator} 
        loading={loading}
        attackersAvailable={attackersAvailable}
        defendersAvailable={defendersAvailable}
      />
      
      {/* Result Display */}
      {(selectedOperator || loading) && (
        <div className="flex flex-col items-center">
          <OperatorCard 
            operator={selectedOperator} 
            loading={loading} 
          />
        </div>
      )}
    </div>
  );
};

export default RouletteContainer;