import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Advanced Smart Task Scheduler</h1>
      <p className="home-subtitle">Organize and prioritize your tasks effortlessly.</p>
      <div className="home-buttons">
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button">Register</Link>
      </div>
    </div>
  );
};

export default Home;
