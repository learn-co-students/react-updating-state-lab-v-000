// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
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

  bitrateButtonClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    }, () => {  })
  }

  resolutionButtonClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'},
      }
    }, () => {  })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.bitrateButtonClick}>{this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.resolutionButtonClick}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
