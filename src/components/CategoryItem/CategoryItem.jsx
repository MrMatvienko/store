import React from 'react';

function CategoryItem({ product }) {
  return (
    <li>
      <p>{product.name}</p>
    </li>
  );
}

export default CategoryItem;
