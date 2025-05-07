import React from 'react';
import { SIDES } from '../utils/sideUtils';

/**
 * Component containing the roulette control buttons
 * @param {Function} onSelectOperator - Function to call when operator selection is requested
 * @param {boolean} loading - Whether the selection is currently loading
 * @param {boolean} attackersAvailable - Whether attacker operators are available
 * @param {boolean} defendersAvailable - Whether defender operators are available
 */
const RouletteControls = ({ onSelectOperator, loading, attackersAvailable, defendersAvailable }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
      <button 
        className="btn btn-lg btn-info"
        onClick={() => onSelectOperator(SIDES.ATTACK)}
        disabled={loading || !attackersAvailable}
        aria-label="Select random attacker operator"
      >
        Random Attacker
      </button>
                
      <button 
        className="btn btn-lg btn-warning"
        onClick={() => onSelectOperator(SIDES.DEFEND)}
        disabled={loading || !defendersAvailable}
        aria-label="Select random defender operator"
      >
        Random Defender
      </button>

      <button 
        className="btn btn-lg btn-neutral"
        onClick={() => onSelectOperator('random')}
        disabled={loading || (!attackersAvailable && !defendersAvailable)}
        aria-label="Select random operator from any side"
      >
        Any Operator
      </button>
    </div>
  );
};

export default RouletteControls;