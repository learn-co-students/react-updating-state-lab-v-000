// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
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

  bumpBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeRes = () => {
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
        <button className='bitrate' onClick={this.bumpBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.changeRes}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }


}