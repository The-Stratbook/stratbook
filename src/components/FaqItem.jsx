import React from 'react';

/**
 * Reusable FAQ accordion item component
 * @param {string} question - The question text
 * @param {string|JSX.Element} answer - The answer text or JSX element
 * @param {string} name - Name attribute for the radio input group
 * @param {boolean} defaultChecked - Whether this item should be expanded by default
 */
const FaqItem = ({ question, answer, name, defaultChecked = false }) => {
  return (
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name={name} defaultChecked={defaultChecked} /> 
      <div className="collapse-title text-xl font-medium">
        {question}
      </div>
      <div className="collapse-content"> 
        {typeof answer === 'string' ? (
          <p className="text-base-content">{answer}</p>
        ) : (
          answer
        )}
      </div>
    </div>
  );
};

export default FaqItem;