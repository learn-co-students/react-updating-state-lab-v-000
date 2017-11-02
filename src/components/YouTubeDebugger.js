// Code YouTubeDebugger Component Here
import React from 'react';

export default class YoutubeDebugger extends React.Component{
   constructor() {
    super();
 
    // Define the initial state:
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
  
    Bitrate=()=>{
      this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })

   }

   Resolution=()=>{
        this.setState({
        settings: {
        ...this.state.settings,
        video: {
        ...this.state.settings.video,
        resolution: '720p',
        }
    },
    });
   }

  render(){
      return(
          <div>
          <button className="bitrate" onClick={this.Bitrate}></button>
          <button className="resolution" onClick={this.Resolution}></button>
          </div>
      )
  }
}