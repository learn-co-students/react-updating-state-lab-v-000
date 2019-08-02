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

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render(){
    return(
      <button class='bitrate' onClick={this.setBitrate}></button>
    )
  }
 }
 export default YouTubeDebuggerß;