import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props)

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

    this.changeBitrate = this.changeBitrate.bind(this)
    this.changeResolution = this.changeResolution.bind(this)
  }

  changeBitrate() {
    this.setState((prevState, props) =>
      ({ settings: Object.assign({}, prevState.settings, { bitrate: 12 }) })
    )
  }

  changeResolution() {
    this.setState((prevState, props) => {
      return ({
        settings: Object.assign({}, prevState.settings, {
          video: Object.assign({}, prevState.settings.video, { resolution: "720p" })
        })
      })
    })
  }

  render() {
    return (
      <div>
        <p>Bitrate: {this.state.settings.bitrate}</p>
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <p>resolution: {this.state.settings.video.resolution}</p>
        <button className="resolution" onClick={this.changeResolution}>Change resulution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
