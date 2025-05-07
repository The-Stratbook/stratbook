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
    <Link to={to} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="card-body items-center text-center">
        <h3 className="card-title text-xl">{title}</h3>
        <p className="text-sm text-base-content">{description}</p>
        <div className="card-actions mt-2">
          <span className="btn btn-sm btn-primary">{buttonText}</span>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;