import React from 'react';

/**
 * Helper function to format date
 */
const formatOperatorDate = (dateString) => {
  // Check if it's already in the old format like "November 3rd (Age 38)"
  if (dateString.includes('(Age')) {
    return dateString;
  }
  
  // If it's in YYYY-MM-DD format
  try {
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    
    const month = date.toLocaleString('en-US', { month: 'long' });
    
    const day = date.getDate();
    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) daySuffix = 'st';
    else if (day === 2 || day === 22) daySuffix = 'nd';
    else if (day === 3 || day === 23) daySuffix = 'rd';
    
    // Calculate age based on current date
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    
    return `${month} ${day}${daySuffix} (Age ${age})`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

/**
 * A component to display operator biographical information
 * 
 * @param {Object} props
 * @param {Object} props.biography - The operator's biography data
 */
const OperatorBiography = ({ biography }) => {
  if (!biography) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Biography</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-gray-600 dark:text-gray-400">Real Name</p>
          <p className="font-medium">{biography.realName}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Date of Birth</p>
          <p className="font-medium">{formatOperatorDate(biography.dateOfBirth)}</p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Place of Birth</p>
          <p className="font-medium">{biography.placeOfBirth}</p>
        </div>
      </div>
    </div>
  );
};

export default OperatorBiography;