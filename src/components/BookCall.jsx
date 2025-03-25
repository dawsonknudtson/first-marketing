import React from 'react';
import styled from 'styled-components';

const BookingContainer = styled.div`
  margin-top: 80px; // Account for fixed navbar
  min-height: calc(100vh - 80px);
  background: var(--background);
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

const CalendlyWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 4rem 2rem;
  height: calc(100vh - 80px);
`;

function BookCall() {
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
    <BookingContainer>
      <CalendlyWrapper>
        <div 
          className="calendly-inline-widget"
          data-url="https://calendly.com/dawsonknudt/strategy-meeting"
          style={{ minWidth: '400px', height: '100%' }}
        />
      </CalendlyWrapper>
    </BookingContainer>
  );
}

export default BookCall; 