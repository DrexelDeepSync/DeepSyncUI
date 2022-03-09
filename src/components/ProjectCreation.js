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
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <a class="btn btn-primary options" href="/upload-information">
                        <h3 className = "fastTitle"> Option 1: </h3>
                        <img src="./images/fastGeneration_GettingStarted.png" alt="wrapkit" class="fastPlan" />
                        <p class="fastDescription"> Have only a limited amount of time or creating your lecture last minute? Choose our fast generation plan and test the result!</p>
                    </a>
                </Col>
                <Col>
                    <a class="btn btn-primary options" >
                        <h3 className = "slowTitle"> Option 2: </h3>
                        <img src="./images/slowGeneration_GettingStarted.png" alt="wrapkit" class="slowPlan" />
                        <p class="slowDescription"> Are you looking to create your lecture content with a few days to spare? Choose our slow generation plan and get even more accurate videos! </p>
                    </a>
                </Col>
            </Row>
        </div>


        </>
    );

}

export default ProjectCreation;
