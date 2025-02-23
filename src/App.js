import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Schedule from './components/Schedule';

const AppContainer = styled.div`
  background-color: #ededed;
  min-height: 100vh;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
