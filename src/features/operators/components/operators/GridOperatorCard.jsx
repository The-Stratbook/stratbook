import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A medium-sized grid card for operators with image and logo
 * Used in the operators hub grid
 * 
 * @param {Object} props
 * @param {string} props.name - Operator name
 * @param {string} props.fileName - Optional file name for images (if different from name)
 * @param {string} props.linkTo - Link destination
 * @param {string} props.className - Additional CSS classes
 */
const GridOperatorCard = ({
  name,
  fileName = null,
  linkTo = null,
  className = ''
}) => {
  const imageName = fileName || name;
  const url = linkTo || `/siege/hub/operators/${imageName}`;
  
  return (
    <Link
      to={url}
      className={`block card bg-base-200 relative group cursor-pointer ${className}`}
    >
      <figure className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={`/images/operators/${imageName}.png`}
          alt={name}
          className="w-full h-50 object-cover object-top rounded-t-lg"
          onError={(e) => (e.target.src = "/images/operators/default.png")}
        />
        <img
          src={`/images/operators/${imageName}_logo.png`}
          alt={`${name} Icon`}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white shadow-md"
          onError={(e) => (e.target.src = "/images/operators/default_logo.png")}
        />
      </figure>
      <div className="card-body text-black text-center py-2 rounded-b-lg">
        <h3 className="text-sm font-bold text-base-content">{name}</h3>
      </div>
    </Link>
  );
};

export default GridOperatorCard;