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
