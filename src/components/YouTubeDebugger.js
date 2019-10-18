// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

  // Initial state
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  // Bitrate handler
  bitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings, 
        bitrate: 12
      }
    })
  }

  // Resolution handler 
  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video, 
          resolution: '720p'
        }
      }
    })
  }







  render() {
    return (
      <div>
        <button
          onClick={this.bitrateHandler}
          className="bitrate"
          >Bitrate
        </button>
        <button
          onClick={this.resolutionHandler}
          className="resolution"
          >Resolution
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger

