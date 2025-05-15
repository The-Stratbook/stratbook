import React from 'react';
import { Link } from 'react-router-dom';
import { createTipsFilterUrl } from '../../../../utils/linkUtils';

/**
 * A component to display operator loadout information
 * Shows primary weapons, secondary weapons, and gadgets
 * 
 * @param {Object} props
 * @param {Object} props.loadout - The operator's loadout data
 */
const OperatorLoadout = ({ loadout }) => {
  if (!loadout) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Loadout</h2>
      
      {loadout.primary && loadout.primary.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2">Primary Weapons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {loadout.primary.map((weapon, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="font-medium">{weapon.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{weapon.type}</p>
              </div>
            ))}
          </div>
        </>
      )}
      
      {loadout.secondary && loadout.secondary.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2">Secondary Weapons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {loadout.secondary.map((weapon, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                <p className="font-medium">{weapon.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{weapon.type}</p>
              </div>
            ))}
          </div>
        </>
      )}
      
      {loadout.gadgets && loadout.gadgets.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2">Gadgets</h3>
          <div className="flex flex-wrap gap-2">
            {loadout.gadgets.map((gadget, index) => (
              <Link 
                key={index} 
                to={createTipsFilterUrl({ tag: gadget })}
                className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
              >
                {gadget}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OperatorLoadout;