import React from 'react';
import { normalizeSide, SIDES } from '../../utils/sideUtils';

/**
 * Badge component to display operator side (attack/defense)
 * @param {string} side - The operator's side (attack/defend)
 * @param {string} className - Additional CSS classes
 * @param {string} position - Position classes for absolute positioning (e.g. "top-4 right-4")
 */
const OperatorBadge = ({ side, className = "", position = "" }) => {
  const operatorSide = normalizeSide(side);
  const badgeClass = operatorSide === SIDES.ATTACK ? 'badge-info' : 'badge-warning';
  
  const positionClass = position ? `absolute ${position}` : '';

  return (
    <span className={`badge ${badgeClass} badge-lg ${positionClass} ${className}`}>
      {side}
    </span>
  );
};

export default OperatorBadge;