import React, { useState } from 'react';
import Header from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { Container } from './global.styled';
import { getProductCategory } from 'API/api';
import { CategoryList } from './CategoryList/CategoryList';
import { useEffect } from 'react';

export const App = () => {
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
    <div>
      <Header />
      <Container>
        <CategoryList
          categories={categories}
          error={error}
          isLoading={isLoading}
        />
        <MainPage categories={categories} isLoading={isLoading} />
      </Container>
    </div>
  );
};

// export default class App extends Component {
//   state = {
//     isLoading: false,
//     error: '',
//     products: null,
//   };

//   componentDidMount() {
//     this.getAllCategory();
//   }

//   getAllCategory = async () => {
//     try {
//       const data = await getProductCategory();
//       console.log(data);
//       const firstFive = data.slice(0, 5);
//       console.log('FISRST FIVE:', firstFive);
//       this.setState({ products: firstFive, error: '' });
//     } catch (error) {
//       console.log(error);
//       this.setState({ error: error.response.data });
//     }
//   };
//   render() {
//     const { products, error } = this.state;
//     return (
//       <div>
//         <Header />
//         <Container>
//           <CategoryList products={products} error={error} />
//           <MainPage products={products} />
//         </Container>
//       </div>
//     );
//   }
// }
