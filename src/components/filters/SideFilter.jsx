import React from "react";
import { SIDES } from '../../utils/sideUtils';

const SideFilter = ({ selectedSide, onSideChange }) => {
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
        Both
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