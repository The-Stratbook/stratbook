import React from "react";

const SkillLevelFilter = ({ selectedSkill, onSelectSkill, skillLevels }) => {
  return (
    <div className="form-control">
      <select
        value={selectedSkill}
        onChange={(e) => onSelectSkill(e.target.value)}
        className="select select-bordered select-primary w-full"
      >
        <option value="">All Skill Levels</option>
        {skillLevels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SkillLevelFilter;
