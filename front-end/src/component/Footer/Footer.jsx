import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Travelcation. All rights reserved.</p>
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="about">About</a>
          <a href="/ContactUs">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
