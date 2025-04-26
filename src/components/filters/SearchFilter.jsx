import React from "react";
import { Search } from "lucide-react";

const SearchFilter = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="form-control">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search tips, operators, tags..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="input input-bordered input-primary flex-grow"
        />
        <button className="btn btn-primary">
          <Search />
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
