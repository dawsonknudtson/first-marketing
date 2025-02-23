import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Hero = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Link)`
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: #444;
  }
`;

const ScheduleContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CalendlyWrapper = styled.div`
  min-height: 700px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

function Home() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <HomeContainer>
        <Hero>
          <Title>Welcome to 1'st Marketing</Title>
          <Subtitle>Expert Copywriting & Sales Funnel Solutions</Subtitle>
          <CTAButton to="/schedule">Schedule a Consultation</CTAButton>
        </Hero>
      </HomeContainer>

      <ScheduleContainer>
        <h1>Schedule a Meeting</h1>
        <CalendlyWrapper>
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/dawsonknudt/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </CalendlyWrapper>
      </ScheduleContainer>

      <Footer>
        <p>© {new Date().getFullYear()} 1'st Marketing. All rights reserved.</p>
      </Footer>
    </div>
  );
}

export default Home; 