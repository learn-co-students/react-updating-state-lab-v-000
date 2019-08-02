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

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeRes = () => {

  }
  
  render(){
    return(
      <div>
        <button class='bitrate' onClick={this.changeBitrate}>Set Bitrate to 12</button>
        <button class='resolution' onClick={this.changeRes}>Change Resolution to 720</button>
      </div>
    )
  }
 }
 export default YouTubeDebuggerß;