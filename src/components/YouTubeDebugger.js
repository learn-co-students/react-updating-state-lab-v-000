import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleBitrateClick = () => {
    let newBitrate = 12;
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: newBitrate
      }
    });
  };

  handleResolutionClick = () => {
    let newResolution = "720p";
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: newResolution
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>
          Increase Bitrate
        </button>
        <button className="resolution" onClick={this.handleResolutionClick}>
          Change Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
