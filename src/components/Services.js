import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Services() {
  return (
    <ServicesContainer>
      <h1>Our Services</h1>
      <ServiceGrid>
        <ServiceCard>
          <h2>Copywriting</h2>
          <p>Compelling copy that converts visitors into customers. We craft engaging content that resonates with your target audience.</p>
        </ServiceCard>
        <ServiceCard>
          <h2>Sales Funnel Building</h2>
          <p>Custom-designed sales funnels that guide prospects through their buyer's journey and maximize conversions.</p>
        </ServiceCard>
      </ServiceGrid>
    </ServicesContainer>
  );
}

export default Services; 