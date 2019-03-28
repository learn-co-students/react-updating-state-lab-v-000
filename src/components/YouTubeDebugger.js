import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings:
      { bitrate: 8,
        video: { resolution: '1080p' }
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
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        video: {
          ...prevState.settings.video,
          resolution: '720p'
        }
      }
    })
    )
  }

  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.handleBitrateClick}>Change bitrate</button>
      <button className="resolution" onClick={this.handleResolutionClick}>Change resolution</button>
      </div>
    )
  }
}
