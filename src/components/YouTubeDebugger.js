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

  bitrateChanger = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionChanger = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: '720p'
      }}
    })
  }
  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.bitrateChanger}>
          Change Bitrate
        </button>
        <button className="resolution" onClick={this.resolutionChanger}>
          Change Resolution
        </button>
      </div>
    )
  }
}
