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
    this.handleBitrateClick = this.handleBitrateClick.bind(this)
    this.handleResClick = this.handleResClick.bind(this)
  }

  handleBitrateClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
    })
  }

  handleResClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p',
        }
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBitrateClick} className="bitrate">{this.state.settings.bitrate}</button>
        <button onClick={this.handleResClick} className="resolution">{this.state.settings.video.resolution}</button>
      </div>
    )
  }

}
