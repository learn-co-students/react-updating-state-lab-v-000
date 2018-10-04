// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor() {
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
    };
  }

  updateBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  updateRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p',
        },
      },
    });
  }

  render() {
    return (
      <div>
        <button onClick ={this.updateBit} className="bitrate">Change Bit</button>
        <button onClick={this.updateRes} className="resolution">Change Res</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
