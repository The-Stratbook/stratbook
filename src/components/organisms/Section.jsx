import React from 'react';

const Section = ({ title, children }) => (
  <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
    <h2 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h2>
    {children}
  </section>
);

export default Section;