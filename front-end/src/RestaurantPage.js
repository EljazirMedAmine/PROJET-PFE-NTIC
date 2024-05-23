import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RestaurantPage.css";
import NavBar from "./component/NavBar";

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("/api/restaurants")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  return (
    <>
    <NavBar />
    <div className="restaurant-page">
      <h1 className="page-title">Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-item">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="restaurant-detail">
              <strong>Location:</strong> {restaurant.location}
            </p>
            <p className="restaurant-detail">
              <strong>Description:</strong> {restaurant.description}
            </p>
            <p className="restaurant-detail">
              <strong>Contact:</strong> {restaurant.contact}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default RestaurantPage;
