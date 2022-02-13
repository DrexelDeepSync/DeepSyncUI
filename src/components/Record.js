//Source: https://github.com/mdn/web-dictaphone

import "./Record.css";

const recordButton = document.getElementById("record");
const soundClips = document.querySelector('.sound-clips');
const recordingLabel = document.getElementById("recording_label");
let isRecording = false;
let audioComplete = false;


//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');

  const constraints = { audio: true };
  let chunks = [];

  let onSuccess = function(stream) {
    console.log("HERE");

    const mediaRecorder = new MediaRecorder(stream);
    recordButton.onclick = function() {
      if (isRecording == false && audioComplete == false){
        mediaRecorder.start();
        recordingLabel.hidden = false;
        isRecording = true;
        console.log(mediaRecorder.state);
        console.log("recorder started");
       
      } else if (isRecording == true){
        mediaRecorder.stop();
        recordingLabel.hidden = true;
        isRecording = false;
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
       
        //mediaRecorder.requestData();
  
      }
      
    }
  
    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");

      const clipContainer = document.createElement('article');
      const audio = document.createElement('audio');
      const br = document.createElement('br');
      const reRecordButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      reRecordButton.textContent = 'Re-Record';
      reRecordButton.className = 'rerecord';

      clipContainer.appendChild(audio);
      clipContainer.appendChild(br);
      clipContainer.appendChild(reRecordButton);
      soundClips.appendChild(clipContainer);
      audioComplete = true;

      audio.controls = true;
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      reRecordButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        audioComplete = false;
      }

  
    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  }

  let onError = function(err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

} else {
   console.log('getUserMedia not supported on your browser!');
}



