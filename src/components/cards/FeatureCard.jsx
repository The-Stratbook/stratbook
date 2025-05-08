import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable feature card component for linking to feature pages
 * @param {string} title - The title of the feature
 * @param {string} description - A short description of the feature
 * @param {string} to - The route path to navigate to
 * @param {string} buttonText - Text for the button (default: "Learn More")
 */
const FeatureCard = ({ title, description, to, buttonText = "Learn More" }) => {
  return (
    <Link to={to} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
      <div className="card-body items-center text-center h-full p-4 sm:p-6">
        <h3 className="card-title text-lg sm:text-xl mb-2">{title}</h3>
        <p className="text-sm text-base-content line-clamp-4">{description}</p>
        <div className="card-actions mt-auto pt-3">
          <span className="btn btn-sm btn-primary">{buttonText}</span>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;