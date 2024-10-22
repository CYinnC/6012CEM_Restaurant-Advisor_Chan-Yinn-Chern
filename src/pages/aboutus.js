import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div className="p_container">
      <header className="header">
        <div className="header_title">Restaurant Advisor</div>
        <nav className="header_nav_buttons">
          <Link className="header_nav_button" to="/">Home</Link>
          <Link className="header_nav_button" to="/pages/search">Search</Link>
          <Link className="header_nav_button" to="/pages/consideration">Consideration</Link>
        </nav>
      </header>
      <div className="about_content">
      <h1>About Us</h1>
        <p>
          We are a group of people that have decided to one day create this website that will provde a much
          easy way to access all the highly rated restaurant and make it easier to plan where to go eat on the fly.
        </p>
        <h1>Our Mission</h1>
        <p>
          At Restaurant Advisor our mission and what we hope to achieve with the site is to provide everyone a
          easy way to decide where to eat more effeciently.
        </p>
        <h1>Our Team</h1>
        <div className="team">
          <div className="team_member">
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team_member">
            <h3>Justin Hunter</h3>
            <p>Co-Founder</p>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Aboutus;
