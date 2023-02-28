import React from 'react';
import '../styles/genre.css';
import apiObjects from '../api/axios';

const apiGenre = '/genre/movie/list';

const Genre = () => {
  const response = apiObjects.useGenre(apiGenre);
  const genres = response.data?.genres;
  // console.log(genres);
  return (
    <div className='containerGenre'>
      <h2 className='titleGenre'>Genre</h2>
      <div className="list-genres">
        {genres?.map((genre) => {
          return (
            <div
              className={`genre-${genre.id}  genre`}
              onClick={() => {
                console.log(`${genre.name}`)
              }}>
              <i className="fa-solid fa-film icon-gen"></i> {genre.name} <i className="fa-solid fa-film icon-gen"></i>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Genre
