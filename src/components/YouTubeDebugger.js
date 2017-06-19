import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor () {
    super ()
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
  bitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  resolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }
  render () {
    return (
      <div>
        <button onClick={this.bitrateHandler} className='bitrate'>Bitrate</button>
        <button onClick={this.resolutionHandler} className='resolution'>Reso</button>
      </div>
    )
  }
}
