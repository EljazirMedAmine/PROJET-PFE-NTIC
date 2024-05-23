import React from "react";
import { Link } from "react-router-dom"; // Add this import statement
import "./NavBarHome.css"; // Import CSS file

const NavBarHome = () => {
  return (
    <>
      <header className="header">
        <div className="background-image"></div> {/* Div for background image */}
        <div className="logo">
          <Link to="/HomePage">
            <img src="/pic/whitelogo.png" alt="Logo" className="logo-image" />
          </Link>
        </div>
        <nav className="navigation2">
          <ul>
            <li>
              <Link to="/HomePage" className="active">
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
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="signin-button">
          <Link to={"signin"}>
            <button>Sign In</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBarHome;
