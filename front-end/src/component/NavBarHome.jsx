import React from "react";
import { Link } from "react-router-dom"; // Add this import statement
import "./NavBarHome.css"; // Import CSS file

const NavBarHome = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="/pic/whitelogo.png"
                            alt="Logo"
                            className="logo-image"
                        />
                    </Link>
                </div>
                <nav className="navigation2">
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
        </>
    );
};

export default NavBarHome;
