import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {  Row, Col } from "react-bootstrap";
import "./ProjectCreation.css"

function ProjectCreation () {
    return (
        <>
        <div>
            <h1 class="headers">Project Creation</h1>
            <Row>
                <Col>
                    <a class="btn btn-primary options" href="/upload-information">Option 1</a>
                </Col>
                <Col>
                    <a class="btn btn-primary options" href="/upload-information">Option 2</a>
                </Col>
            </Row>
        </div>

       
        </>
    );

}

export default ProjectCreation;