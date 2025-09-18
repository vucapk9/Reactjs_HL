import React, { Component } from 'react';
import NvvEventComp from './components/NvvEventComp';
import NvvventCompClass from './components/NvvEventCompClass';
import NvvEventForm1 from './components/NvvEventForm1';
import NvvEventForm2 from './components/NvvEventForm2';

class NvvApp extends Component {
  render() {
    return (
       <div className='container border'>
          <h1 className='text-center'> Nguyễn Văn Vũ <br/>ReactJs - Form - Event</h1>
          <hr/>

          <NvvEventComp />

          <NvvventCompClassEventCompClass />

          <NvvEventForm1 />

          <NvvEventForm2 />
      </div>
    );
  }
}

export default NvvApp;