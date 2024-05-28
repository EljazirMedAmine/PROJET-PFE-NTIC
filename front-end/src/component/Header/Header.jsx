import React, { useState, useEffect } from "react";
import "./Header.css";
import NavBarHome from "../NavBarHome"; // Adjust the path according to your project structure
import Footer from "../Footer/Footer"; // Adjust the path according to your project structure
import { Link } from "react-router-dom";

const activities = {
    Bowling: {
        title: "Bowling",
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
        imagePath: `${process.env.PUBLIC_URL}/pic/pic8.jpeg`,
        description:
            "Karting is a thrilling motorsport using small, open-wheel go-karts on specialized tracks. It's a popular and accessible way to experience the excitement of racing, combining speed and maneuvering skills on the track.",
    },
};
const restaurants = [
    {
        name: "Parmigiano",
        imagePath:
            "https://scontent.frba2-1.fna.fbcdn.net/v/t39.30808-6/280199571_4885042558284527_2646082149039741513_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE83jfTqz8wNhFJzQohpkAGRc7sJ1G8JHxFzuwnUbwkfDkvLGRKEi4j_9IEgz-KPGlnRjzZOJqO_FMoPnCTmpn_&_nc_ohc=AAW7YBAt_ZAQ7kNvgHLfg10&_nc_ht=scontent.frba2-1.fna&oh=00_AYClp3RSonS_BTYXLXvdEQcImhjkDNJzwsrTe87lpQLd2g&oe=665AEA07",
        hours: {
            Tuesday: "12:30–11 PM",
            Wednesday: "12:30–11 PM",
            Thursday: "12:30–11 PM",
            Friday: "12:30–11 PM",
            Saturday: "12:30–11 PM",
            Sunday: "1–11 PM",
            Monday: "Closed",
        },
        address: "78 Rue Grenade, Tanger 9000",
        reviews: 584,
    },
    {
        name: "Little Mamma",
        imagePath:
            "https://scontent.frba2-2.fna.fbcdn.net/v/t39.30808-6/400621157_18217653919301002_4462396384498064245_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRgbahaZXMnj7Q_djSs1UXN7PgrO7zZmc3s-Cs7vNmZ332oYmkn9ZqT10fP9KBO7p5J1he5KKJYpRqSHvcc9v_&_nc_ohc=cXQvbS7lzhYQ7kNvgGCqC--&_nc_ht=scontent.frba2-2.fna&oh=00_AYA92nDd3o6Hj7pZNj_wBJBu_btLxlrCk6eTC_9ZkVyzpg&oe=665AE02F",
        facilities: ["Family Plan"],
        hours: {
            Tuesday: "1 PM–12 AM",
            Wednesday: "1 PM–12 AM",
            Thursday: "1 PM–12 AM",
            Friday: "1 PM–12 AM",
            Saturday: "1 PM–12 AM",
            Sunday: "1 PM–12 AM",
            Monday: "1 PM–12 AM",
        },
        reviews: 584,
        address: "78 Rue Grenade, Tanger 9000",
    },
    {
        name: "DAKOTAH",
        imagePath:
            "https://scontent.frba3-1.fna.fbcdn.net/v/t39.30808-6/349634639_4640310266092742_867273589650456451_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTB0H3qg2WTkXnZjOIgMt9dknp47NSZ1V2Senjs1JnVcTdfvT8Vu2DcGluayx0XTDXXCFoYUkWqztxs3ZNNMht&_nc_ohc=Okfu4W1Fi40Q7kNvgGB198r&_nc_ht=scontent.frba3-1.fna&oh=00_AYDRiBNVmqI3Jbadv-SImFKH0TSWO7pxBv5mDwpRFEX-AA&oe=665AC399",
        hours: {
            Tuesday: "1 PM–12 AM",
            Wednesday: "1 PM–12 AM",
            Thursday: "1 PM–12 AM",
            Friday: "1 PM–12 AM",
            Saturday: "1 PM–3 AM",
            Sunday: "1 PM–3 AM",
            Monday: "1 PM–12 AM",
        },
        address: "102 Av. Imam Mouslim, Tanger 90040",
        reviews: 584,
    },
    {
        name: "Papa John's Pizza",
        imagePath:
            "https://brooksregiontourism.com/wp-content/uploads/2017/09/papa-johns.jpg",
        hours: {
            Tuesday: "12 PM–12 AM",
            Wednesday: "12 PM–12 AM",
            Thursday: "12 PM–12 AM",
            Friday: "12 PM–12 AM",
            Saturday: "12 PM–12 AM",
            Sunday: "12 PM–12 AM",
            Monday: "12 PM–12 AM",
        },
        reviews: 584,
        address: "Av. Louis Van Beethoven, Tanger 90060",
    },
];
const hotels = [
    {
        name: "Hilton Houara",
        imagePath:
            "https://images.trvl-media.com/lodging/28000000/27730000/27721600/27721577/03447904.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    },
    {
        name: "Ibis",
        imagePath:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/03/6f/7a/vue-de-l-interieur.jpg?w=1200&h=-1&s=1",
    },
    {
        name: "Farah",
        imagePath:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/279983093.jpg?k=c6d108592991ab9f58f9d3f6d7a7db32a2ba80c81029f5482ca2e2ea51d64a6d&o=&hp=1",
    },
    {
        name: "Movenpick",
        imagePath: "https://www.ahstatic.com/photos/b4q1_ho_00_p_2048x1536.jpg",
    },
];
const initialSpots = [
    {
        img: "https://stayhere.ma/wp-content/uploads/2023/08/Explorez-le-Cap-Spartel-Tanger-Guide-Complet-pour-un-Sejour-Inoubliable-1140x760.webp",
        title: "Cap Spartel",
        link: "https://www.google.com/maps/search/cap+spartel/@35.787698,-5.9624524,13z/data=!3m1!4b1?entry=ttu",
    },
    {
        img: "https://i.pinimg.com/736x/98/23/b8/9823b8949517c7ae64c4d98f60d1da4a.jpg",
        title: "Mnar",
        link: "https://www.google.com/search?client=opera-gx&hs=tHX&sca_esv=9c7901713bdc58da&sca_upv=1&sxsrf=ADLYWILfFaTA0K3e8NT7dIFdH6cGahNVYQ:1716866729814&q=mnar&npsic=0&rflfq=1&rllag=35783629,-5788380,4911&tbm=lcl&sa=X&ved=2ahUKEwirqbr8sq-GAxWwRaQEHSKqCTwQtgN6BAghEAE&biw=1879&bih=977&dpr=1&pccc=1#rlfi=hd:;si:;mv:[[35.8201567,-5.7268479999999995],[35.7560297,-5.8400169]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1",
    },
    {
        img: "https://pbs.twimg.com/media/Eu0vY_wXYAIq0ji?format=jpg&name=medium",
        title: "Rmilat",
        link: "https://www.google.com/maps/place/Av.+Ahmed+Balafrej,+Tanger/@35.7826983,-5.8626995,17z/data=!3m1!4b1!4m6!3m5!1s0xd0c787e66b0dbf1:0x22ee6a26fd53eff9!8m2!3d35.7826983!4d-5.8626995!16s%2Fg%2F1vcjnhvr?entry=ttu",
    },
    {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/bd/e6/a2/medina-of-tangier.jpg?w=1200&h=-1&s=1",
        title: "MerKala",
        link: "https://www.google.com/maps/place/Merkala+Beach/@35.7943125,-5.8450264,15z/data=!3m1!4b1!4m6!3m5!1s0xd0c78bfdd17e3e9:0xf0bbc174a16b36b0!8m2!3d35.794296!4d-5.8347052!16s%2Fg%2F12q4tlhwk?entry=ttu",
    },
    {
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/bd/e8/6f/medina-of-tangier.jpg?w=1200&h=-1&s=1",
        title: "Old Medina",
        link: "https://www.google.com/maps/place/Ancien+Medina,+Tangier/@35.7862122,-5.8145192,17z/data=!3m1!4b1!4m6!3m5!1s0xd0c7f4d7ebabf4f:0xdae66f4452080ca9!8m2!3d35.7866443!4d-5.8109931!16s%2Fg%2F1wf2335j?entry=ttu",
    },
    {
        img: "https://images.unsplash.com/photo-1532173311168-91e999ce4e47?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Grottes d'Hercule",
        link: "https://www.google.com/maps/place/Hercules+Caves/@35.7599378,-5.9440974,17z/data=!3m1!4b1!4m6!3m5!1s0xd0b882d10964725:0xa9ac855c8cfd195a!8m2!3d35.7599335!4d-5.9392319!16s%2Fm%2F0w6bp17?entry=ttu",
    },
];
const Header = () => {
    const [currentActivity, setCurrentActivity] = useState("Bowling");
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/hotels"
                );
                const hotelsData = await response.json();
                setHotels(hotelsData);
            } catch (error) {
                console.error("Error fetching hotel data:", error);
            }
        };
        fetchHotels();
    }, []);

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
                                <Link to="/Activitiespage">
                                    <button>Learn More</button>
                                </Link>
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
                                <div>
                                    <p>Hours:</p>
                                    {Object.entries(restaurant.hours).map(
                                        ([day, hours]) => (
                                            <p key={day}>
                                                {day}: {hours}
                                            </p>
                                        )
                                    )}
                                </div>
                            )}
                            {restaurant.address && (
                                <p>Address: {restaurant.address}</p>
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
                        </div>
                    ))}
                </div>

                <Link to="/RestaurantPage">
                    <button className="view-all-button">
                        View All Restaurants
                    </button>
                </Link>
            </div>
            <div className="explore-activities">
                <h2>Hotels</h2>
                <p>
                    Find the best places to stay in Tangier, from luxury hotels
                    to budget-friendly options.
                </p>

                <div className="hotel-grid">
                    {hotels.map((hotel, index) => (
                        <div key={index} className="hotel-card">
                            <img src={hotel.imagePath} alt={hotel.name} />
                            <h2>{hotel.name}</h2>
                        </div>
                    ))}
                </div>
                <div className="container">
                    <h1>Spots</h1>
                    <p>
                        Discover stunning views at our recommended spots, where
                        nature's beauty unfolds before your eyes.
                    </p>
                    <div className="spots-grid">
                        {initialSpots.map((spot) => (
                            <Link
                                key={spot.title}
                                to={spot.link}
                                target="_blank"
                                className="spot"
                            >
                                <img src={spot.img} alt={spot.title} />
                                <p>{spot.title}</p>
                            </Link>
                        ))}
                    </div>
                    <Link to="/Spots" className="btn">
                        View All Spots
                    </Link>{" "}
                    {/* Add this line */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Header;
