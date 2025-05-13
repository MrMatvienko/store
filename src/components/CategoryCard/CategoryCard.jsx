import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { LinkText, ProductItem, StyledLink } from './CategoryCard.styled';

export const CategoryCard = () => {
  const { categories, isLoading } = useOutletContext();
  return (
    <>
      {isLoading && <Loader />}
      {categories &&
        categories.map(product => {
          return (
            <StyledLink key={product.id} to={`/category/${product.id}`}>
              <ProductItem key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  width={140}
                  height={140}
                />
                <LinkText>{product.name.toUpperCase()}</LinkText>
              </ProductItem>
            </StyledLink>
          );
        })}
    </>
  );
};
