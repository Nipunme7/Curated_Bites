import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bites" element={<MainPage />} />
          <Route path="/store/:restaurantName" element={<RestaurantDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
