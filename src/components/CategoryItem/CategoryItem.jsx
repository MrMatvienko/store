import React from 'react';

function CategoryItem({ product }) {
  return (
    <li>
      <p>{product.name.toUpperCase()}</p>
    </li>
  );
}

export default CategoryItem;
