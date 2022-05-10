import React from 'react';
import './GettingStarted.css';
import Card from './Card';
import Button from './Button';
import Plans from './Plans';
import {  Row, Col } from "react-bootstrap";

const GettingStarted = () => {
  return <>
  <Row>
  <Col>
    <h2 className='howitworks'>How It Works</h2>
    <p> With DeepSync, you can take less than 40 minutes of speech and transform it into hours of lecture material. </p>
    <p> Simply upload the script for your lecture, a clip of you speaking, and a video or picture of yourself, and then walk away from the computer.
     From there, we use speech cloning technology and lip-syncing to make your lectures!
    </p>
  </Col>
  <Col><video autoPlay loop muted className='howitworks-vid'><source src='./images/zoomLecture_HOWITWORKS.mp4' type='video/mp4'/></video></Col>
</Row>
<Row>
  <h2 className='getstartednow-title'>Get Started Now!</h2>
</Row>
<Plans></Plans>
</>;
};

export default GettingStarted;
