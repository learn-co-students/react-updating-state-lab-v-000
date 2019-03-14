// Code YouTubeDebugger Component Here
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

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  handleResolutionClick = () => {
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

  render() {
    const bitrate = this.state.settings.bitrate
    const resolution = this.state.settings.video.resolution
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.handleBitrateClick}
        >
          Change bitrate: Bitrate is {bitrate}
        </button>
        <button
          className="resolution"
          onClick={this.handleResolutionClick}
        >
          Change resolution: Resolution is {resolution}
        </button>
      </div>
    );
  }
}
