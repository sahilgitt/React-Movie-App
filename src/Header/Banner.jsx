import React, { useEffect, useState } from 'react';
import { imageUrl, latestMovies } from '../Url';
import axios from 'axios';

const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    axios.get(latestMovies)
      .then((response) => setBanner(response.data.results));
  }, []);

  useEffect(() => {
    if (banner.length > 0) {
      const randomIndex = Math.floor(Math.random() * banner.length);
      setRandomIndex(randomIndex);
    }
  }, [banner]);

  return (
    <div style={{ position: 'relative' }}>
      {banner.length > 0 && (
        <>
          <img style={{ height: "670px", width: "100%" }} src={imageUrl + banner[randomIndex]?.backdrop_path} alt="" />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black' }}>
            <h1>{banner[randomIndex]?.original_title}</h1>
            <h2>Overview:
              <h3>{banner[randomIndex]?.overview}</h3>
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;


