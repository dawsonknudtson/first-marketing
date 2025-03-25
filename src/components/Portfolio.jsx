import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  margin-top: 80px; // Account for fixed navbar
  min-height: calc(100vh - 80px);
  background: var(--background);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0.05;
    transform: skewY(-6deg);
    transform-origin: top left;
  }
`;

const ComingSoonContent = styled.div`
  text-align: center;
  position: relative;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

function Portfolio() {
  return (
    <PortfolioContainer>
      <ComingSoonContent>
        <Title>Case Studies Coming Soon</Title>
        <Subtitle>
          We're currently preparing some amazing case studies to showcase our work.
          Check back soon!
        </Subtitle>
      </ComingSoonContent>
    </PortfolioContainer>
  );
}

export default Portfolio; 