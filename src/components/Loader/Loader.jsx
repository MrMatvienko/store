import React from 'react';
import { LoaderContainer } from './Loader.styled';
import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </LoaderContainer>
  );
};
