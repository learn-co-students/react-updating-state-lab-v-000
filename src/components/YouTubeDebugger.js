// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
         resolution: '1080p' }
       }
     }
  }

  handleBitrate = (event) => {
    this.setState({
      settings: {
        ...this.state.settings, bitrate: 12
      }
    })
  }

  handleResolution = (event) => {
    this.setState({
      settings: {
        ...this.state.settings, video: {
          ...this.state.video,
        resolution: '720p'
      }
      }
    })
  }

  render() {
    return (
        <div>
          <button className="bitrate" onClick={this.handleBitrate}>
            Change bitrate: {this.state.settings.bitrate}
          </button>
          <button className="resolution" onClick={this.handleResolution}>
              Change resolution: {this.state.settings.video.resolution}
          </button>
      </div>
    )
  }
}
