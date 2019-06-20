import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

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

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button
         className="bitrate"
         onClick={this.handleChangeBitrate}>
          {this.state.settings.bitrate}
         </button>
        <button
         className="resolution"
         onClick={this.handleChangeResolution}>
         {this.state.settings.video.resolution}
         </button>
      </div>
    );
  }
}
