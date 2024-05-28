import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-image-container">
                <img
                    src="/pic/whitelogo.png"
                    alt="Logo"
                    className="about-image"
                />
            </div>
            <div className="about-content" style={{ padding: "60px" }}>
                <h1 className="about-title" style={{ fontSize: "3rem" }}>
                    Welcome to Tangier
                </h1>
                <p className="about-description" style={{ fontSize: "1.5rem" }}>
                    Travelcation Tangier is your ultimate guide to exploring the
                    vibrant city of Tangier. Whether you're a first-time visitor
                    or a seasoned traveler, our website is designed to help you
                    make the most of your visit. From discovering the best local
                    attractions and activities to finding top-rated restaurants
                    and comfortable accommodations, we provide all the
                    information you need to create unforgettable experiences.
                </p>
                <p className="about-description" style={{ fontSize: "1.5rem" }}>
                    With Travelcation Tangier, you can easily plan your
                    itinerary, explore hidden gems, and immerse yourself in the
                    rich culture and history of this beautiful city. Our goal is
                    to make your trip planning seamless and enjoyable, so you
                    can focus on creating memories that will last a lifetime.
                    Let Travelcation Tangier be your trusted companion as you
                    discover the magic of Tangier.
                </p>
            </div>
            <div className="bottom-center">
                <Link to="/" className="home-button">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default About;
