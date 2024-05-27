import React, { useState } from "react";
import "./Header.css";
import NavBarHome from "../NavBarHome"; // Adjust the path according to your project structure

const activities = {
    Bowling: {
        title: "Socco Alto",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic3.jpeg`,
        description:
            "Bowling, a classic leisure activity, invites friendly competition as you aim for strikes and spares on the polished lanes.",
    },
    "Paint Ball": {
        title: "Paint Ball",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic4.jpeg`,
        description:
            "Paintball, an exhilarating team sport, offers the thrill of combat simulation while strategizing with friends for the ultimate win.",
    },
    "Horse Riding": {
        title: "Horse Riding",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic2.jpeg`,
        description:
            "Horse riding: a blend of freedom, grace, and connection between rider and steed, creating a uniquely exhilarating experience.",
    },
    Cinema: {
        title: "Movies",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic1.jpeg`,
        description:
            "Movies, a captivating art form, weave stories that elicit emotions and spark imagination. From thrilling adventures to heartwarming dramas, the cinema is a portal to diverse worlds of entertainment, providing moments of joy, excitement, and reflection for all.",
    },
    Pottery: {
        title: "Pottery",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic5.jpeg`,
        description:
            "Pottery is an art form involving molding clay into various shapes, either by hand or on a wheel. It's a hands-on and therapeutic activity, offering a creative outlet for crafting functional or decorative items.",
    },
    "Bike Rentals": {
        title: "Bike Rentals",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic6.jpeg`,
        description:
            "Bike rentals offer a flexible and affordable way to get around. Perfect for short trips, they provide a convenient and eco-friendly alternative to traditional transportation.",
    },
    "Bus City Tour": {
        title: "Bus City Tour",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic7.jpeg`,
        description:
            "City tour buses offer a hassle-free way to explore key attractions. Hop on and off at your preferred stops while enjoying informative commentary. It's a convenient and efficient way to discover a city's highlights.",
    },
    Karting: {
        title: "Karting",
        imagePath: `${process.env.PUBLIC_URL}/pic/pic8.jpeg`, // Temporarily use an existing image path
        description:
            "Karting is a thrilling motorsport using small, open-wheel go-karts on specialized tracks. It's a popular and accessible way to experience the excitement of racing, combining speed and maneuvering skills on the track.",
    },
};

const restaurants = [
    {
        name: "Parmigiano Italian Restaurant",
        imagePath: `${process.env.PUBLIC_URL}/pic/Parmigiano.jpg`,
        hours: "Tuesday 12:30-11 PM",
        address: "78 Rue Grenade, Tanger 9000",
        reviews: 584,
        website: "#",
    },
    {
        name: "Little Mamma",
        imagePath: `${process.env.PUBLIC_URL}/pic/littlemama.png`,
        duration: "2 hours",
        facilities: ["Transport Facility", "Family Plan"],
        reviews: 584,
        website: "#",
    },
    {
        name: "Dakotah",
        imagePath: `${process.env.PUBLIC_URL}/pic/Dakotah.jpg`,
        duration: "2 hours",
        facilities: ["Transport Facility", "Family Plan"],
        reviews: 584,
        website: "#",
    },
    {
        name: "Papa John's Pizza",
        imagePath: `${process.env.PUBLIC_URL}/pic/papajohnscard.png`,
        duration: "2 hours",
        facilities: ["Transport Facility", "Family Plan"],
        reviews: 584,
        website: "#",
    },
    {
        name: "Additional Restaurant",
        imagePath: `${process.env.PUBLIC_URL}/pic/additional.jpg`, // Replace with actual image path
        duration: "2 hours",
        facilities: ["Transport Facility", "Family Plan"],
        reviews: 584,
        website: "#",
    },
];

const hotels = [
    {
        name: "Hilton",
        imagePath: `${process.env.PUBLIC_URL}/pic/hilton.jpg`,
        address: "123 Main Street, Tanger",
        reviews: 1240,
        website: "#",
    },
    {
        name: "Ibis",
        imagePath: `${process.env.PUBLIC_URL}/pic/ibis.jpg`,
        address: "456 Elm Street, Tanger",
        reviews: 850,
        website: "#",
    },
    {
        name: "Movenpick",
        imagePath: `${process.env.PUBLIC_URL}/pic/movenpick.jpg`,
        address: "789 Oak Street, Tanger",
        reviews: 940,
        website: "#",
    },
    {
        name: "Farah",
        imagePath: `${process.env.PUBLIC_URL}/pic/farah.jpg`,
        address: "101 Pine Street, Tanger",
        reviews: 620,
        website: "#",
    },
    {
        name: "Hilton Tanger Houara",
        imagePath: `${process.env.PUBLIC_URL}/pic/hilton-houara.jpg`,
        address: "202 Cedar Street, Tanger",
        reviews: 1520,
        website: "#",
    },
];

const Header = () => {
    const [currentActivity, setCurrentActivity] = useState("Bowling");

    return (
        <>
            <NavBarHome />
            <div className="background-container">
                <div className="centered-text">
                    <h1>We Find The Best Recommendations Tours In Tangier</h1>
                    <br />
                    <p>
                        Welcome to our platform, your go-to destination for
                        discovering exciting activities and the best restaurants
                        in town! At Travelcation, we curate a personalized
                        experience to enhance your leisure time and dining
                        adventures. Whether you're a thrill-seeker looking for
                        thrilling activities or a food enthusiast in search of
                        culinary delights, our platform is designed to cater to
                        your preferences. Explore handpicked recommendations,
                        discover hidden gems, and embark on a journey of
                        delightful experiences. Let us be your guide in creating
                        memorable moments that go beyond the ordinary. Join us
                        on this exciting venture, where every click opens the
                        door to a world of endless possibilities and enjoyment.
                        Your next unforgettable experience is just a click away!
                    </p>
                </div>
            </div>
            <div className="explorer-activities">
                <h2>Explore Activities</h2>
                <p>
                    "Dive into a world of endless excitement and exploration.
                    Discover thrilling activities that <br />
                    promise unforgettable moments and enrich your life with
                    every adventure."
                </p>
                <div className="activity-buttons">
                    {Object.keys(activities).map((activity) => (
                        <button
                            key={activity}
                            className={`activity-button ${
                                currentActivity === activity ? "active" : ""
                            }`}
                            onClick={() => setCurrentActivity(activity)}
                        >
                            {activity}
                        </button>
                    ))}
                </div>
                <div className="parentActivites">
                    <div className="activityItem">
                        <div
                            className="backgroundImage"
                            style={{
                                backgroundImage: `url(${activities[currentActivity].imagePath})`,
                            }}
                        >
                            <div className="infoContainer">
                                <h2>{activities[currentActivity].title}</h2>
                                <p>{activities[currentActivity].description}</p>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-activities">
                <h2>Restaurants</h2>
                <p>
                    Savor diverse flavors at our top-notch restaurants, where
                    each dish is a delightful experience waiting to be enjoyed.
                </p>
                <div className="restaurants-list">
                    {restaurants.map((restaurant, index) => (
                        <div key={index} className="restaurant-card">
                            <img
                                src={restaurant.imagePath}
                                alt={restaurant.name}
                            />
                            <h3>{restaurant.name}</h3>
                            {restaurant.hours && (
                                <p>Hours: {restaurant.hours}</p>
                            )}
                            {restaurant.address && (
                                <p>Address: {restaurant.address}</p>
                            )}
                            {restaurant.duration && (
                                <p>Duration: {restaurant.duration}</p>
                            )}
                            {restaurant.facilities && (
                                <ul>
                                    {restaurant.facilities.map(
                                        (facility, idx) => (
                                            <li key={idx}>{facility}</li>
                                        )
                                    )}
                                </ul>
                            )}
                            <p>{restaurant.reviews} reviews</p>
                            <a href={restaurant.website}>Website</a>
                        </div>
                    ))}
                </div>
                <button className="view-all-button">
                    View All Restaurants
                </button>
            </div>
            <div className="explore-activities">
                <h2>Hotels</h2>
                <p>
                    Find the best places to stay in Tangier, from luxury hotels to budget-friendly options.
                </p>
                <div className="hotels-list">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="hotel-card">
                            <img
                                src={hotel.imagePath}
                                alt={hotel.name}
                            />
                            <h3>{hotel.name}</h3>
                            <p>Address: {hotel.address}</p>
                            <p>{hotel.reviews} reviews</p>
                            <a href={hotel.website}>Website</a>
                        </div>
                    ))}
                </div>
                <button className="view-all-button">
                    View All Hotels
                </button>
            </div>
        </>
    );
};

export default Header;
