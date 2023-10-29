import React from 'react';
import './Navbar.css'; // Create a CSS file for the Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Shikkha dan</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
