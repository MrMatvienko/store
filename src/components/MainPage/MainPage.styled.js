import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  width: 100%;
  min-height: 230px;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProductItem = styled.li`
  max-width: 200px;
  width: 100%;
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
