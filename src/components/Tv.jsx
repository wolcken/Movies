import React from 'react';
import apiObjects from '../api/axios';
import '../styles/series.css';

const apiSeries = '/tv/popular';

const Tv = () => {
    const response = apiObjects.useSeries(apiSeries);
    const trendingSeries = response.data?.results;
    // console.log(trendingSeries);

    return (
        <div className='series'>
            {trendingSeries?.map((serie) => {
                return (
                    <>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                            alt="Poster"
                            key={serie.id}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default Tv