// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
    }
  }

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  setResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Bitrate: {this.state.settings.bitrate}, Resolution: {this.state.settings.video.resolution}</h1>
        <button className="bitrate" onClick={this.setBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.setResolution}>Resolution</button>
      </div>
    )
  }
}
