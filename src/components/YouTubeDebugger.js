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

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() {
    return (
      <div>
        <p>this.state.timesClicked}</p>
        <button className="resolution" onClick={this.updateResolution}>Click me!</button>
        <button className="bitrate" onClick={this.updateBitrate}>Click me!</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
