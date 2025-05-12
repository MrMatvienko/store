import React from 'react';

export const ProductList = () => {
  return (
    <>
      {isLoading && <Loader />}
      {categories &&
        categories.map(product => {
          return (
            <ProductItem key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                width={140}
                height={140}
              />
              <p>{product.name}</p>
            </ProductItem>
          );
        })}
    </>
  );
};
