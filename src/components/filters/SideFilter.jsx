import React from "react";
import { SIDES } from '../../utils/sideUtils';

/**
 * Side filter component that allows selection between Attack, Defend, Universal (optional), and All
 * 
 * @param {Object} props
 * @param {string} props.selectedSide - Currently selected side
 * @param {Function} props.onSideChange - Callback when side selection changes
 * @param {boolean} [props.showUniversal=false] - Whether to show the Universal filter option
 * @returns {React.ReactElement} Side filter buttons
 */
const SideFilter = ({ selectedSide, onSideChange, showUniversal = false }) => {
  // When showing Universal button (4 buttons total)
  if (showUniversal) {
    return (
      <div className="btn-group w-full">
        <button
          className={`btn w-1/4 ${selectedSide === SIDES.ATTACK ? "btn-attack" : "btn-attack-outline"}`}
          onClick={() => onSideChange(SIDES.ATTACK)}
        >
          Attack
        </button>
        <button
          className={`btn w-1/4 ${selectedSide === SIDES.UNIVERSAL ? "btn-universal" : "btn-universal-outline"}`}
          onClick={() => onSideChange(SIDES.UNIVERSAL)}
        >
          Universal
        </button>
        <button
          className={`btn w-1/4 ${selectedSide === SIDES.DEFEND ? "btn-defend" : "btn-defend-outline"}`}
          onClick={() => onSideChange(SIDES.DEFEND)}
        >
          Defend
        </button>
        <button
          className={`btn w-1/4 ${selectedSide === SIDES.BOTH ? "btn-primary" : "btn-outline"}`}
          onClick={() => onSideChange(SIDES.BOTH)}
        >
          All
        </button>
      </div>
    );
  }
  
  // Default view without Universal button (3 buttons total)
  return (
    <div className="btn-group w-full">
      <button
        className={`btn w-1/3 ${selectedSide === SIDES.ATTACK ? "btn-attack" : "btn-attack-outline"}`}
        onClick={() => onSideChange(SIDES.ATTACK)}
      >
        Attack
      </button>
      <button
        className={`btn w-1/3 ${selectedSide === SIDES.BOTH ? "btn-primary" : "btn-outline"}`}
        onClick={() => onSideChange(SIDES.BOTH)}
      >
        All
      </button>
      <button
        className={`btn w-1/3 ${selectedSide === SIDES.DEFEND ? "btn-defend" : "btn-defend-outline"}`}
        onClick={() => onSideChange(SIDES.DEFEND)}
      >
        Defend
      </button>
    </div>
  );
};

export default SideFilter;