import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {  Row, Col } from "react-bootstrap";
import './UploadInformation.css';
import './Record.js';

function UploadInformation() {
    return ( <>
    <div>
        <h1 class="headers">Upload Information</h1>
        <Row>
            <Col>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
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
            <h2>Steps</h2>
            <Row>
                <Col>
                    <ol>
                        <li><h5>SELECT VIDEO</h5><input type="file" id="source_vid" name="source_vid"></input></li>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <br></br>
                        <li><h5>ENTER SCRIPT</h5><input type="file" id="script_file" name="script_file"></input></li>
                        <br></br>
                        <p>OR</p>
                        <br></br>
                        <h5>TYPE SCRIPT</h5>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <textarea id="script_typed" name="script_typed" rows="4" cols="50">
                            Type script here...
                        </textarea>
                    </ol>
                </Col>
                <Col>
                    <ol start="3">
                        <li>
                                <h5>SELECT AUDIO</h5>
                                <input type="file" accept="audio/*" id="source_audio"></input>
                        </li>
                        <audio id="player" controls>
                        </audio>
 
                        <br></br>
                        <p>OR</p>
                        <br></br>
                        <h5>RECORD AUDIO</h5>
                        <br></br>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <img id="record" src="./images/record_button.png" onClick="toggleAudio()" ></img>
                        <script src="./Record.js"></script>


                        <div class="wrapper">
                            <section class="main-controls">
                                <div id="buttons">
                                    <button class="recordButton">Record</button>
                                    <button class="stopButton">Stop</button>
                                </div>
                            </section>
                            <section class="sound-clips">
                            </section>
                        </div>

                    </ol>
                    <br></br>
                    <h5>AUDIO OUTPUT VERIFICATION</h5>

                </Col>
            </Row>
        </div></>)
}

export default UploadInformation;