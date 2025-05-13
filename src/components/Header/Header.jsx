import React from 'react';
import { HeaderContainer, LinkLogo, NavList } from './Header.styled';
import { Link, NavLink } from 'react-router-dom';
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
      <Link to="/">
        <LinkLogo>STORE.UA</LinkLogo>
      </Link>
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
