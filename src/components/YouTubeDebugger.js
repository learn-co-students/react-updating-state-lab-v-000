// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

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

  bitrateButton = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionButton = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
      <button className="bitrate" onClick={this.bitrateButton}>Bitrate</button>
      <button className="resolution" onClick={this.resolutionButton}>Resolution</button>
      </div>
    )
  }
}
