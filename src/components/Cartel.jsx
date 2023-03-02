import React from 'react';
import cartel1 from '../images/cartel1.jpg';
import cartel2 from '../images/cartel2.jpg';
import '../styles/cartel.css';

const Cartel = () => {
    return (
        <div className='cartelCinema'>
            <img
                src={cartel1}
                alt="cartel"
                className='cartel'
            />
            <img
                src={cartel2}
                alt="cartel"
                className='cartel'
            />
        </div>
    )
}

export default Cartel
