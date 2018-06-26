// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: { resolution: '1080p'}
        }
      }
    }
  

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
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

  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
