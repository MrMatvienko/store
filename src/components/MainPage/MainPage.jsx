import React from 'react';
import { ProductItem, Wrapper } from './MainPage.styled';
import { Loader } from 'components/Loader/Loader';

export const MainPage = ({ products, isLoading }) => {
  return (
    <Wrapper>
      {isLoading && <Loader />}
      {products &&
        products.map(product => {
          return (
            <ProductItem key={product.id}>
              <img
                src={product.image}
                alt={product.slug}
                width={140}
                height={140}
              />
              <p>{product.name}</p>
            </ProductItem>
          );
        })}
    </Wrapper>
  );
};
