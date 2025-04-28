import React, { useState } from "react";
import TipCard from "../cards/TipCard";

const TipsList = ({ tips }) => {
  const [visibleCount, setVisibleCount] = useState(8); // Number of tips to show initially

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Load 8 more tips
  };

  return (
      <div>
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4">Tips & Tricks</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tips.slice(0, visibleCount).map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
        {visibleCount < tips.length && (
          <div className="flex justify-center mt-4">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
        {tips.length === 0 && (
          <div className="alert alert-warning shadow-lg mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>No tips found. Try adjusting your filters.</span>
            </div>
          </div>
        )}
      </div>
  );
};

export default TipsList;
