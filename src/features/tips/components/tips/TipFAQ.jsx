import React from 'react';
import { HelpCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const TipFAQ = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold flex items-center mb-4">
        <HelpCircle size={24} className="mr-2" />
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="collapse collapse-plus bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              <ReactMarkdown components={{
                p: ({ node, ...props }) => <span {...props} />
              }}>
                {faq.question}
              </ReactMarkdown>
            </div>
            <div className="collapse-content">
              <ReactMarkdown>{faq.answer}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipFAQ;