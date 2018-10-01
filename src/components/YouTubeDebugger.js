import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor(){
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
          bitrate: 12
        }
    })
  }

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.resolution,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div className="YouTubeDebugger">
        <button className="bitrate" onClick={ this.changeBitrate }></button>
        <button className="resolution" onClick={ this.updateResolution }></button>
      </div>
    )
  }

}
