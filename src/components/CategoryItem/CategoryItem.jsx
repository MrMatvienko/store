import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCategory } from './CategoryItem.styled';

function CategoryItem({ product }) {
  return (
    <li>
      <Link to={`/category/${product.id}`}>
        <ItemCategory>{product.name.toUpperCase()}</ItemCategory>
      </Link>
    </li>
  );
}

export default CategoryItem;
