import React from 'react';
import './GettingStarted.css';
import Card from './Card';
import Button from './Button';
import Plans from './Plans';

const GettingStarted = () => {
  return <><div class="row">
  <div class="column"><h3 className='howitworks'> How It Works</h3>
  <p> At DeepSync, we have two main options of audio and video generation depending on how much time you have on your schedule.
   In the fast training plan, you simply upload an audio clip of you speaking, then type a script that will be the lecture content you want to present.
   Next, you can upload a video clip of yourself. With the power of our fast generation cloning, you will have a file to output and show in a matter of minutes.
  </p>
  <br></br>
  <p> If you have a few days to spare and would like to get a headstart on some long form lecture creating, you can select our slow generation option.
  This option will allow you to upload a multitude of files to the site and in the background we use both video and audio cloning technology to make a replica depending on what you provide!
  </p>
  </div>
  <div class="column"><img src='/images/lecture.png' alt=''></img></div>
</div>
<div>
  <h2>Choose from our 2 Plans</h2>
  <p>Choose from our 2 plans depending on how much time you have in your schedule. </p>
</div>
<Plans></Plans>
</>;
};

export default GettingStarted;
