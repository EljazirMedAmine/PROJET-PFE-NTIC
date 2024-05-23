import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailActivities() {
    const [dat, setDat] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const activitesResponse = await fetch(`http://127.0.0.1:8000/api/activites/${id}`);
                const activitesData = await activitesResponse.json();
                setDat(activitesData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    return (

        <div>
            <h1>hello {id}</h1>
                <div key={dat.id}>
                    <h1>the {dat.nom}</h1>
                </div>
        </div>
    )
}
