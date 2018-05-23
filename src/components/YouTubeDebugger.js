import React from 'react'

class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate:8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = ()=> {
    this.setState({
      settings: {
      ...this.state.settings,
         bitrate: 12,
      }
    });
  }

  changeResolution = ()=> {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        },
      }
    });
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <label>{this.state.settings.bitrate}</label>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
        <label></label>
      </div>
    );
  }
}

export default YouTubeDebugger; 
