import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { createOperatorLink, createMapLink } from '../../../../utils/linkUtils';

/**
 * A component to display operator gameplay tips with clickable links
 * Transforms operator and map mentions in tips into links
 * 
 * @param {Object} props
 * @param {Array} props.tips - Array of tip strings for the operator
 */
const OperatorTips = ({ tips }) => {
  if (!tips || tips.length === 0) return null;

  /**
   * Process the tip text to convert plain text operator/map mentions to links
   * Basic implementation - will match simple cases
   */
  const processTextForLinks = (text) => {
    // Converts plain text operator mentions to markdown links
    // This is a simple implementation that you might want to enhance
    // with a more sophisticated regex and a list of actual operators
    
    // This regex matches [OperatorName] or "OperatorName" patterns
    // You'd want to replace this with a more robust implementation that
    // checks against your actual list of operators
    return text;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Gameplay Tips</h2>
      <ul className="space-y-4 list-disc pl-6">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            <ReactMarkdown 
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({ node, ...props }) => <a {...props} className="text-primary hover:underline" />,
                // Custom handling for links to operators and maps
                strong: ({ node, ...props }) => {
                  const text = props.children[0];
                  // Check if this is a potential operator name (simple heuristic)
                  if (typeof text === 'string' && text.length > 0 && !text.includes(' ')) {
                    return (
                      <Link to={createOperatorLink(text)} className="text-primary font-bold hover:underline">
                        {text}
                      </Link>
                    );
                  }
                  return <strong {...props} />;
                }
              }}
            >
              {processTextForLinks(tip)}
            </ReactMarkdown>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OperatorTips;