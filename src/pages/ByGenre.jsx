import React, { useState } from 'react';
import apiObjects from '../api/axios';
import Movie from '../components/Movie';
import '../styles/byGenre.css';

const apiDiscover = '/discover/movie';

const ByGenre = () => {
  const name = localStorage.getItem('genName');
  const id = localStorage.getItem('genId');

  const response = apiObjects.useDiscover(apiDiscover, id);
  const discovers = response.data?.results;
  // console.log(discovers);

  const [showInfo, setShowInfo] = useState(false);

  const [info, setInfo] = useState(null);
  const handleInfo = (id) => {
    setInfo(id)
    setShowInfo(true)
  }

  return (
    <>
      <div className='containerDiscover'>
        <h2 className='SubTitleGenre'>
          {name}
        </h2>
        {showInfo && (<Movie id={info} />)}
        <div className='discoverMovies'>
          {discovers?.map((discover) => {
            return (
              <>
                <img
                  className='poster'
                  src={`https://image.tmdb.org/t/p/w200${discover.poster_path}`}
                  alt="Poster"
                  onClick={() => handleInfo(discover.id)}
                />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ByGenre
