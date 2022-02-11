import React from 'react';
import Card from './Card';
import './Plans.css';

function Plans() {
  return <><div class="row">
  <div class="column"><Card title='Plan 1' imageUrl='/images/img-1.jpg' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'></Card></div>
  <div class="column"> <Card title='Plan 2' imageUrl='/images/img-2.jpg' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'></Card></div>
</div>
</>;
}

export default Plans;
