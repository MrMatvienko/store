import React from 'react';
import { ProductItem, Wrapper } from './MainPage.styled';
import { Loader } from 'components/Loader/Loader';

export const MainPage = ({ categories, isLoading }) => {
  return (
    <Wrapper>
      {isLoading && <Loader />}
      {categories &&
        categories.map(product => {
          return (
            <ProductItem key={product.id}>
              <img
                src={product.image}
                alt={product.name}
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
