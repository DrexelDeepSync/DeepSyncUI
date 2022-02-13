// set up basic variables for app

const recordButton = document.querySelector('.recordButton');
const stopButton = document.querySelector('.stopButton');
const soundClips = document.querySelector('.sound-clips');
const mainSection = document.querySelector('.main-controls');
const recordingLabel = document.getElementById("recording_label");

// disable stopButton button while not recording



//main block for doing the audio recording

if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported.');
  stopButton.disabled = true;

  const constraints = { audio: true };
  let chunks = [];

  let onSuccess = function(stream) {
    const mediaRecorder = new MediaRecorder(stream);


    recordButton.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      recordingLabel.removeAttribute("hidden");
      recordButton.style.background = "red";

      stopButton.disabled = false;
      recordButton.disabled = true;
    }

    stopButton.onclick = function() {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      recordingLabel.hidden = true;
      recordButton.style.background = "";
      recordButton.style.color = "";
      // mediaRecorder.requestData();

      stopButton.disabled = true;
      recordButton.disabled = false;
    }

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stopButton() called.");

      const clipName = "recorded_audio"

      const clipContainer = document.createElement('article');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';

      if(clipName === null) {
        clipLabel.textContent = 'My unnamed clip';
      } else {
        clipLabel.textContent = clipName;
      }

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      const audioURL = window.URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function(e) {
        let evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
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


