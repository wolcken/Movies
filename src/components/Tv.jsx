import React, { useState } from 'react';
import apiObjects from '../api/axios';
import '../styles/series.css';
import Serie from './Serie';

const apiSeries = '/tv/top_rated';
const numPage = 1;

const Tv = () => {
    const response = apiObjects.useSeries(apiSeries, numPage);
    const series = response.data?.results;
    // console.log(series);

    const [showInfo, setShowInfo] = useState(false);

    const [info, setInfo] = useState(null);
    const handleInfo = (id) => {
        setInfo(id)
        setShowInfo(true)
    }

    return (
        <div className='containerSeries'>
            {showInfo && (<Serie id={info} />)}
            <h2>Series</h2>
            {series?.map((serie) => {
                return (
                    <>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                            alt="Poster"
                            key={serie.id}
                            className='poster'
                            onClick={() => handleInfo(serie.id)}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Tv