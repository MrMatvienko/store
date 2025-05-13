import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Image,
  LinkText,
  ProductItem,
  StyledLink,
} from './CategoryCard.styled';

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
                <Image src={product.image} alt={product.name} />
                <LinkText>{product.name.toUpperCase()}</LinkText>
              </ProductItem>
            </StyledLink>
          );
        })}
    </>
  );
};
