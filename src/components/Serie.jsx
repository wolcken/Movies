import React from 'react'
import apiObjects from '../api/axios';

const Serie = (props) => {

    const idMovie = props.id;
    const apiDetail = `/tv/${idMovie}`;
    const response = apiObjects.useDetails(apiDetail);
    const details = response?.data;
    // console.log(details);

    return (
        <div className='Information'>
            {/* <h2 className='titleInfo'>{details?.title}</h2> */}
            <div className="detailsInfo">
                <section className="left">
                    <img
                        className='posterInfo'
                        src={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`}
                        alt="posterInfo"
                    />
                    <div className="leftDetails">
                        <span className='vote'>
                            <i className="fa-solid fa-star"></i>
                            {details?.vote_average}
                        </span>
                        <span className='tagline'>
                            {details?.tagline}
                        </span>
                    </div>
                </section>
                <section className='rigth'>
                    <h2 className='titleInfo'>{details?.name}</h2>
                    <h5>Description</h5>
                    <p>{details?.overview}</p>
                </section>
            </div>
        </div>
    )
}

export default Serie
