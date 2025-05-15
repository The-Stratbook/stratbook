import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Trophy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { createOperatorLink, createMapLink } from '../../../../utils/linkUtils';

const TipMetadata = ({ tip }) => {
  const formatLastTested = (dateString) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
      }).format(date);
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

  return (
    <div>
      <div className="mt-4 space-y-2">
        {tip.map && (
          <div className="flex items-center space-x-2">
            <MapPin size={20} />
            {tip.map === 'Any' ? (
              <span>Any Map</span>
            ) : (
              <Link to={createMapLink(tip.map)} className="text-primary">
                {tip.map}
              </Link>
            )}
          </div>
        )}
        {tip.difficulty && (
          <div className="flex items-center space-x-2">
            <Trophy size={20} />
            <span>Difficulty: {tip.difficulty}</span>
          </div>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Metadata</h3>
        <div className="space-y-2">
          {tip.operator && (
            <p>
              <strong>Operator:</strong> 
              <Link to={createOperatorLink(tip.operator)} className="text-primary ml-1">
                {tip.operator}
              </Link>
            </p>
          )}
          {tip.side && <p><strong>Side:</strong> {tip.side}</p>}
          {tip.bombSite && (
            <p>
              <strong>Bomb Site:</strong> 
              <ReactMarkdown 
                rehypePlugins={[rehypeRaw]} 
                components={{ 
                  a: ({ node, ...props }) => <a {...props} className="text-primary" /> 
                }}
              >
                {tip.bombSite}
              </ReactMarkdown>
            </p>
          )}
          {tip.lastTested && (
            <p className="text-success font-medium">
              <span className="inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Still working as of {formatLastTested(tip.lastTested)}
              </span>
            </p>
          )}
        </div>
      </div>

      {tip.tags && tip.tags.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tip.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/siege/tips?tag=${encodeURIComponent(tag)}`} 
                className="badge badge-primary text-black hover:bg-primary-focus transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TipMetadata;