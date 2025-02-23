import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #ededed;
  padding: 1rem;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #ddd;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">1'st Marketing</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/schedule">Schedule Meeting</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 