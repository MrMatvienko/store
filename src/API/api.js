import axios from 'axios';

axios.defaults.baseURL = `https://api.escuelajs.co/api/v1`;

export const getAllProduct = async () => {
  const { data } = await axios('/products');
  return data;
};
export const getProductCategory = async () => {
  const { data } = await axios('/categories');
  return data;
};

export const getFilterCategory = async categoryId => {
  const { data } = await axios(`/products/?categoryId=${categoryId}`);
  return data;
};
