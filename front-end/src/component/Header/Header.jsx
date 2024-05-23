import React from "react";
import "./Header.css";
import NavBarHome from "../NavBarHome"; // Adjust the path according to your project structure

const Header = () => {
  return (
    <>
      <NavBarHome />
      <div className="background-container">
        <div className="centered-text">
          <h1>We Find The Best Recommendations Tours In Tangier</h1>
          <br />
          <p>
            Welcome to our platform, your go-to destination for discovering
            exciting activities and the best restaurants in town! At
            Travelcation, we curate a personalized experience to enhance your
            leisure time and dining adventures. Whether you're a thrill-seeker
            looking for thrilling activities or a food enthusiast in search of
            culinary delights, our platform is designed to cater to your
            preferences. Explore handpicked recommendations, discover hidden
            gems, and embark on a journey of delightful experiences. Let us be
            your guide in creating memorable moments that go beyond the
            ordinary. Join us on this exciting venture, where every click opens
            the door to a world of endless possibilities and enjoyment. Your
            next unforgettable experience is just a click away!
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
