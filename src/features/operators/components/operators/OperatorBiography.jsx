import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { createOperatorLink, createMapLink } from '../../../../utils/linkUtils';

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
 * A component to display operator biography information with enhanced internal links
 * 
 * @param {Object} props
 * @param {Object} props.biography - The operator's biography data
 */
const OperatorBiography = ({ biography }) => {
  if (!biography) return null;

  // Components for ReactMarkdown to render links with primary color
  const markdownComponents = {
    a: ({ node, ...props }) => (
      <a {...props} className="text-primary hover:underline" />
    )
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Biography</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {biography.realName && (
          <div>
            <p className="text-gray-600 dark:text-gray-400">Real Name</p>
            <p className="font-medium">{biography.realName}</p>
          </div>
        )}
        
        {biography.birthplace && (
          <div>
            <p className="text-gray-600 dark:text-gray-400">Birthplace</p>
            <p className="font-medium">{biography.birthplace}</p>
          </div>
        )}
        
        {biography.height && (
          <div>
            <p className="text-gray-600 dark:text-gray-400">Height</p>
            <p className="font-medium">{biography.height}</p>
          </div>
        )}
        
        {biography.weight && (
          <div>
            <p className="text-gray-600 dark:text-gray-400">Weight</p>
            <p className="font-medium">{biography.weight}</p>
          </div>
        )}
      </div>
      
      {biography.organization && (
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">Organization</p>
          <p className="font-medium">{biography.organization}</p>
        </div>
      )}
      
      {biography.description && (
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400 mb-1">Background</p>
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {biography.description}
          </ReactMarkdown>
        </div>
      )}
      
      {biography.quote && (
        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-1">Quote</p>
          <blockquote className="italic border-l-4 border-primary pl-4 py-2">
            "{biography.quote}"
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default OperatorBiography;