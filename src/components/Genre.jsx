import React from 'react';
import '../styles/genre.css';
import apiObjects from '../api/axios';
import { useNavigate } from 'react-router-dom';

const apiGenre = '/genre/movie/list';

const Genre = () => {
  const response = apiObjects.useGenre(apiGenre);
  const genres = response.data?.genres;
  // console.log(genres);

  const navigate = useNavigate();

  return (
    <div className='containerGenre'>
      <h2 className='titleGenre'>Genre</h2>
      <div className="list-genres">
        {genres?.map((genre) => {
          return (
            <>
              <div
                className={`genre-${genre.id}  genre`}
                onClick={() => {
                  localStorage.setItem("genId", genre.id)
                  localStorage.setItem("genName", genre.name)
                  navigate('/ByGenre')
                }}
              >
                <i className="fa-solid fa-film icon-gen"></i> {genre.name} <i className="fa-solid fa-film icon-gen"></i>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Genre
