import { CategoryList } from 'components/CategoryList/CategoryList';
import React from 'react';
import { WraperBar } from './SideBar.styled';

export const SideBar = ({ categories, isLoading, error }) => {
  return (
    <WraperBar>
      <CategoryList
        categories={categories}
        isLoading={isLoading}
        error={error}
      />
    </WraperBar>
  );
};
