// src/App.tsx

import React from 'react';
import Home from './Home'; // Import the new Home component
import './index.css'; // Include Tailwind styles
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About';

const App: React.FC = () => {
  return (
  <BrowserRouter>
    <div className="App">
      
      <nav>
        <Link to="/"></Link>
        <Link to="/about"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
    </div>
    </BrowserRouter>
  );
};

export default App;
