import { styled } from 'styled-components';

export const ProductWraper = styled.ul`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  width: 162px;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const InfoWraper = styled.div`
  padding: 1px 5px;
`;
export const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;
