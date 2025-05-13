import { styled } from 'styled-components';

export const ProductWraper = styled.ul`
  max-width: 910px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  width: 160px;
  height: 180px;
  border: 1px solid black;
`;
export const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;
