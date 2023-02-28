import React from 'react';
import apiObjects from '../api/axios';
import '../styles/details.css';

const Details = (props) => {
  const apiDetail = `/movie/${props.id}`;
  const response = apiObjects.useDetails(apiDetail);
  const details = response?.data;
  // console.log(details);

  return (
    <div className='containerDetails'>
      <h2>Details</h2>
      <p>{details?.original_title}</p>
      <p>{props.id}</p>
    </div>
  )
}

export default Details
