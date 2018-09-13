import React, { Component } from 'react';

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

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeVideoRes = () => {
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
        <button onClick={this.changeBitrate} className="bitrate">Bitrate: {this.state.settings.bitrate}</button>
        <button onClick={this.changeVideoRes} className="resolution">Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }

}
