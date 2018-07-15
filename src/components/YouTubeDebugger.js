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
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateChange = (event) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionChange = (event) => {
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
        <button className="bitrate" onClick={this.handleBitrateChange}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionChange}>Change Resolution</button>
      </div>
    )
  }
}


