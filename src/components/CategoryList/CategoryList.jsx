import React from 'react';
import { CategoryContainer } from './CategoryList.styled';
import CategoryItem from 'components/CategoryItem/CategoryItem';

export const CategoryList = ({ products, error }) => {
  return (
    <CategoryContainer>
      {error && <h3>ERORR</h3>}
      {products &&
        products.map(product => {
          return <CategoryItem key={product.id} product={product} />;
        })}
    </CategoryContainer>
  );
};
