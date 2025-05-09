import { CategoryList } from 'components/CategoryList/CategoryList';
import Header from 'components/Header/Header';
import { Container } from 'components/global.styled';
import React from 'react';

export const Layout = ({ categories, error, isLoading, children }) => {
  return (
    <>
      <Header />
      <Container>
        <CategoryList
          categories={categories}
          error={error}
          isLoading={isLoading}
        />
        {children}
      </Container>
    </>
  );
};
