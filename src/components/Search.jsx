import React, { useState } from 'react'
import { useMovieSearchContext } from '../contexts/SearchProvider'
import Cartel from './Cartel';
import Information from './Information';

const Search = () => {

  const movies = useMovieSearchContext();
  // console.log(movies);

  const [showCartel, setShowCartel] = useState(true)
  const [showInfo, setShowInfo] = useState(false);

  const [info, setInfo] = useState(null);
  const handleInfo = (inf) => {
    setInfo(inf)
    setShowInfo(true)
    setShowCartel(false)
  }
  
  return (
    <div>
      {showCartel && (<Cartel />)}
      {showInfo && (<Information id={info} />)}
      <div className="movies">
        {movies?.map((movie) => {
          return (
            <>
              <div className='movie' key={movie.id}>
                <img
                  className='poster'
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt="poster"
                  onClick={() => handleInfo(movie.id)}
                />
                <p className='title'>
                  {movie.title}
                </p>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Search
