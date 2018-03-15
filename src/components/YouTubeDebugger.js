import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    
    // Define state
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
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }
    
    changeResolution = () => {
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
        <button className='bitrate' onClick={this.changeBitrate}>
        Bitrate: {this.state.settings.bitrate}
        </button>
        <button className='resolution'onClick={this.changeResolution}>
        Resolution: {this.state.settings.video.resolution}
        </button>
      </div>
      )
  }
}
