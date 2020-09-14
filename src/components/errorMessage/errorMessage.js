import React from 'react';
import './errorMessage.css';
import img from './err.png';

const ErrorMessage = () => {
  return (
    <>
      {/* <img src={process.env.PUBLIC_URL + '/img/err.png'} alt="error"/> */}
      <img src={img} alt="error"/>
      <span>Something went wrong</span>
    </>
  )
}

export default ErrorMessage;