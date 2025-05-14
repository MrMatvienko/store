import React, { useEffect, useState } from 'react';
import { getFilterCategory } from 'API/api';
import { Loader } from 'components/Loader/Loader';
import { ProductList } from 'components/ProductList/ProductList';
import { useParams } from 'react-router-dom';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoryItem = async () => {
      setIsLoading(true);
      try {
        const data = await getFilterCategory(categoryId);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCategoryItem();
  }, [categoryId]);
  return (
    <>
      {isLoading && <Loader />}
      <ProductList products={products} isLoading={isLoading} />
    </>
  );
}
