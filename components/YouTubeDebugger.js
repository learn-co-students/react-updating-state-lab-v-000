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

    this.changeBit = this.changeBit.bind(this)
    this.changeRes = this.changeRes.bind(this)
  }

  changeBit() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }

  changeRes() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.changeBit}>Set Bitrate to 12</button>
        <button className="resolution" onClick={this.changeRes}>Set Resolution to 720p</button>
      </div>
    )
  }
}

export default YouTubeDebugger