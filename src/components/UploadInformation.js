import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {  Row, Col } from "react-bootstrap";
import './UploadInformation.css';

function UploadInformation() {
    return ( <>

    <div>
        <h1 class="headers">Upload Information</h1>
        <Row>
            <Col>
        <text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</text>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3 class="headers">Video Requirements</h3>
                <ul>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut  </li>
                    <li>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    <li>sed quia consequuntur magni dolores eos qui ratione voluptatem</li>
                </ul>
            </Col>
            <Col>
                <h3 class="headers">Audio Requirements</h3>
                <ul>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut  </li>
                    <li>sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    <li>sed quia consequuntur magni dolores eos qui ratione voluptatem</li>
                </ul>
            </Col>
        </Row>
    </div><div>
            <h3>Steps</h3>
            <Row>
                <Col>
                    <ol>
                        <li>SELECT VIDEO<input type="file" id="source_vid" name="source_vid"></input></li>
                        <text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</text>

                        <li>ENTER SCRIPT<input type="file" id="script_file" name="script_file"></input></li>
                        <text>OR</text>
                        <br></br>
                        <text>TYPE SCRIPT</text>
                        <br></br>
                        <text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</text>
                        <textarea id="script_typed" name="script_typed" rows="4" cols="50">
                            Type script here...
                        </textarea>
                    </ol>
                </Col>
                <Col>
                    <ol start="3">
                        <li>SELECT AUDIO<input type="file" id="source_audio" name="source_audio"></input></li>
                        <text>OR</text>
                        <br></br>
                        <text>RECORD AUDIO</text>
                        <br></br>
                        <text>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</text>
                    </ol>
                    <text>AUDIO OUTPUT VERIFICATION</text>

                </Col>
            </Row>
        </div></>)
}

export default UploadInformation;