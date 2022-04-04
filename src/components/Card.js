import React from 'react';
import './Card.css';
import Button from './Button';
import { Link } from 'react-router-dom';


function Card({title, imageUrl, body, link}) {
  return <div className='card-container'>
      <div className='image-container'>
          <img src={imageUrl} alt=''/>
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-body'>
          <p>{body}</p>
      </div>
      <div className='btn'>
        <Button component={Link} link={link}>
          View More
        </Button>
      </div>
  </div>;
}

export default Card;
