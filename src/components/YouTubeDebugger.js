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
      video: { resolution: '720p' }
      }
    })
  }

  render() {
    return (
      <div>
        <button className={"bitrate"} onClick={this.setBitrate}>Set Bitrate to 12</button>
        <button className={"resolution"} onClick={this.setResolution}>Set Resolution to 720p</button>
      </div>
    )
  }
}
