import React, { useState } from 'react';
import apiObjects from '../api/axios';
import Details from '../components/Details';
import '../styles/byGenre.css';

const apiDiscover = '/discover/movie';

const ByGenre = () => {
  const name = localStorage.getItem('genName');
  const id = localStorage.getItem('genId');

  const response = apiObjects.useDiscover(apiDiscover, id);
  const discovers = response.data?.results;
  // console.log(discovers);

  const [show, setShow] = useState(false);
  const [idMovie, setIdMovie] = useState();

  const handleClose = () => setShow(false);
  // const handleShow = () => {
  //   setShow(true);
  // };

  return (
    <>
      <div className='containerDiscover'>
        <h2 className='SubTitleGenre'>
          {name}
        </h2>
        <div className='discoverMovies'>
          {discovers?.map((discover) => {
            return (
              <>
                <img
                  className='poster'
                  src={`https://image.tmdb.org/t/p/w200${discover.poster_path}`}
                  alt="Poster"
                  onClick={() => {
                    setShow(true)
                    setIdMovie(discover.id)
                  }}
                />
              </>
            )
          })}
        </div>
      </div>
      {show && (
        <Details
          show={show}
          handleClose={handleClose}
          id={idMovie}
        />
      )}
    </>
  )
}

export default ByGenre
