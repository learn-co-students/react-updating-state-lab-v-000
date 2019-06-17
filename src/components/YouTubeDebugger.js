import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
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

  updateRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  updateRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }, () => console.log(this.state.settings.video))
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.updateRate}>Change bitrate</button>
        <button className='resolution' onClick={this.updateRes}>Change resolution</button>
      </div>
    )
  }
}
