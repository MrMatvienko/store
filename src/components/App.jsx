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

// import Header from './Header/Header';
// import { MainPage } from './MainPage/MainPage';
// import { Container } from './global.styled';
// import { getAllProduct, getProductCategory } from 'API/api';
// import { CategoryList } from './CategoryList/CategoryList';
// import { useEffect } from 'react';
// import { Layout } from './Layout/Layout';
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

//////////////////////
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);
// const [categories, setCategories] = useState(null);
// const [product, setProduct] = useState(null)

// useEffect(() => {
//   const getAllCategory = async () => {
//     setIsLoading(true);
//     try {
//       const data = await getProductCategory();
//       const firstFive = data.slice(0, 5);
//       setCategories(firstFive);
//     } catch (error) {
//       setError(error.response.data || error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   getAllCategory();
// }, []);

// useEffect(() => {
//   const getProduct = async () => {
//     setIsLoading(true);
//     try {
//       const dataProduct = await getAllProduct();
//       console.log(dataProduct);
//     } catch (error) {
//       setError(error.response.data || error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   getProduct();
// }, []);
