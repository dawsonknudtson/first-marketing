import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: var(--background);
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &.scrolled {
    background-color: var(--background-light);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: var(--text);
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--text);
  }
`;

const ContactButton = styled(Link)`
  background: var(--gradient-primary);
  color: var(--text);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Nav className={scrolled ? 'scrolled' : ''}>
      <NavContainer>
        <Logo to="/">First Marketing</Logo>
        <NavLinks>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <ContactButton to="/contact">Get Started</ContactButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 