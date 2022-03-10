import React from 'react';
import Card from './Card';
import './Plans.css';

function Plans() {
  return <><div class="row">
  <div class="column"><Card title='Plan 1' imageUrl='/images/fastGeneration_GettingStarted.png' body='Have only a limited amount of time or creating your lecture last minute? Choose our fast generation plan and test the result!'></Card></div>
  <div class="column"> <Card title='Plan 2' imageUrl='/images/slowGeneration_GettingStarted.png' body='Are you looking to create your lecture content with a few days to spare? Choose our slow generation plan and get even more accurate videos'></Card></div>
</div>
</>;
}

export default Plans;
