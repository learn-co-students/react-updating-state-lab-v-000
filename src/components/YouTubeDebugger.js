// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p' }
        }
      }
    }

    handleResolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })
    }

    handleBitrate = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }

    render(){
      return(
        <div>
          <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
          <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        </div>
      )
    }

}
