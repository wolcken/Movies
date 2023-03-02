import React from 'react';
import cartel from '../images/cinema.jpg';
import '../styles/cartel.css';

const Cartel = () => {
    return (
        <div className='cartelCinema'>
            <img
                src={cartel}
                alt="cartel"
                className='cartel'
            />
        </div>
    )
}

export default Cartel
