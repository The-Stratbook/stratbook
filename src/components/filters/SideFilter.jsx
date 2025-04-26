
import React from "react";

const SideFilter = ({ selectedSide, onSideChange }) => {
  return (
    <div className="btn-group w-full">
      <button
        className={`btn w-1/3 ${selectedSide === "Attack" ? "btn-attack" : "btn-attack-outline"}`}
        onClick={() => onSideChange("Attack")}
      >
        Attack
      </button>
      <button
        className={`btn w-1/3 ${selectedSide === "" ? "btn-primary" : "btn-outline"}`}
        onClick={() => onSideChange("")}
      >
        Both
      </button>
      <button
        className={`btn w-1/3 ${selectedSide === "Defend" ? "btn-defend" : "btn-defend-outline"}`}
        onClick={() => onSideChange("Defend")}
      >
        Defend
      </button>
    </div>
  );
};

export default SideFilter;