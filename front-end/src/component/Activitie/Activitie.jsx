import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";

import "./Activitie.css";
import { Link } from "react-router-dom";

export default function Activitie() {
    const [dat, setDat] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activitesResponse = await fetch(
                    "http://127.0.0.1:8000/api/activites"
                );
                const activitesData = await activitesResponse.json();
                setDat(activitesData);

                const typeActiviteResponse = await fetch(
                    "http://127.0.0.1:8000/api/typeActivite"
                );
                const typeActiviteData = await typeActiviteResponse.json();
                setType(typeActiviteData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <NavBar />
            <div className="parentActivites">
                <h1>Activities</h1>
                <p>
                    "Dive into a world of endless excitement and exploration.
                    Discover thrilling activities that promise unforgettable
                    moments and enrich your life with every adventure."
                </p>
                <div>
                    {dat.map((item) => (
                        <div key={item.id} className="activityItem">
                            {type.length > 0 &&
                                type.map((it) => {
                                    if (it.id_activite === item.id) {
                                        return (
                                            <div
                                                key={it.id}
                                                className="backgroundImage"
                                                style={{
                                                    backgroundImage: `url(${it.photo})`,
                                                }}
                                                data-aos="fade-up"
                                            >
                                                <div className="infoContainer">
                                                    <h2>{item.nom}</h2>
                                                    <p>
                                                        {item.description.substring(
                                                            0,
                                                            250
                                                        )}
                                                        ...
                                                    </p>
                                                    <Link
                                                        to={`/activities/${item.id}`}
                                                    >
                                                        <button>
                                                            {item.nom}
                                                            <i className="bx bx-link-external"></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
