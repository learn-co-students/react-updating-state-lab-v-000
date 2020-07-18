// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

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

  changeBitrate = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          bitrate: 12
        }
      }
    })
  }

  changeVideoResolution = () => {
    this.setState(previousState => {
      return {
        settings: {
          ...previousState.settings,
          video: {
            ...previousState.settings.video,
            resolution: '720p'
          }
        }
      }
    })
  }
  
  render() {
    return ([
      <button onClick={this.changeBitrate} className="bitrate">
        Current bitrate: {this.state.settings.bitrate}
      </button>,
      <button onClick={this.changeVideoResolution} className="resolution">
        Current video resolution: {this.state.settings.video.resolution}
      </button>
    ])
  }
}