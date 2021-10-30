import React from 'react';
import './Card.css';

export const Card = ({ title, image, date, number }) => {
  return (
    <div className='card-container'>
      <img src={image} alt='decorative page design' />
      <span className='issue-data'>
        <p>{date}</p>
        <p>{number}</p>
      </span>
      <h1>{title}</h1>
    </div>
  );
};
