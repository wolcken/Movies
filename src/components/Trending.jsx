import React, { useState } from 'react';
import '../styles/treding.css';
import apiObjects from '../api/axios';
import Details from './Details';

const apiTrending = 'trending/movie/day';

const Trending = () => {

  const response = apiObjects.useTrending(apiTrending);
  const trendings = response.data?.results;
  // console.log(trendings);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <div className='containerTreding'>
      <h2 className='tredingTitle'>Treding</h2>
      <div className="movies">
        {trendings?.map((treding) => {
          return (
            <>
              <div className='movie' key={treding.id}>
                <img
                  className='poster'
                  src={`https://image.tmdb.org/t/p/w300${treding.poster_path}`}
                  alt="poster"
                  onClick={handleShow}
                />
                <p className='title'>
                  {treding.title}
                </p>
              </div>
              {show && (
                <Details id={treding.id} />
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Trending
