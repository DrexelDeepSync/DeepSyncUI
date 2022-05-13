import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {  Row, Col } from "react-bootstrap";
import './SlowAudio.css';
import * as ReactBootStrap from 'react-bootstrap'; 
import CollapsibleSection from './CollapsibleSection';
//import './Record.js';

const url = 'http://44.198.103.58:8080/';
const SlowAudio = () => {
    const [selectedAudioFile, setSelectedAudioFile] = useState();
    const [selectedScriptFile, setSelectedScriptFile] = useState();
    const [selectedVideoFile, setSelectedVideoFile] = useState();
	const [isAudioFilePicked, setIsAudioFilePicked] = useState(false);
    const [isScriptFilePicked, setIsScriptFilePicked] = useState(false);
    const [isVideoFilePicked, setIsVideoFilePicked] = useState(false);
    const [audioFileName, setAudioFileName] = useState();
    const [scriptFileName, setScriptFileName] = useState();
    const [videoFileName, setVideoFileName] = useState();
    const [audioFilePath, setAudioFilePath] = useState();
    const [scriptLoading, setScriptLoading] = useState(true);
    const [audioLoading, setAudioLoading] = useState(true);
    const [uploadVideoLoading, setUploadVideoLoading] = useState(true);
    const [generateVideoLoading, setGenerateVideoLoading] = useState(true);
    const changeScriptHandler = (event) => {
        setSelectedScriptFile(event.target.files[0]);
		setIsScriptFilePicked(true);
    }
    const handleScriptSubmission = () => {
        var scriptName = selectedScriptFile.name.split(".")[0];
        var scriptType = "."+selectedScriptFile.name.split(".")[1];
        var formData = new FormData();
        var script_url = url + '/uploadfile'; 
        console.log(formData)
        setScriptLoading(false);
		formData.append('file', selectedScriptFile);
        formData.append('fileName', scriptName);
        formData.append('fileType', scriptType); 
        for (var key of formData.entries()) {
                console.log(key);
            }

		fetch(
			script_url,
			{
				method: 'POST',
				body: formData,

			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setScriptFileName(result.message);
                var audio_section = document.getElementById("audio_section");
                audio_section.style.visibility = 'visible';
                setScriptLoading(true);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }
    const changeAudioHandler = (event) => {
		setSelectedAudioFile(event.target.files[0]);
		setIsAudioFilePicked(true);
	};
    /** 
    const handleAudioSubmission = () => {
        var name = selectedAudioFile.name.split(".")[0];
        var type = "."+selectedAudioFile.name.split(".")[1];
        var audio_url = url + '/uploadfile';
        var formData = new FormData();
        console.log(formData)
		formData.append('file', selectedAudioFile);
        formData.append('fileName', name);
        formData.append('fileType', type);
        for (var key of formData.entries()) {
                console.log(key);
            }

		fetch(
		    audio_url,
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setAudioFileName(result.message);
                //var script = document.getElementById("script_section");
                //script.style.visibility = 'visible';
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
    */
    const generateAudio = () =>{
        const data = {};
        var generate_url = url + '/slowaudio/generate';
        data['scriptPath'] = scriptFileName;
        data['audioPath'] = audioFileName;
        console.log(data);
        setAudioLoading(false);

        fetch(generate_url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            setAudioFilePath(data.message);
            setAudioLoading(true);
            var video = document.getElementById("video_section");
            video.style.visibility = 'visible';
            })
            .catch((error) => {
            console.error('Error:', error);
        });
        
    }
    const changeVideoHandler = (event) => {
        console.log(event.target.files[0])
        setSelectedVideoFile(event.target.files[0]);
		setIsVideoFilePicked(true);
    }
    const handleVideoSubmission = () => {
        var videoName = selectedVideoFile.name.split(".")[0];
        var videoType = "."+selectedVideoFile.name.split(".")[1];
        var formData = new FormData();
        var video_url = url + '/uploadfile';
        console.log(formData)
        console.log(videoName)
		formData.append('file', selectedVideoFile);
        formData.append('fileName', videoName);
        formData.append('fileType', videoType); 
        setUploadVideoLoading(false);
        for (var key of formData.entries()) {
                console.log(key);
            }

		fetch(
			video_url,
			{
				method: 'POST',
				body: formData,
                

			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setVideoFileName(result.message);
                var video_button = document.getElementById("gen_video");
                video_button.style.visibility = 'visible';
                setUploadVideoLoading(true);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }
    const generateVideo = async () => {
        const data = {};
        var generate_video_url = url + '/audiovisual/generate';
        data['audioPath'] = audioFilePath;
        data['videoPath'] = videoFileName;
        console.log(data);
        console.log(url);
        var windowObjectReference;
        var windowFeatures = "popup";
        setGenerateVideoLoading(false);
        const generation = await fetch(generate_video_url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            windowObjectReference = window.open(url+'/'+data.message, "Result", windowFeatures);
            setGenerateVideoLoading(true);
            })
            
            .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (<>
    <div>
        <Row>
            <h1 className="headers">Create Your Lecture</h1>
        </Row>
        <Row>
            <Col>
                <p>Upload your files below to begin the process. 
                    <br></br>
                    For best results, read and follow the requirements at each step.</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="collapsible-row">
            <Col>
                <CollapsibleSection name="script_reqs" defaultExpanded title="Script Requirements" >
                    <ul>
                        <li>Remove any undesired content, such as "Slide 1" or references.</li>
                        <li>Ensure that everything is spelled correctly.</li>
                    </ul>
                </CollapsibleSection>
            </Col>
            <Col>
                <CollapsibleSection id="audio_reqs" title="Audio Requirements">
                    <ul>
                        <li>Record your audio with as little background noise as possible.</li>
                        <li>Record at least 35 minutes of talking with few to no long pauses.</li>
                        <li>Ensure only your voice can be heard in the recording.</li>
                        <li>Ensure you spoke loudly and clearly throughout the recording.</li>
                    </ul>
                </CollapsibleSection>
            </Col>
            <Col>
                <CollapsibleSection id="video_reqs" title="Video Requirements">
                    <ul>
                        <li>Ensure you are looking straight at the camera.</li>
                        <li>Ensure your full face is clearly visible at all times.</li>
                        <li>Though optional, small movements in the video can make the final video look more natural.</li>
                    </ul>
                </CollapsibleSection>
            </Col>
        </Row>
            <Row>
                <Col>
                    <ol>
                        {/* or record audio
                        <br></br>
                        <p>OR</p>
                        <br></br>
                        <h5>RECORD AUDIO</h5>
                        <br></br>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <img id="record" src="./images/record_button.png"></img>
                        <h3 id="recording_label" hidden>RECORDING</h3> */}
                        <div id="script_section">
                            <li><h5>Upload Script</h5></li>
                            {/*}
                            <textarea id="script_typed" name="script_typed" rows="4" cols="50" placeholder=" Type Script Here ...">
                            </textarea>
                            <br></br>*/}
                            <input type="file" accept="text/*" id="source_script" multiple onChange={changeScriptHandler}></input>
                            {isScriptFilePicked ? (
                                <div>
                                    <p>Name: {selectedScriptFile.name}</p>
                                    <p>Type: {selectedScriptFile.type.split("/")[0]}</p>
                                    <p>Size: {selectedScriptFile.size} bytes</p>
                                    <p>
                                        Last Modified:{' '}
                                        {selectedScriptFile.lastModifiedDate.toLocaleDateString()}
                                    </p>
                                </div>
                            ) : (
                                <p>Select a file to show details</p>
                            )}
                            <input id="upload-script-button" type="submit" value="Upload Script" onClick={handleScriptSubmission}></input>
                            <div>{scriptLoading? '' : <ReactBootStrap.Spinner animation="border" />}</div>
                            <br></br>
                            <br></br>
                        </div>
                    </ol>
                </Col>
                <Col>
                    <ol start="2">
                        <div id="audio_section" style={{visibility: 'hidden'}}>
                            <li><h5>Generate Audio</h5></li>
                            <input id="gen_audio" type="submit" value="Generate Audio" onClick={generateAudio}></input>
                            <br></br>
                            <div>{audioLoading? '' : <ReactBootStrap.Spinner animation="border" />}</div>
                        </div>
                    </ol>
                </Col>
                <Col>
                    <ol start="3">
                        <div id="video_section"  style={{visibility: 'hidden'}}>
                            <li><h5>Select Video</h5><input type="file" id="source_vid" accept="video/*" name="source_vid" onChange={changeVideoHandler}></input></li>
                                {isVideoFilePicked ? (
                                        <div>
                                            <p>Filename: {selectedVideoFile.name}</p>
                                            <p>Filetype: {selectedVideoFile.type}</p>
                                            <p>Size in bytes: {selectedVideoFile.size}</p>
                                            <p>
                                                lastModifiedDate:{' '}
                                                {selectedVideoFile.lastModifiedDate.toLocaleDateString()}
                                            </p>
                                        </div>
                                    ) : (
                                        <p>Select a file to show details</p>
                                    )}
                                <input id="upload-video-button" type="submit" value="Upload Video" onClick={handleVideoSubmission}></input>
                                <br></br>
                                <div>{uploadVideoLoading? '' : <ReactBootStrap.Spinner animation="border" />}</div>
                                
                                    {/* Or record video 
                                <br></br>
                                <p>OR</p>
                                <br></br>
                                <h5>RECORD VIDEO</h5>
                                <br></br>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p> */}
                            <br></br>
                            <br></br>
                            <input id="gen_video" type="submit" value="Generate Video" onClick={generateVideo} style={{visibility: 'hidden'}}></input>
                            <br></br>
                            <div>{generateVideoLoading? '' : <ReactBootStrap.Spinner animation="border" />}</div>
                            <br></br>
                        </div>
                    </ol>
                    {/* Output Verification
                    <br></br>
                    <h5>AUDIO OUTPUT VERIFICATION</h5>
                    <div className="sound-clips">
                            </div> */}
                </Col>
            </Row>
            </div>
        </>)
}

export default SlowAudio;