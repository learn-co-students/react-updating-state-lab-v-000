import React, { Component } from 'react'

export default class YoutubeDebugger extends Component {
  constructor(){
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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      },
    });
  }

  render() {
    return (
      <div>
        {this.state.settings.bitrate}
        <br/>
        {this.state.settings.video.resolution}
        <br/>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change resolution</button>
      </div>
    )
  }
}
