import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  padding: 20px 100px;
  box-shadow: 0px 5px 20px rgba(100, 0, 0, 0.1);
`;

export const LinkLogo = styled.span`
  color: white;
  text-decoration: none;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
