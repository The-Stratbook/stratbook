import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const TipCard = ({ tip }) => {
  // Generate a descriptive alt text that combines title, map and operator info when available
  const generateAltText = () => {
    let altText = `Strategy: ${tip.title}`;
    if (tip.map) altText += ` on ${tip.map}`;
    if (tip.operator) altText += ` using ${tip.operator}`;
    if (tip.side) altText += ` (${tip.side} side)`;
    return altText;
  };

  // Display only the first 2 tags
  const displayedTags = Array.isArray(tip.tags) ? tip.tags.slice(0, 2) : [];
  const hasMoreTags = Array.isArray(tip.tags) && tip.tags.length > 2;

  return (
    <div
      className="card bg-base-100 hover:shadow-lg transition-shadow"
      style={{ height: "100%" }} // Ensure consistent card height
    >
      <Link to={`/siege/tip/${tip.id}`} className="block h-full">
        <div className="card-body flex flex-col justify-between">
          {/* Tip Title - Limited to 3 lines with ellipsis */}
          <h3 
            className="card-title text-xl text-secondary"
            style={{
              height: "4.5rem", // Approximately 3 lines of text
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical"
            }}
          >
            {tip.title.length > 70 ? `${tip.title.substring(0, 70)}...` : tip.title}
          </h3>

          {/* Tip Image - Fixed height */}
          <figure className="mb-4" style={{ height: "12rem" }}>
            <img
              src={tip.imageUrl || "/images/tips/default.jpg"}
              alt={generateAltText()}
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
              onError={(e) => (e.target.src = "/images/tips/default.jpg")}
            />
          </figure>

          {/* Tags - Show only 2 tags, with indicator if more exist */}
          <div className="flex space-x-2 items-center mb-2" style={{ height: "1.75rem" }}>
            <span className="text-base-content">
              <Tag size={16} />
            </span>
            {displayedTags.map((tag) => (
              <div
                key={tag}
                className="badge badge-primary badge-outline truncate"
                style={{
                  maxWidth: "100px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </div>
            ))}
            {hasMoreTags && (
              <div className="badge badge-primary badge-outline">
                +{tip.tags.length - 2}
              </div>
            )}
          </div>

          {/* Truncate long descriptive text - Fixed height */}
          <div
            className="text-base-content"
            style={{
              height: "4.5rem", // Fixed height for description
              overflow: "hidden",
            }}
          >
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <span
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                    {...props}
                  />
                ),
              }}
            >
              {tip.description}
            </ReactMarkdown>
          </div>
          <div className="card-actions mt-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/siege/tip/${tip.id}`;
              }}
              className="btn btn-primary btn-sm"
            >
              Check out the strat
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TipCard;
