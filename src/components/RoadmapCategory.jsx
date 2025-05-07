import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for displaying a category of roadmap items
 * @param {string} title - The category title
 * @param {Array} items - Array of items in this category
 * @param {Object} routeMap - Optional mapping of item names to route paths
 */
const RoadmapCategory = ({ title, items, routeMap = {} }) => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-primary text-2xl">{title}</h3>
        
        <ul className="space-y-6 mt-4">
          {items.map((item, index) => {
            // Check if this item has a dedicated route
            const routePath = routeMap[item.name] || null;
            
            const statusBadgeClass = 
              item.status === 'completed' 
                ? 'badge-success' 
                : item.status === 'in-progress' 
                  ? 'badge-warning' 
                  : 'badge-outline';
                  
            const statusText = 
              item.status === 'completed' 
                ? 'Completed' 
                : item.status === 'in-progress' 
                  ? 'In Progress' 
                  : 'Planned';
            
            return (
              <li key={index} className="flex items-start">
                <div className={`badge ${statusBadgeClass} mr-2 mt-1 px-3 whitespace-nowrap`}>
                  {statusText}
                </div>
                <div>
                  {routePath ? (
                    <Link to={routePath} className="hover:text-primary">
                      <h4 className="font-bold">{item.name}</h4>
                    </Link>
                  ) : (
                    <h4 className="font-bold">{item.name}</h4>
                  )}
                  <p className="text-sm">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapCategory;