import React from 'react';
import Header from './Header';
import '../styles/header.css';
import cartel from '../images/cinema.jpg';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='cartelCinema'>
        <img
          src={cartel}
          alt="cartel"
          className='cartel'
        />
      </div>
      {children}
    </>
  )
}

export default Layout
