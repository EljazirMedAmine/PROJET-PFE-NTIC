import { Fragment, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./DetailActivities.css";
import NavBar from "../NavBar";

export default function DetailActivities() {
    const [dat, setDat] = useState({});
    const { id } = useParams();
    const [cinemas, setCinemas] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hoverIndex, setHoverIndex] = useState(null);

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
                            Cinemas in Tangier feature a mix of modern multiplexes and historic theaters, showcasing both international films and Moroccan cinema.</p>
                        <div className="carousel">
                            {cinemas.map((cinema, index) => (
                                <div
                                    key={cinema.id}
                                    className={`carousel__item ${getClassForItem(
                                        index
                                    )}`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <img src={cinema.photo} alt={cinema.nom_cinema} />
                                    <div className="carousel__text">
                                        {/* <h3>{cinema.nom_cinema}</h3>
                                    <a
                                        href={cinema.localisation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Location{" "}
                                        <i className="bx bx-link-external"></i>
                                    </a> */}

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
            return (
                <div>
                    <h1>{dat.nom}</h1>
                    <img src="" alt="" />
                </div>
            );
        }
    }


    return (
        <div>
            <NavBar/>
            {detail()}
        </div>
    );
}
