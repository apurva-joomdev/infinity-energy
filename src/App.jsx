import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import { ThemeProviderWrapper } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProviderWrapper>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Navbar />
        <Dashboard />
      </div>
    </ThemeProviderWrapper>
  );
}

export default App;