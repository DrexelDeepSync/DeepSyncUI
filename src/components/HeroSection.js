import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted><source src='./images/zoomLecture_MAINPAGE.mp4' type='video/mp4'/></video>
      <h1 className='mainTitle'>Lecturing Made Easy</h1>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' link = '/getting-started'>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
// src='/videos/classroom.mp4'