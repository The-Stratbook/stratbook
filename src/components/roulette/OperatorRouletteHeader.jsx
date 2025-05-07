import React from 'react';

/**
 * Component for displaying the introductory text on the Operator Roulette page
 * @param {string} className - Additional CSS classes
 */
const OperatorRouletteHeader = ({ className = "" }) => {
  return (
    <div className={className}>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
        We created this Operator Roulette because Rainbow Six: Siege removed the random operator selection button from the "standard" playlist. 
        Now you can still enjoy the excitement of playing with random operators and discover new ways to play the game!
      </p>
      
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
        Can't decide which operator to play? Let us pick one for you! Select your preferences and click the button to get a random operator.
      </p>
    </div>
  );
};

export default OperatorRouletteHeader;