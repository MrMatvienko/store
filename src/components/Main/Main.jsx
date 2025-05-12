import React from 'react';
import { ProductItem, Wrapper } from './Main.styled';
import { Loader } from 'components/Loader/Loader';
import { useOutletContext } from 'react-router-dom';

export const Main = () => {
  const { categories, isLoading } = useOutletContext();
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
