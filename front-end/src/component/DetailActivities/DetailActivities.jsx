import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailActivities() {
    const [dat, setDat] = useState({});
    const [Cin, setCin] = useState([]);
    const { id } = useParams();

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
                const cinemasResponse = await fetch(`http://127.0.0.1:8000/api/cinemas`);
                const cinemasData = await cinemasResponse.json();
                setCin(cinemasData);
            } catch (error) {
                console.error("Error fetching cinemas data:", error);
            }
        };
        fetchData();
    }, []);

    function detail() {
        if (parseInt(id) === 1) {
            return (
                <div>
                    {Cin.map((item) => (
                        <div key={item.id}>
                            <h1>{item.nom_cinema}</h1>
                            <p>{item.localisation}</p>
                            <img src={item.photo} alt="" />
                        </div>
                    ))}
                </div>
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
            {detail()}
        </div>
    );
}
