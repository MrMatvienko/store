import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ProductItem = styled.li`
  max-width: 240px;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LinkText = styled.p`
  color: black;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
`;
