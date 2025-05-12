import React from 'react';
import { HeaderContainer, NavList } from './Header.styled';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <span>STORE.UA</span>
      <nav>
        <NavList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};
