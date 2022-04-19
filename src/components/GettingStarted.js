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
    <h3 className='howitworks'>How It Works</h3>
    <p> With DeepSync, you can take less than 40 minutes of speech and transform it into hours of lecture material. </p>
    <p> Simply upload the script for your lecture, a clip of you speaking, and a video or picture of yourself, and then walk away from the computer.
     From there, we use speech cloning technology and lip-syncing to make your lectures!
    </p>
  </Col>
  <Col><img src='/images/lecture.png' alt=''></img></Col>
</Row>
<Row>
  <h2>Get Started Now!</h2>
</Row>
<Plans></Plans>
</>;
};

export default GettingStarted;
