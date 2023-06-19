import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Online Store!</h1>
        <p>Discover a wide range of high-quality products at great prices.</p>
        <Link to="/products" className="shop-now-button">Shop Now</Link>
      </div>
    </div>
  );
}

export default Home;
