import React from 'react';
import Card from './Card';
import {  Row, Col } from "react-bootstrap";
import './Plans.css';

function Plans() {
  return <>
  <Row>
    <Col>
      <Card title='Create A Lecture' body='Prepare your script, audio, and video, and then click Begin!' link='/slow-audio'></Card>
    </Col>
  </Row>
</>;
}

export default Plans;
