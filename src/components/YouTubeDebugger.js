// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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
    };
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Bitrate: {this.state.settings.bitrate}, Resolution: {this.state.settings.video.resolution}</h1>
        <button onClick={this.handleClick} className='bitrate'>Bitrate</button>
        <button onClick={this.resolution} className='resolution'>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
