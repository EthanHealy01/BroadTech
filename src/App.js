import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import GradientBackground from './components/GradientBackground';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <GradientBackground>
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>   
    </Router>

      {showModal && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '20px',
            padding: '2rem',
            backdropFilter: 'blur(10px)',
            zIndex: 1000
          }}>
            <h2>Contact Us</h2>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label>Name</label>
                <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Email</label>
                <input type="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>
                  <input type="checkbox" />
                  I agree to receive communications from Broadhaven Technologies
                </label>
              </div>
              <Button type="submit" style={{ padding: '0.5rem 1rem', borderRadius: '5px', border: 'none', background: 'black', color: 'white' }}>Submit</Button>
            </form>
          </div>
        )}
      </GradientBackground>
  );
}

export default App;
