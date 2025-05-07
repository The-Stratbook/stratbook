import React from 'react';

/**
 * Component to display an operator's roles as badges
 * @param {Array} roles - Array of role strings
 * @param {string} className - Additional CSS classes
 */
const OperatorRoles = ({ roles, className = "flex flex-wrap justify-center gap-2 mb-4" }) => {
  if (!roles || roles.length === 0) return null;
  
  return (
    <div className={className}>
      {roles.map((role, index) => (
        <span key={index} className="badge badge-outline">{role}</span>
      ))}
    </div>
  );
};

export default OperatorRoles;