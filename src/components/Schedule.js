import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CalendlyWrapper = styled.div`
  min-height: 700px;
`;

function Schedule() {
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
  );
}

export default Schedule; 