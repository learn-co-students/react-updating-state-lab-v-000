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
        video: { resolution: '1080p' }
      }
    };
  }

  handleBitrateClick = () => {
    this.setState(formerState => ({
      settings: {
        ...this.state.settings,
        bitrate: 12,
        },
    }))
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      },
    });
  }


  render() {
    return (
      <div>
        <button onClick={this.handleBitrateClick} className="bitrate"></button>
        <button onClick={this.handleResolutionClick} className="resolution"></button>
      </div>
    );
  }
}

export default YouTubeDebugger;
