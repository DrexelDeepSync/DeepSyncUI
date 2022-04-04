import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {  Row, Col } from "react-bootstrap";
import './FastAudio.css';
import * as ReactBootStrap from "react-bootstrap";
//import './Record.js';


const url = 'http://54.226.245.141:8080';
const FastAudio = () => {
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
    const [videoFileLink, setVideoFileLink] = useState();
    const [loading, setLoading] = useState(true);
    const changeAudioHandler = (event) => {
		setSelectedAudioFile(event.target.files[0]);
		setIsAudioFilePicked(true);
	};
    const handleAudioSubmission = () => {
        var name = selectedAudioFile.name.split(".")[0];
        var type = "."+selectedAudioFile.name.split(".")[1];
        var formData = new FormData();
        var audio_url = url + '/uploadfile';
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
                var script = document.getElementById("script_section");
                script.style.visibility = 'visible';
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
    const changeScriptHandler = (event) => {
        setSelectedScriptFile(event.target.files[0]);
		setIsScriptFilePicked(true);
    }
    const handleScriptSubmission = () => {
        var scriptName = selectedScriptFile.name.split(".")[0];
        var scriptType = "."+selectedScriptFile.name.split(".")[1];
        var formData = new FormData();
        var script_audio = url + '/uploadfile';
        console.log(formData)
		formData.append('file', selectedScriptFile);
        formData.append('fileName', scriptName);
        formData.append('fileType', scriptType); 
        for (var key of formData.entries()) {
                console.log(key);
            }

		fetch(
			script_audio,
			{
				method: 'POST',
				body: formData,

			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setScriptFileName(result.message);
                var audio_button = document.getElementById("gen_audio");
                audio_button.style.visibility = 'visible';
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }
    const generateAudio = () =>{
        const data = {};
        var generate_audio = url + '/fastaudio/generate';
        data['scriptPath'] = scriptFileName;
        data['audioPath'] = audioFileName;
        console.log(data);

        fetch(generate_audio, {
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
			})
			.catch((error) => {
				console.error('Error:', error);
			});
    }
    const generateVideo = async () => {
        const data = {};
        var audio_visual_url = url + '/audiovisual/generate';
        data['audioPath'] = audioFilePath;
        data['videoPath'] = videoFileName;
        console.log(data);
        console.log(url);
        var windowObjectReference;
        var windowFeatures = "popup";
        setLoading(false);
        const generation = await fetch(audio_visual_url, {
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
            setLoading(true);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (<>
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
                        <div id="audio_section">
                            <li>
                                <h5>SELECT AUDIO</h5>
                                <div id="uploaded_player">
                                    <input type="file" accept="audio/*" id="source_audio" multiple onChange={changeAudioHandler}></input>
                                </div>
                                {isAudioFilePicked ? (
                                    <div>
                                        <p>Filename: {selectedAudioFile.name}</p>
                                        <p>Filetype: {selectedAudioFile.type}</p>
                                        <p>Size in bytes: {selectedAudioFile.size}</p>
                                        <p>
                                            lastModifiedDate:{' '}
                                            {selectedAudioFile.lastModifiedDate.toLocaleDateString()}
                                        </p>
                                    </div>
                                ) : (
                                    <p>Select a file to show details</p>
                                )}
                                
                            </li>
                            <br></br>
                            <input type="submit" value="Upload Audio" onClick={handleAudioSubmission}></input>
                        </div>
                        {/* or record audio
                        <br></br>
                        <p>OR</p>
                        <br></br>
                        <h5>RECORD AUDIO</h5>
                        <br></br>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
                        <img id="record" src="./images/record_button.png"></img>
                        <h3 id="recording_label" hidden>RECORDING</h3> */}
                        <div id="script_section"  style={{visibility: 'hidden'}}>
                            <li><h5>SELECT SCRIPT</h5></li>
                            {/*}
                            <textarea id="script_typed" name="script_typed" rows="4" cols="50" placeholder=" Type Script Here ...">
                            </textarea>
                            <br></br>*/}
                            <div id="uploaded_player">
                                        <input type="file" accept="text/*" id="source_script" multiple onChange={changeScriptHandler}></input>
                                    </div>
                                    {isScriptFilePicked ? (
                                        <div>
                                            <p>Filename: {selectedScriptFile.name}</p>
                                            <p>Filetype: {selectedScriptFile.type}</p>
                                            <p>Size in bytes: {selectedScriptFile.size}</p>
                                            <p>
                                                lastModifiedDate:{' '}
                                                {selectedScriptFile.lastModifiedDate.toLocaleDateString()}
                                            </p>
                                        </div>
                                    ) : (
                                        <p>Select a file to show details</p>
                                    )}
                            <br></br>
                            <input type="submit" value="Upload Script" onClick={handleScriptSubmission}></input>
                            <br></br>
                            <br></br>
                            <input id="gen_audio" type="submit" value="Generate Audio" onClick={generateAudio}  style={{visibility: 'hidden'}}></input>
                        </div>
                    </ol>
                </Col>
                <Col>
                    <ol start="3">
                        <div id="video_section"  style={{visibility: 'hidden'}}>
                            <li><h5>SELECT VIDEO</h5><input type="file" id="source_vid" accept="video/*" name="source_vid" onChange={changeVideoHandler}></input></li>
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
                                <br></br>
                                <input type="submit" value="Upload Video" onClick={handleVideoSubmission}></input>
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
                            <div>{loading? '' : <ReactBootStrap.Spinner animation="border" />}</div>
                            <br></br>
                        </div>
                    </ol>
                    {/* Output Verification
                    <br></br>
                    <h5>AUDIO OUTPUT VERIFICATION</h5>
                    <div class="sound-clips">
                            </div> */}
                </Col>
            </Row>
        </div></>)
}

export default FastAudio;