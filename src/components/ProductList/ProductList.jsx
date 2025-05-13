import React from 'react';
import { Image, Item, ProductWraper } from './ProductList.styled';

export const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>У цій категорії наразі немає товарів.</p>;
  }

  return (
    <ProductWraper>
      {products &&
        products.map(product => {
          return (
            <Item key={product.id}>
              <Image src={product.images} alt={product.title} />
              <p>{product.title}</p>
            </Item>
          );
        })}
    </ProductWraper>
  );
};
