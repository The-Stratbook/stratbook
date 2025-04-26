import React from "react";

const TagFilter = ({ selectedTag, onSelectTag, allTags }) => {
  return (
    <div className="form-control">
      <h2 className="text-lg font-bold mb-2">Filter by Tags</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectTag("")}
          className={`badge ${!selectedTag ? "badge-primary" : "badge-outline"}`}
        >
          All Tags
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            className={`badge ${selectedTag === tag ? "badge-primary" : "badge-outline"}`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
