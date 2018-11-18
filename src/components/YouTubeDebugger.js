
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state={
      errors: [],
      user: null,
      settings:{
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bit12 = () => {
    console.log(this.state);
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      }
    }, () => console.log(this.state.settings.bitrate))
  }
  res720 = () => {
    console.log(this.state);
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.settings.video,
          resolution: '720p',
        }
      }
    }, () => console.log(this.state.settings.video.resolution))
  }
  render(){
    return (
      <div>
        <button class="bitrate" onClick={this.bit12}>Change to 12</button>
        <button class="resolution" onClick={this.res720}>Change to 720p</button>
      </div>
    )
  }

}
