import React, { useState } from 'react';
import '../styles/treding.css';
import apiObjects from '../api/axios';
import Movie from './Movie';
import Cartel from './Cartel';

const apiTrending = 'trending/movie/day';

const Trending = () => {

  const response = apiObjects.useTrending(apiTrending);
  const trendings = response.data?.results;
  // console.log(trendings);

  const [showCartel, setShowCartel] = useState(true)
  const [showInfo, setShowInfo] = useState(false);

  const [info, setInfo] = useState(null);
  const handleInfo = (inf) => {
    setInfo(inf)
    setShowInfo(true)
    setShowCartel(false)
  }

  return (
    <div className='containerTreding'>
      {showCartel && (<Cartel />)}
      {showInfo && (<Movie id={info} />)}
      <h2 className='tredingTitle'>Treding</h2>
      <div className="movies">
        {trendings?.map((treding) => {
          return (
            <>
              {/* <div className='movie' key={treding.id}> */}
                <img
                  className='poster'
                  src={`https://image.tmdb.org/t/p/w300${treding.poster_path}`}
                  alt="poster"
                  onClick={() => handleInfo(treding.id)}
                />
                {/* <p className='title'>
                  {treding.title}
                </p> */}
              {/* </div> */}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
