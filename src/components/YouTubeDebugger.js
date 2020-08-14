import React from 'react'


class YouTubeDebugger extends React.Component {
  constructor(){
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

  handleBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })

  }


  handleVideoResolution = () => {
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

  render () {
    return(
      <div>
      <button onClick ={this.handleBitRate}>{this.state.settings.bitrate}</button>
      <button onClick ={this.handleVideoResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger;// Code YouTubeDebugger Component Here
