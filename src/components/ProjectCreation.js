import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {  Row, Col } from "react-bootstrap";
import "./ProjectCreation.css";
import Card from './Card';
import Plans from "./Plans";

function ProjectCreation () {
    return (
        <>
        <div>
            <h1 class="headers">Project Creation</h1>
            <Row>
                <Col>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Plans></Plans>
            </Row>
        </div>


        </>
    );

}

export default ProjectCreation;
