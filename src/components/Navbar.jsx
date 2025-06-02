import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

// Add Google Fonts import for Playfair Display
const PlayfairFont = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap');
`;

const Nav = styled.nav`
  background-color: transparent;
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  
  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 0.5rem 1rem;
    max-width: 600px;
  }
`;

const Logo = styled(Link)`
  color: var(--text);
  text-decoration: none;
  font-size: 1.8rem;
  font-family: Arial, sans-serif;
  font-weight: bold;
  letter-spacing: 0.02em;
  opacity: 0.95;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-1px);
    opacity: 1;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    gap: 0.3rem;
  }
`;

const LogoImage = styled.img`
  height: 2rem;
  width: auto;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    height: 1.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
    
    &.active {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 100px;
      left: 2rem;
      right: 2rem;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(15px);
      padding: 1.5rem;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      gap: 1rem;
      z-index: 1000;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  cursor: pointer;
  padding: 0.75rem;
  z-index: 1002;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    display: block;
    width: 1.5rem;
    height: 2px;
    background: var(--text);
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
    }
  }
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--text);
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }
`;

const DropdownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  min-width: 400px;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1001;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  ${NavItem}:hover & {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    min-width: 100%;
    margin-top: 0.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    display: none;
    
    ${NavItem}:hover & {
      display: block;
      transform: none;
    }
  }
`;

const DropdownTitle = styled.h3`
  color: var(--text);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background: var(--background-light);
    transform: translateX(5px);
  }
`;

const ServiceTitle = styled.h4`
  color: var(--text);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
`;

const AboutContent = styled.div`
  text-align: center;
  padding: 0 1rem;
`;

const AboutTitle = styled.h3`
  color: var(--text);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const AboutDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactButton = styled(Link)`
  background: var(--gradient-primary);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(77, 166, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <PlayfairFont />
      <Nav className={scrolled ? 'scrolled' : ''}>
        <NavContainer>
          <HamburgerButton onClick={toggleMenu} isOpen={isMenuOpen}>
            <span />
            <span />
            <span />
          </HamburgerButton>
          <NavContent>
            <Logo to="/">
              <LogoImage src="/kernoco.jpeg" alt="Kernoco Logo" />
              Kernoco
            </Logo>
            <NavLinks className={isMenuOpen ? 'active' : ''}>
              <NavItem>
                <NavLink as="span">About</NavLink>
                <DropdownContent>
                  <AboutContent>
                    <AboutTitle>Transform Your Business with Smart Automation</AboutTitle>
                    <AboutDescription>
                      We help businesses scale through AI workflow automation, smart receptionist systems, and intelligent process optimization.
                    </AboutDescription>
                  </AboutContent>
                </DropdownContent>
              </NavItem>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <ContactButton to="/contact">Get Started</ContactButton>
            </NavLinks>
          </NavContent>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar; 