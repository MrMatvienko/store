import React, { Component } from 'react';
import Header from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { Container } from './global.styled';
import { getProductCategory } from 'API/api';
import { CategoryList } from './CategoryList/CategoryList';

export default class App extends Component {
  state = {
    isLoading: false,
    error: '',
    products: null,
  };

  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory = async () => {
    try {
      const data = await getProductCategory();
      const firstFive = data.slice(0, 5);
      console.log('FISRST FIVE:', firstFive);
      this.setState({ products: firstFive, error: '' });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.response.data });
    }
  };
  render() {
    const { products, error } = this.state;
    return (
      <div>
        <Header />
        <Container>
          <CategoryList products={products} error={error} />
          <MainPage products={products} />
        </Container>
      </div>
    );
  }
}
