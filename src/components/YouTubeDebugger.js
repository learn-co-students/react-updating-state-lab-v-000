import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.changeBitrate}
        >
          Bitrate
        </button>

        <button
          className="resolution"
          onClick={this.changeResolution}>
          Resolution
        </button>
      </div>
    );
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
}

export default YouTubeDebugger;