import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Add Google Fonts import for Playfair Display
const PlayfairFont = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap');
`;

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
  font-size: 1.9rem;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.02em;
  opacity: 0.95;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    opacity: 1;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
`;

const NavLink = styled(Link)`
  color: var(--text-secondary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--text);
  }
`;

const DropdownContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: var(--background);
  min-width: 400px;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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

const AccentText = styled.span`
  color: var(--text);
  font-weight: 600;
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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
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
    <>
      <PlayfairFont />
      <Nav className={scrolled ? 'scrolled' : ''}>
        <NavContainer>
          <Logo to="/">1'st Marketing</Logo>
          <NavLinks>
            <NavItem>
              <NavLink as="span">Services</NavLink>
              <DropdownContent>
                <DropdownTitle>Our Services</DropdownTitle>
                <ServiceItem>
                  <ServiceTitle>Copywriting</ServiceTitle>
                  <ServiceDescription>
                    Compelling, conversion-focused copy that speaks to your audience and drives results. From website content to email sequences.
                  </ServiceDescription>
                </ServiceItem>
                <ServiceItem>
                  <ServiceTitle>Sales Funnels</ServiceTitle>
                  <ServiceDescription>
                    Custom Or Optimized sales funnels that guide prospects through their buyer's journey and maximize conversions.
                  </ServiceDescription>
                </ServiceItem>
                <ServiceItem>
                  <ServiceTitle>Strategy & Optimization</ServiceTitle>
                  <ServiceDescription>
                    Insights and continuous optimization to ensure your marketing efforts deliver maximum ROI for your dollar.
                  </ServiceDescription>
                </ServiceItem>
              </DropdownContent>
            </NavItem>
            <NavItem>
              <NavLink as="span">About</NavLink>
              <DropdownContent>
                <AboutContent>
                  <AboutTitle>Transform Your Business with Data-Driven Marketing</AboutTitle>
                  <AboutDescription>
                    We help ambitious businesses scale beyond <AccentText>$5K/month</AccentText> with proven copywriting and 
                    custom-built sales funnels that convert. Your success is our mission.
                  </AboutDescription>
                </AboutContent>
              </DropdownContent>
            </NavItem>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <ContactButton to="/contact">Get Started</ContactButton>
          </NavLinks>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar; 