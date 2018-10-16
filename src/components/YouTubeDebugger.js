// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors : [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleButtonOne = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  handleButtonTwo = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          resolution: '720p',
        }
      }
    }, () => console.log(this.state.settings.video.resolution))
  }

  render() {
    return (<div>
      <button className='bitrate' onClick={this.handleButtonOne}>{this.state.settings.bitrate}</button>
      <button className='resolution' onClick={this.handleButtonTwo}>{this.state.settings.video.resolution}</button>
    </div>)
  }
}

export default YouTubeDebugger;
