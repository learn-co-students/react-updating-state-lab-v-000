import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p',
      },
    },
  };

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p',
        },
      },
    });
  };

  render() {
    const { settings: { bitrate, video: { resolution } } } = this.state;
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Bitrate: {bitrate}
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          Resolution: {resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
