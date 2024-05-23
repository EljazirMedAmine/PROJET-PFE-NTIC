import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../NavBar";

const Hotels = () => {
  const [dat, setDat] = useState([]);

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hotels = await fetch("http://127.0.0.1:8000/api/hotels");
        const hotelsdata = await hotels.json();
        setDat(hotelsdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const HotelRating = ({ rate }) => {
    return (
      <div>
        {[...Array(rate)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: "#FFD43B" }}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <NavBar />
      <div>
        <div>
          <h2>Hotels</h2>
          {dat.length} Activites Found
        </div>
        <div>
          <h3>Availabity</h3>

          <form action="">
            From :{" "}
            <input
              type="date"
              value={currentDate}
              name=""
              id=""
              onChange={(e) => setCurrentDate(e.target.value)}
            />
            <br />
            To : <input type="date" name="" id="" />
          </form>
        </div>
        {dat.map((it) => (
          <div key={it.id}>
            <img src={it.photo} alt={it.nom} />
            <HotelRating rate={it.rate} />
            <h2>{it.nom}</h2>
            <p>{it.description}</p>
            <h4>{it.prix}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hotels;
