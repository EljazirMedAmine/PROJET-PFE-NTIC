import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Reservation.css';
import NavBar from '../NavBar';
import { FaStar } from 'react-icons/fa';
import { faPersonSwimming, faSpa, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Page from '../Page/Page';

export default function Reservation() {
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
        <>
            <NavBar />
            <div className='detail-hotel'>
                <h1 className='tit'>Hotel {dat.nom}</h1>
                <div className='group-pict'>
                    <img src={dat.photo} alt=""  width={768} height={529}/>
                    <div className='pictures'>
                        <img src={dat.photo_2} alt={dat.id} width={515} height={345}/>
                        <div className='tow'>
                            <img src={dat.photo_3} alt={dat.id} width={258} height={180}/>
                            <img src={dat.photo_4} alt={dat.id} width={258} height={180}/>
                        </div>
                    </div>
                </div>
                <div className='btnbookk'>
                    <ScrollLink to="page1" spy={true} smooth={true} offset={-50} duration={500}>
                        <button>Book a Room</button>
                    </ScrollLink>
                </div>
                <hr />
                <div>
                    <h5 className='nomm'> {dat.nom}</h5>
                    <div className="rating1">
                        {Array.from({ length: dat.rate }).map((_, i) => (
                            <FaStar key={i} color="#FFD700" />
                        ))}
                    </div>
                </div>
                <div className='group_dess'>
                    <h5 className='desc2'>{dat.description}</h5>
                </div>
                <div className='equipment'>
                    <h4 className='titele'>Popular equipment</h4>
                    <div className='mixx'>
                        <div className="equi1">
                            <h5 className="phonname"><FontAwesomeIcon icon={faPersonSwimming} /> Swimming pool</h5>
                        </div>
                        <div className="equi2">
                            <h5 className="phonname"><FontAwesomeIcon icon={faWifi} /> wifi gratuit</h5>
                        </div>
                    </div>
                    <div className='mixx'>
                        <div className="equi1">
                            {dat.id !== 2 ? <h5 className="phonname"><FontAwesomeIcon icon={faUtensils} /> Restaurant</h5> : ""}
                        </div>
                        <div className="equi2">
                            {dat.id === 3 &&  dat.id === 5 ? <h5 className="phonname"><FontAwesomeIcon icon={faSpa} /> Spa</h5> : ""}
                        </div>
                    </div>
                </div>
                <Element name="page1" className="element">
                    <Page />
                </Element>
            </div>
        </>
    );
}
