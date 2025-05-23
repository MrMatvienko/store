import { getSingleProduct } from 'API/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const data = await getSingleProduct(id);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Завантаження...</p>
      ) : product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {product.images && product.images.length > 0 && (
            <img src={product.images[0]} alt={product.title} width={200} />
          )}
        </div>
      ) : (
        <p>Продукт не знайдено</p>
      )}
    </div>
  );
}
