import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted />
      <h1 color='#2F95C5'>Lecturing Made Easy</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link = '/getting-started'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
// src='/videos/classroom.mp4'