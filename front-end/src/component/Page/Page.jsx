import React, { useEffect, useState } from 'react';
import './Page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faBed, faCity, faSpa, faCheck } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useParams } from 'react-router-dom';

function Page() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [dat, setDat] = useState({});
    const { idd } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const hotelsResponse = await fetch(`http://127.0.0.1:8000/api/hotels/${idd}`);
                const hotelsData = await hotelsResponse.json();
                setDat(hotelsData);
            } catch (error) {
                console.error("Error fetching activity data:", error);
            }
        };
        fetchData();
    }, [idd]);
    return (
        <div className="app-container">
            <h1>Choisissez votre chambre</h1>
            <div className="date-travelers-row">
                <div className="date-picker">
                    <div className='card-date'>
                        <div className='inleftcenter'>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>
                        <div className='inreight'>
                            <label> Arrivée</label>
                            <input type="date" defaultValue="2023-05-31" />
                        </div>
                    </div>
                    <div className='card-date'>
                        <div className='inleftcenter'>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>
                        <div className='inreight'>
                            <label> Départ</label>
                            <input type="date" defaultValue="2023-06-02" />
                        </div>
                    </div>
                </div>


            </div>
            <div className="room-options">
                <button>Toutes les chambres</button>
                <button>1 lit</button>
                <button>2 lits</button>
                <button>3+ lits</button>

            </div>
            <div className="room-card">
                <Slider {...settings}>


                    <div>
                        <img src={dat.chambre_1} alt="Room" />
                    </div>
                    <div>
                        <img src={dat.chambre_2} alt="Room" />
                    </div>
                    <div>
                        <img src={dat.chambre_3} alt="Room" />
                    </div>


                </Slider>
                <div className="room-details">
                    <h2>Chambre Standard Double ou avec lits jumeaux</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faCheck} /> Aucun prépaiement nécessaire</li>
                        {dat.id===3 ?<li><FontAwesomeIcon icon={faSpa} /> 30% de réduction sur le Spa (par jour)</li>: ""}
                        <li><FontAwesomeIcon icon={faCity} /> Vue sur la ville</li>
                        <li><FontAwesomeIcon icon={faUsers} /> 3 personnes</li>
                        <li><FontAwesomeIcon icon={faBed} /> 1 lit double et 1 canapé-lit (1 place) ou 2 lits 1 place et 1 canapé-lit (1 place)</li>
                        <li><FontAwesomeIcon icon={faCheck} /> Pension complète</li>
                    </ul>
                    <Link to={`/pay/${idd}`}><button className='btnnn'>Book Now</button></Link>
                </div>
            </div>
            <div className='mapdehotel'>
                <iframe
                    src={dat.localisation}
                    width={400}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default Page;
