import React from 'react';
import { LoaderContainer } from './Loader.styled';
import { Rings } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#050505"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};
