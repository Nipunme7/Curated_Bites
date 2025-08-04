import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import GetStartedPage from './components/pages/GetStartedPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bites" element={<GetStartedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
