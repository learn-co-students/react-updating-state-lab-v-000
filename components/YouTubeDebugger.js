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

  this._setBitrate = this._setBitrate.bind(this);
  this._setResolution = this._setResolution.bind(this);

  }

  _setBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  _setResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this._setBitrate}>bitrate</button>
        <button className="resolution" onClick={this._setResolution}>resolution</button>
      </div>
    )
  }
}
export default YouTubeDebugger
