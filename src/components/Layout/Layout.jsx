import { getProductCategory } from 'API/api';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Container } from 'components/global.styled';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
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
    <Wraper>
      <Header />
      <Container>
        <SideBar isLoading={isLoading} error={error} categories={categories} />

        <Outlet context={{ categories, isLoading, error }} />
      </Container>
      <Footer />
    </Wraper>
  );
};
