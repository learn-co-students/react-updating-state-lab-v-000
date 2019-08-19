// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    
    // initial state
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

  // update birate when '.bitrate' button is clicked
  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  // update video resolution when '.resolution' button is clicked
  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          Change resolution
        </button>
      </div>
    );
  }
}