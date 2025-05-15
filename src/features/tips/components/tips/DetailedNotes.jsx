import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const DetailedNotes = ({ detailedNotes }) => {
  if (!detailedNotes) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Detailed Tip Notes</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Tip Insights</h3>
          <ul className="list-disc list-inside">
            {detailedNotes.setupTime && (
              <li><strong>Setup Time:</strong> {detailedNotes.setupTime}</li>
            )}
            {detailedNotes.teamCoordination && (
              <li><strong>Team Coordination:</strong> {detailedNotes.teamCoordination}</li>
            )}
            {detailedNotes.riskLevel && (
              <li><strong>Risk Level:</strong> {detailedNotes.riskLevel}</li>
            )}
          </ul>
        </div>
        {detailedNotes.counterStrategies?.length > 0 && (
          <div>
            <h3 className="font-bold">Counter Strategies</h3>
            <ul className="list-disc list-inside">
              {detailedNotes.counterStrategies.map((counter) => (
                <li key={counter} className="flex items-start space-x-2">
                  <span>•</span>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{ a: ({ node, ...props }) => <a {...props} className="text-primary" /> }}>{counter}</ReactMarkdown>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedNotes;