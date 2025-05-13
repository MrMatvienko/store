import React from 'react';
import { Image, InfoWraper, Item, ProductWraper } from './ProductList.styled';
import { Link } from 'react-router-dom';

export const ProductList = ({ products }) => {
  return (
    <ProductWraper>
      {products && products.length > 0 ? (
        products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Item key={product.id}>
              <Image src={product.images} alt={product.title} />
              <InfoWraper>
                <p>{product.title}</p>
                <p>{product.price}$</p>
              </InfoWraper>
            </Item>
          </Link>
        ))
      ) : (
        <p>У цій категорії наразі немає товарів.</p>
      )}
    </ProductWraper>
  );
};
