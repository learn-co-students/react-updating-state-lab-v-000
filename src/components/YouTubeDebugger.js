// Code YouTubeDebugger Component Here
import React from 'react';
 
 export default class YouTubeDebugger extends React.Component {
   constructor() {
     super();
 
     this.state = {
       errors: [],
       user: null,
       settings: {
         bitrate: 8,
         video: {
           resolution: '1080p'
         }
       }
     }
   }
 
   changeRes = () => {
     this.setState( {
       settings: {
         ...this.state.settings,
         video: {
           ...this.state.settings.video,
           resolution: '720p',
         }
       }
     });
   }
 
   changeBitrate = () => {
     this.setState( {
       settings: {
         ...this.state.settings,
         bitrate: 12,
       }
     });
   }
 
   render () {
     return (
       <div>
         <button className='resolution' onClick={this.changeRes}>{this.state.settings.video.resolution}</button>
         <button className='bitrate' onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
       </div>
     );
   }
 }