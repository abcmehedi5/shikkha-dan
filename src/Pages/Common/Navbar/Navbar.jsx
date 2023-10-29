import React from 'react';
import './Navbar.css'; // Create a CSS file for the Navbar styles
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Shikkha dan</a>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
  
      </ul>
    </nav>
  );
};

export default Navbar;
