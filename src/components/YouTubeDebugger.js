// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  changeResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        }
      }
    }, () => console.log(this.state.settings.video.resolution))
  }

  render() {
    return (
      <div>
        <button onClick={this.changeBitrate} className="bitrate">Change Bitrate Settings</button>
        <button onClick={this.changeResolution} className="resolution">Change Resolution Settings</button>
      </div>
    )
  }
}
