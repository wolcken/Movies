import React from 'react';
import apiObjects from '../api/axios';
import Modal from 'react-bootstrap/Modal';
import '../styles/details.css';

const Details = ({ show, handleClose, id }) => {

  const apiDetail = `/movie/${id}`;
  const response = apiObjects.useDetails(apiDetail);
  const details = response?.data;
  // console.log(details);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{details?.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="posterDetails">
            {/* <img src={`https://image.tmdb.org/t/p/w200${details.poster_path}`} alt="" /> */}
            <img
              className='posterDetail'
              src={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`}
              alt="posterDetail"
            />
          </div>
          <div className="infoDetails">
            <p className="release">Release Date {details?.release_date}</p>
            <p className='resumen'>{details?.overview}</p>
            <p className='vote'>
              <i class="fa-solid fa-star"></i>
              {details?.vote_average}
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Details
