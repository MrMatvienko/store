import React, { Component } from 'react';
import Header from './Header/Header';

import MainPage from './MainPage/MainPage';
import { Container } from './global.styled';
import CategoryList from './CategoryList/CategoryList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <CategoryList />
          <MainPage />
        </Container>
      </div>
    );
  }
}
