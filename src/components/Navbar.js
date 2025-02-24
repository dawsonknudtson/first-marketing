import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME_COLOR } from './Home';

const Nav = styled.nav`
  background-color: #ededed;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #333;  // Dark gray, almost black
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;  // Bolder
  font-family: 'Montserrat', sans-serif; 
  &:hover {
    color: #000;  
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">1'st Marketing</Logo>        
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 