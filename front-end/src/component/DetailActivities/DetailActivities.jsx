import { Fragment, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./DetailActivities.css";
import NavBar from "../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faPhone, faSackDollar } from "@fortawesome/free-solid-svg-icons";

export default function DetailActivities() {
    const [dat, setDat] = useState({});
    const { id } = useParams();
    const [cinemas, setCinemas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [types, setTypes] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activitesResponse = await fetch(`http://127.0.0.1:8000/api/activites/${id}`);
                const activitesData = await activitesResponse.json();
                setDat(activitesData);
            } catch (error) {
                console.error("Error fetching activity data:", error);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const typeActiviteResponse = await fetch('http://127.0.0.1:8000/api/typeActivite');
                const typeActiviteData = await typeActiviteResponse.json();
                setTypes(typeActiviteData);
            } catch (error) {
                console.error("Error fetching activity data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const typeActiviteResponse = await fetch('http://127.0.0.1:8000/api/photo');
                const typeActiviteData = await typeActiviteResponse.json();
                setPhoto(typeActiviteData);
            } catch (error) {
                console.error("Error fetching activity data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cinemas")
            .then((response) => response.json())
            .then((data) => {
                setCinemas(data);
                setCurrentIndex(1); // Initialize with the first main item
            })
            .catch((error) => console.error("Error fetching cinemas:", error));
    }, []);

    useEffect(() => {
        const updateCarousel = (direction) => {
            if (!cinemas.length) return;

            let newIndex;
            if (direction === "right") {
                newIndex = (currentIndex + 1) % cinemas.length;
            } else {
                newIndex = (currentIndex - 1 + cinemas.length) % cinemas.length;
            }
            setCurrentIndex(newIndex);
        };

        const leftBtn = document.querySelector("#leftBtn");
        const rightBtn = document.querySelector("#rightBtn");

        if (leftBtn && rightBtn) {
            const handleRightClick = () => updateCarousel("right");
            const handleLeftClick = () => updateCarousel("left");
            rightBtn.addEventListener("click", handleRightClick);
            leftBtn.addEventListener("click", handleLeftClick);

            return () => {
                rightBtn.removeEventListener("click", handleRightClick);
                leftBtn.removeEventListener("click", handleLeftClick);
            };
        }
    }, [cinemas, currentIndex]);

    const getClassForItem = (index) => {
        if (index === currentIndex) return "carousel__item--main";
        if (index === (currentIndex - 1 + cinemas.length) % cinemas.length)
            return "carousel__item--left";
        if (index === (currentIndex + 1) % cinemas.length)
            return "carousel__item--right";
        return "";
    };

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    function detail() {
        if (parseInt(id) === 1) {
            return (
                <Fragment>
                    <div className="parentCinemas">
                        <h1>Cinemas available</h1>
                        <p>
                            Cinemas in Tangier feature a mix of modern multiplexes and historic theaters, showcasing both international films and Moroccan cinema.
                        </p>
                        <div className="carousel">
                            {cinemas.map((cinema, index) => (
                                <div
                                    key={cinema.id}
                                    className={`carousel__item ${getClassForItem(index)}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src={cinema.photo} alt={cinema.nom_cinema} />
                                    <div className="carousel__text">
                                        {hoverIndex === index && (
                                            <div className="carousel__info">
                                                <h5>{cinema.nom_cinema}</h5>
                                                <p>{cinema.description}</p>
                                                <iframe
                                                    src={cinema.localisation}
                                                    width={700}
                                                    height={550}
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="carousel__btns">
                                <button className="carousel__btn" id="leftBtn">
                                    <i className="bx bx-left-arrow-alt"></i>
                                </button>
                                <button className="carousel__btn" id="rightBtn">
                                    <i className="bx bx-right-arrow-alt"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        } else {
            return types
                .filter(type => dat.id === type.id_activite)
                .map(type => {
                    const typePhotos = photo.filter(it => type.id === it.id_typeactivite);
                    const renderedPhotos = typePhotos.map((it, index) => (
                        <div key={index} className="pic">
                            <img src={it.photo_1} alt={it.id} width={168} />
                            <img src={it.photo_2} alt={it.id} width={168} />
                            <img src={it.photo_3} alt={it.id} width={168} />
                            <img src={it.photo_4} alt={it.id} width={168} />
                        </div>
                    ));

                    return (
                        <div key={type.id}>
                            <h1 className="name">Discover the {dat.nom} Activity</h1><br />
                            <div className="parentdetail">
                                <div className="imgmain">
                                    <img src={type.photo} alt="" width={700} /><br />
                                </div>
                                <div className="group_photos">
                                    {renderedPhotos}
                                </div>
                                <div className="descdetail">
                                    <h2 className="de">Description</h2>
                                    <p className="desPA">{dat.description}</p><br />
                                    <iframe
                                        src={type.location}
                                        width={400}
                                        height={450}
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                            <div className="sub">
                                <div className="mix">
                                    <div className="sub1">
                                        <h5 className="phonname"><FontAwesomeIcon icon={faPhone} /> Phone number</h5>
                                        <p className="phonenum">You can contact by this number {dat.tel}</p>
                                    </div>
                                    <div className="sub2">
                                        <h5 className="phonname"><FontAwesomeIcon icon={faClock} /> Duration</h5>
                                        <p className="phonenum">1 hour is activity time</p>
                                    </div>
                                    <div className="sub3">
                                        <h5 className="phonname"><FontAwesomeIcon icon={faSackDollar} /> Price</h5>
                                        <p className="phonenum">${dat.prix}</p>
                                    </div>
                                </div>
                                <p className="wish">Wishing you an absolutely fantastic time experiencing this Activity! May every moment be filled with excitement, wonder, and pure enjoyment. Embrace the adventure, soak in the thrill, and create memories that will last a lifetime. Have a blast!</p>
                            </div>


                            <div className="commentaire">

                            </div>
                        </div>
                    );
                });
        }
    }

    return (
        <div>
            <NavBar />
            {detail()}
        </div>
    );
}
