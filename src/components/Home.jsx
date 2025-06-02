import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomeContainer = styled.div`
  margin-top: 80px; // Account for fixed navbar
`;

const Hero = styled.section`
  background: var(--background);
  padding: 6rem 0 4rem;
  position: relative;
  overflow: hidden;
  
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

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const AccentText = styled.span`
  color: var(--text);
  font-weight: 600;
`;

const CTAText = styled.p`
  font-size: 1.15rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  font-weight: 500;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--gradient-primary);
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(77, 166, 255, 0.3);
  }
`;

const ServicesSection = styled.section`
  background: var(--background-light);
  padding: 6rem 0;
`;

const ServicesSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
  opacity: 0.95;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: var(--background);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 2px solid var(--primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(77, 166, 255, 0.2);
    border-color: var(--primary-dark);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #000000;
`;

const ServiceDescription = styled.p`
  color: #333333;
  line-height: 1.6;
`;

const Footer = styled.footer`
  background: var(--background);
  color: var(--text-secondary);
  padding: 3rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
`;

const EmailLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Helmet>
        <title>First Marketing - AI Workflow Automation & Smart Systems</title>
        <meta name="description" content="We don't just automate processes — we build smart systems that save you time, boost efficiency, and scale with your business. From AI-driven receptionist flows to full operational workflows." />
        <meta name="keywords" content="AI automation, workflow automation, AI receptionist, systems optimization, business automation" />
        <link rel="canonical" href="https://1st-marketing.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "First Marketing - AI Workflow Automation & Smart Systems",
            "description": "We don't just automate processes — we build smart systems that save you time, boost efficiency, and scale with your business.",
            "mainEntity": {
              "@type": "Service",
              "name": "Automation Services",
              "serviceType": "Business Automation",
              "provider": {
                "@type": "Organization",
                "name": "First Marketing"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "AI Workflow Automation"
                },
                {
                  "@type": "Offer",
                  "name": "AI Receptionist"
                },
                {
                  "@type": "Offer",
                  "name": "Systems Optimization"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Hero as="section" aria-labelledby="hero-title">
        <HeroContent>
          <Title id="hero-title">Automate. Accelerate. Elevate.</Title>
          <Subtitle>
            We don't just automate processes — we build <AccentText>smart systems</AccentText> that save you time, boost efficiency, and scale with your business. From AI-driven receptionist flows to full operational workflows, we deliver intelligent automation.
          </Subtitle>
          <CTAText>
            If you're ready to free up your time and supercharge your operations...
          </CTAText>
          <CTAButton to="/contact">Book Your Free Strategy Call</CTAButton>
        </HeroContent>
      </Hero>

      <ServicesSection as="section" aria-labelledby="services-title">
        <ServicesSectionContent>
          <SectionTitle id="services-title">Our Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceTitle>AI Workflow Automation</ServiceTitle>
              <ServiceDescription>
                We map and build automation flows using tools like Zapier and n8n to eliminate repetitive tasks and connect your favorite platforms.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>AI Receptionist</ServiceTitle>
              <ServiceDescription>
                Custom AI agents trained to handle calls, messages, and bookings — reducing overhead and keeping your business running 24/7.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Systems Optimization</ServiceTitle>
              <ServiceDescription>
                Strategic analysis and AI integration to streamline operations, reduce costs, and ensure every system is working in sync.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSectionContent>
      </ServicesSection>

      <Footer as="footer">
        <FooterContent>
          <FooterText>
            Copyright © {new Date().getFullYear()} Kernoco AI - All Rights Reserved.
          </FooterText>
          <FooterText>
            Contact us: <EmailLink href="mailto:dawson@1st-marketing.com">kernoco@protonmail.com</EmailLink>
          </FooterText>
        </FooterContent>
      </Footer>
    </HomeContainer>
  );
}

export default Home; 