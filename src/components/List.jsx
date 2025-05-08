import React from 'react';

const List = ({ items, renderItem }) => (
  <ul className="space-y-4">
    {items.map((item, index) => (
      <li key={index}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default List;