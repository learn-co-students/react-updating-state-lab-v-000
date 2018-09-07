// Code YouTubeDebugger Component Here
import React, { Component } from 'react'
// This component has several state properties. 
// The initial state shape looks like this: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'
export default class YouTubeDebugger extends Component {
  constructor() {
    super();

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
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.handleBitrate} className= {'bitrate'} >{this.state.settings.bitrate}</button>
        <button onClick={this.handleResolution} className={'resolution'}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}