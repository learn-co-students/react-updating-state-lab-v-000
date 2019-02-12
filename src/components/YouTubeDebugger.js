import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <button className="bitrate" onClick={this.handleBitrateClick}>
          'Bitrate: 12'
        </button>
        <button className="resolution" onClick={this.handleResolutionClick}>
          '720p Resolution'
        </button>
      </React.Fragment>
    );
  }
}
