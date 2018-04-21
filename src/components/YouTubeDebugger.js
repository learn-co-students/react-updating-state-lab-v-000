// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
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
    this.handleClickRate = this.handleClickRate.bind(this);
    this.handleClickResolution = this.handleClickResolution.bind(this);

    }

    handleClickRate() {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      })
    }

    handleClickResolution() {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
          ...this.state.video,
          resolution: '720p'
          },
        },
      })
    }

  render () {
    return (
      <div className="youtbe">
        <button className="bitrate" onClick={this.handleClickRate}> </button>
        <button className="resolution" onClick={this.handleClickResolution}> </button>
      </div>
    )
  }
}
