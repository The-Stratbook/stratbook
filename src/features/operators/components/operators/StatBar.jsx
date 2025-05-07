import React from 'react';

/**
 * A component to display operator stats as a bar of dots
 * Used for health, speed, difficulty ratings
 * 
 * @param {Object} props
 * @param {string} props.label - The label for the stat (e.g., "Health")
 * @param {number} props.value - The value of the stat (1-3)
 * @param {number} props.maxValue - The maximum possible value (default: 3)
 * @param {string} props.activeColor - The color class for filled dots (default: "bg-green-500")
 * @param {string} props.inactiveColor - The color class for empty dots (default: "bg-gray-600")
 * @param {string} props.labelColor - The color class for the label text (default: "text-gray-400")
 * @param {string} props.className - Additional CSS classes
 */
const StatBar = ({ 
  label, 
  value, 
  maxValue = 3, 
  activeColor = "bg-green-500", 
  inactiveColor = "bg-gray-600",
  labelColor = "text-gray-400",
  className = ""
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className={`${labelColor} mr-2`}>{label}:</span>
      <div className="flex">
        {[...Array(maxValue)].map((_, i) => (
          <span 
            key={i} 
            className={`w-4 h-4 rounded-full mx-0.5 ${i < value ? activeColor : inactiveColor}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StatBar;