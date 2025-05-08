import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import ImageWithFallback from '../../components/atoms/ImageWithFallback'

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
    <div className="card bg-base-100 hover:shadow-lg transition-shadow h-full">
      <Link to={`/siege/tip/${tip.id}`} className="block h-full">
        <div className="card-body flex flex-col justify-between h-full p-4 sm:p-6">
          {/* Tip Title - Limited to 3 lines with ellipsis */}
          <h3 
            className="card-title text-lg sm:text-xl text-secondary mb-3"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical"
            }}
          >
            {tip.title}
          </h3>

          {/* Tip Image - Responsive height with standardized ImageWithFallback */}
          <figure className="mb-4 aspect-[4/3] w-full">
            <ImageWithFallback
              src={tip.imageUrl || "/images/tips/default.jpg"}
              fallbackSrc="/images/tips/default.jpg"
              alt={generateAltText()}
              className="w-full h-full object-cover rounded-xl"
            />
          </figure>

          {/* Tags - Show only 2 tags, with indicator if more exist */}
          <div className="flex flex-wrap gap-2 items-center mb-3">
            <span className="text-base-content">
              <Tag size={16} />
            </span>
            {displayedTags.map((tag) => (
              <div
                key={tag}
                className="badge badge-primary badge-outline truncate max-w-[100px]"
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

          {/* Truncate long descriptive text - Responsive height */}
          <div className="text-base-content mb-4">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <span
                    className="line-clamp-3"
                    {...props}
                  />
                ),
              }}
            >
              {tip.description}
            </ReactMarkdown>
          </div>
          <div className="card-actions mt-auto">
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
