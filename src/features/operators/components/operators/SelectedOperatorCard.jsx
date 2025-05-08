import React from 'react';

/**
 * A component to display the currently selected operator
 * Used in the KillBoard to show which operator is currently active
 * 
 * @param {Object} props
 * @param {string} props.name - Operator name
 * @param {string} props.side - Operator side (Attacker/Defender)
 * @param {string} props.className - Additional CSS classes
 */
const SelectedOperatorCard = ({
  name,
  side,
  className = ''
}) => {
  // Determine border color based on side
  const borderColor = side === 'Attacker' ? 'border-primary' : 'border-secondary';
  
  return (
    <div className={`flex items-center gap-2 bg-base-100 p-2 rounded-lg border-l-4 ${borderColor} ${className}`}>
      <div className="w-8 h-8">
        <img 
          src={`/images/operators/${name}_logo.png`} 
          alt={name}
          className="w-full h-full object-cover" 
          onError={(e) => (e.target.src = "/images/operators/default_logo.png")}
        />
      </div>
      <span>{name} ({side})</span>
    </div>
  );
};

export default SelectedOperatorCard;