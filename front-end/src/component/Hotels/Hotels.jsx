import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdPerson } from 'react-icons/md';
import NavBar from "../NavBar";
import './Hotels.css';
import { Link } from "react-router-dom";

const Hotels = () => {
  const [dat, setDat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 3;

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

  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;
  const currentHotels = dat.slice(indexOfFirstHotel, indexOfLastHotel);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dat.length / hotelsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <NavBar />
      <div className="hotels-container">
        <div className="group">
          <h2 className="hotels">Hotels</h2>
          <p className="activities">{dat.length} Activities Found</p>
        </div>
        <div className="parenthotel">
          {currentHotels.map((it) => (
            <div key={it.id} className="child">
              <img src={it.photo} alt={it.nom} className="img" />
              <div className="content">
                <h2 className="name1">{it.nom}</h2>
                <p className="desc1">{it.description}</p>
                <div className="rating">
                  {Array.from({ length: it.rate }).map((_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                </div>
                <h4 className="prix">${it.prix} / Per person <MdPerson /></h4>
                <div className="bookbtn">
                  <Link to={`/Hotels/${it.id}`}>
                  <button>Book</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {pageNumbers.map(number => (
            <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hotels;
