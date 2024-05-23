import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Activitie.css';

export default function Activitie() {
  const [dat, setDat] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/activites')
      .then((res) => { setDat(res.data); })
      .catch((error) => { console.error("Error fetching activity data:", error); });
    
    axios.get('http://127.0.0.1:8000/api/typeActivite')
      .then((res) => { setType(res.data); })
      .catch((error) => { console.error("Error fetching activity type data:", error); });
  }, []);

  return (
    <div className='parentActivites'>
      <h1>Activities</h1>
      <p>
        Dive into a world of endless excitement and exploration. Discover thrilling activities that promise unforgettable moments and enrich your life with every adventure.
      </p>
      <div>
        {dat.map((item) => (
          <div key={item.id} className="activityItem" >
            {type.length > 0 && type.map((it) => {  
              if (it.id_activite === item.id) {
                return (
                  <div key={it.id} className="backgroundImage" style={{ backgroundImage: `url(${it.photo})` }} data-aos="fade-up">
                    <div className="infoContainer">
                      <h2>{item.nom}</h2>
                      <p>{item.description}</p>
                        <button>{item.nom}<i className='bx bx-link-external'></i></button>
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
  );
}
