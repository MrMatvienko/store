import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Favorites = lazy(() => import('../pages/Favorites'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const CategoryPage = lazy(() => import('../pages/CategoryPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
};
