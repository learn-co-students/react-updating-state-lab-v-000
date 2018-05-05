// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component {
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
  handleBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }
  handleResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }
  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
