import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
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

  bitrateAdd = () => {
    console.log("add bitrate!")
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }
  changeRes = () => {
    console.log("change res!")
    console.log(this.state.settings.video.resolution)
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({},
        this.state.settings.video, {
          resolution: "720p"
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateAdd}>Change BITRATE</button>
          <br></br>
        <button className="resolution" onClick={this.changeRes}>Change Resolution</button>
      </div>
    )
  }
}
