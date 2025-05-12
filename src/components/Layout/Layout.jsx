import { getProductCategory } from 'API/api';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Container } from 'components/global.styled';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getAllCategory = async () => {
      setIsLoading(true);
      try {
        const data = await getProductCategory();
        const firstFive = data.slice(0, 5);
        setCategories(firstFive);
      } catch (error) {
        setError(error.response.data || error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCategory();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <SideBar isLoading={isLoading} error={error} categories={categories} />
        <main>
          <Outlet context={{ categories, isLoading, error }} />
        </main>
      </Container>
    </>
  );
};
