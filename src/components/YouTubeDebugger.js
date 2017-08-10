// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } };
  }

  setBitrate = (event)=>{
    this.setState({settings: {...this.state.settings, bitrate: 12}});
  }

  setResolution = (event)=>{
    this.setState({settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}});
  }

  render(){
    return (<div>
        <button onClick={this.setBitrate} className="bitrate">Set Bitrate {this.state.settings.bitrate}</button>
        <button onClick={this.setResolution} className="resolution">Set Resolution {this.state.settings.video.resolution}</button>
      </div>);
  }
}
