import React, { useState, useEffect } from 'react';
import { LinkIcon, User } from 'lucide-react';

const RelatedStrategies = ({ strategies }) => {
  const [relatedTips, setRelatedTips] = useState([]);
  
  useEffect(() => {
    if (!strategies || strategies.length === 0) return;
    
    const fetchRelatedTips = async () => {
      try {
        const tipPromises = strategies.map(id => 
          fetch(`/data/siege/tips/${id}.json`)
            .then(response => {
              if (!response.ok) throw new Error(`Failed to fetch tip ${id}`);
              return response.json();
            })
        );
        
        const tips = await Promise.all(tipPromises);
        setRelatedTips(tips);
      } catch (error) {
        console.error("Error fetching related strategies:", error);
      }
    };
    
    fetchRelatedTips();
  }, [strategies]);

  if (!strategies || strategies.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold flex items-center">
        <LinkIcon size={20} className="mr-2" />
        Related Strategies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {relatedTips.length > 0 ? (
          relatedTips.map(tip => (
            <a
              key={tip.id}
              href={`/siege/tip/${tip.id}`}
              className="flex items-center p-3 bg-base-100 shadow rounded hover:bg-base-200"
            >
              <User size={20} className="mr-2 text-primary" />
              {tip.title}
            </a>
          ))
        ) : (
          // Show IDs while loading
          strategies.map(relatedId => (
            <a
              key={relatedId}
              href={`/siege/tip/${relatedId}`}
              className="flex items-center p-3 bg-base-100 shadow rounded hover:bg-base-200"
            >
              <User size={20} className="mr-2 text-primary" />
              {`Tip #${relatedId}`}
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedStrategies;