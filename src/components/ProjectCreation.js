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
                    <p class="options">Option 1</p>
                </Col>
                <Col>
                    <p class="options">Option 2</p>
                </Col>
            </Row>
        </div>

        <div> 
            <h1 class="headers">Upload Information</h1>
            <br></br>
            <Row>
                <Col>
                    <h3 class="headers">Video Requirements</h3>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </Col>
                <Col>
                    <h3 class="headers">Audio Requirements</h3>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </Col>
            </Row>
        </div>

        <div>
            <h3>Steps</h3>
            <br></br>
            <Row>
                <Col>
                    <ol>
                        <li>SELECT VIDEO<input type="file" id="source_vid" name="source_vid"></input></li>
                            
                        <li>ENTER SCRIPT<input type="file" id="script_file" name="script_file"></input></li>
                        OR
                        <br></br>
                        TYPE SCRIPT
                        <br></br>
                        <textarea id="script_typed" name="script_typed" rows="4" cols="50">
                            Type desired script for target video here
                        </textarea>
                    </ol>
                </Col>
                <Col>
                    <ol start="3">
                        <li>SELECT AUDIO<input type="file" id="source_audio" name="source_audio"></input></li>
                        OR
                        <br></br>
                        RECORD AUDIO
                    </ol>
                </Col>
            </Row>
        </div>
        </>
    );

}

export default ProjectCreation;