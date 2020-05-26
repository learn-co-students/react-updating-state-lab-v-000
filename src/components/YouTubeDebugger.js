// Code YouTubeDebugger Component Here

import React, {Component} from 'react';
 
class YouTubeDebugger extends Component {
  constructor() {
    super()
    // initial state has bitrate set at 0
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
 
  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    })
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.bitrate}</h1>
        <button className='bitrate' onClick={this.handleBitrateClick}>Change Bitrate</button>
        <h1>{this.state.settings.resolution}</h1>
        <button className='resolution' onClick={this.handleResolutionClick}>Change Resolution</button>
      </div>
    )
  }
}
 
export default YouTubeDebugger
