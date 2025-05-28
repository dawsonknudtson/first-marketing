import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Our Portfolio - First Marketing Automation Case Studies</title>
        <meta name="description" content="Explore our automation case studies and success stories. See how First Marketing has helped businesses streamline operations and scale through intelligent automation systems." />
        <meta name="keywords" content="automation portfolio, case studies, success stories, AI automation results" />
        <link rel="canonical" href="https://1st-marketing.com/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "First Marketing Portfolio",
            "description": "Case studies and success stories from our automation projects.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": []
            }
          })}
        </script>
      </Helmet>
      <ComingSoonContent as="section" aria-labelledby="portfolio-title">
        <Title id="portfolio-title">Case Studies Coming Soon</Title>
        <Subtitle>
          We're currently preparing some amazing case studies to showcase our work.
          Check back soon!
        </Subtitle>
      </ComingSoonContent>
    </PortfolioContainer>
  );
}

export default Portfolio; 