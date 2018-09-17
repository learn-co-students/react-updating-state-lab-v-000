// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor() {
    super();

    this.state={
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p' }
          }
        }
      }

    resolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })
    }


    bitrate = () => {
      this.setState({
        settings: {
        ...this.state.settings,
        bitrate: 12
        }
      })
    }



  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.bitrate}>
        {this.state.settings.bitrate}
      </button>
      <button className="resolution" onClick={this.resolution}>
        {this.state.settings.video.resolution}
      </button>
      </div>
    )
  }
}
