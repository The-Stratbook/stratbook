import React from 'react';

/**
 * A compact operator card showing just the logo and name
 * @param {Object} props 
 * @param {string} props.name - Operator name
 * @param {string} props.fileName - Optional file name for the operator image (if different from name)
 * @param {boolean} props.alive - Whether the operator is alive (for KillBoard)
 * @param {boolean} props.isSelected - Whether the operator is currently selected
 * @param {string} props.side - Operator side (Attacker/Defender)
 * @param {function} props.onClick - Click handler for the card
 * @param {string} props.className - Additional class names
 */
const CompactOperatorCard = ({ 
  name, 
  fileName = null,
  alive = true, 
  isSelected = false,
  side = "Attacker",
  onClick = null,
  className = ""
}) => {
  // Determine the CSS classes based on the alive status and selection state
  const bgColor = alive 
    ? 'bg-base-200 hover:bg-base-300' 
    : 'bg-red-200 text-black';
  
  const borderColor = isSelected 
    ? side === "Attacker" ? 'ring-2 ring-primary' : 'ring-2 ring-secondary'
    : '';
  
  const imageName = fileName || name;

  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer ${bgColor} ${borderColor} ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <img
          src={`/images/operators/${imageName}_logo.png`}
          alt={name}
          className="w-12 h-12 mb-2"
          onError={(e) => (e.target.src = "/images/operators/default_logo.png")}
        />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default CompactOperatorCard;