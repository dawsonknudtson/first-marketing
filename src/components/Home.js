import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const THEME_COLOR = '#ededed';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Hero = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

const BlueText = styled.span`
  color: #007bff;  // Bootstrap blue color, you can adjust this
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
`;

const ScheduleContainer = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
  text-align: center;
`;

const ScheduleTitle = styled.h1`
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #333;
  line-height: 1.4;
`;

const CalendlyWrapper = styled.div`
  min-height: 700px;
`;

const Footer = styled.footer`
  background-color: ${THEME_COLOR};
  color: #333;  // Changed to dark gray/black
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
`;

const EmailLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
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
          <Title>Coaching & Info Businesses Above $7.5K Per Month</Title>
          <Subtitle>
            We Help Scale and Retain Clients Through High-Converting{' '}
            <BlueText>Copywriting</BlueText> & <BlueText>Sales Funnels</BlueText>
          </Subtitle>
        </Hero>
      </HomeContainer>

      <ScheduleContainer id="schedule">
        <ScheduleTitle>
          Ready to Take Your Business to the Next Level?
          <br />
          <BlueText>Schedule</BlueText> Your <BlueText>Free</BlueText> Strategy Call Today
        </ScheduleTitle>
        <CalendlyWrapper>
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/dawsonknudt/strategy-meeting"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </CalendlyWrapper>
      </ScheduleContainer>

      <Footer>
        <FooterText>
          Copyright © {new Date().getFullYear()} 1'st Marketing - All Rights Reserved.
        </FooterText>
        <FooterText>
          For general inquiries: <EmailLink href="mailto:contact@1stmarketing.com">dawson@1st-marketing.com</EmailLink>
        </FooterText>
      </Footer>
    </div>
  );
}

export default Home; 