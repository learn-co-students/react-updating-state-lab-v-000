// Code YouTubeDebugger Component Here
import React from 'react';


export default class YouTubeDebugger extends React.Component{
  constructor(){

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
  setBitrate = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  setResolution = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          resolution: "720p"
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.setBitrate} className="bitrate">Bitrate</button>
        <button onClick={this.setResolution} className="resolution">Resolution</button>
      </div>
    )

  }


};
