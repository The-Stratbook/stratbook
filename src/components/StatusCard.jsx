import React from 'react';

/**
 * Reusable status card component for displaying statistics
 * @param {Array} items - Array of status items to display, each with icon, title, value, description and color
 */
const StatusCard = ({ items }) => {
  return (
    <div className="stats shadow w-full bg-base-200">
      {items.map((item, index) => (
        <div key={index} className="stat">
          {item.icon && (
            <div className={`stat-figure text-${item.color || 'primary'}`}>
              {item.icon}
            </div>
          )}
          <div className="stat-title">{item.title}</div>
          <div className={`stat-value text-${item.color || 'primary'}`}>{item.value}</div>
          <div className="stat-desc">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default StatusCard;