// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';

 class YouTubeDebuggerß extends React.Component{
  constructor() {
    super()
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

  render(){
    return(
      <button class='bitrate'></button>
    )
  }
 }
 export default YouTubeDebuggerß;