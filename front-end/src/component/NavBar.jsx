import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Import CSS file

const NavBar = () => {
  return (
    <header className="header">
      <div className="background-image"></div> {/* Div for background image */}
      <div className="logo">
        <Link to="/">
          <img src="/pic/blacklogo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Activitiespage">Activities</Link>
          </li>
          <li>
            <Link to="/RestaurantPage">Restaurants</Link>
          </li>
          <li>
            <Link to="/Hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/Spots">Spots</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
