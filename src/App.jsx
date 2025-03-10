import React, { useContext } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import ThemeContext, { ThemeProviderWrapper } from './Context/ThemeContext';

function App() {
  const { darkMode } = useContext(ThemeContext); // Access darkMode from context

  return (
    <ThemeProviderWrapper>
      <div style={{ backgroundColor: darkMode ? 'black' : 'white', minHeight: '100vh',  color: darkMode ? 'white' : 'black' }}>
        <Navbar />
        <Dashboard />
      </div>
    </ThemeProviderWrapper>
  );
}

export default App;