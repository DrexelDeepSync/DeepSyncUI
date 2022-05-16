import React from 'react';
import Card from './Card';
import {  Row, Col } from "react-bootstrap";
import './Plans.css';

function Plans() {
  return <>
  <Row>
    <Col>
      <Card className='plans-card' title='Create A Lecture' body='Prepare your script, audio, and video, and then click Begin!' imageUrl='/images/zoomLecture_card_HOWITWORKS.jpg'  link='/slow-audio'></Card>
    </Col>
  </Row>
</>;
}

export default Plans;
