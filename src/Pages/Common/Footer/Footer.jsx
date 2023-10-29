import React from "react";
import "./Footer.css"; // Create a CSS file for the Footer styles
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Data Science</li>
            <li>Artificial Intelligence</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Information</h3>
          <p>123 Main Street</p>
          <p>City, Country</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="footer-column">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">
              <FaFacebook />
            </a>
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
            <a href="#" className="icon">
              <FaLinkedin />
            </a>
          </div>
          {/* <input className='subscribe' type="" placeholder='Subscribe' /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
