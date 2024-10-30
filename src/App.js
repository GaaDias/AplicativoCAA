// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomizeCard from './pages/CustomizeCard';
import Settings from './pages/Settings';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Adicionando a Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customize-card" element={<CustomizeCard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
