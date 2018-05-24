// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  changeBitrate = () => {
    this.setState({
      ...this.state,
      settings: {
        bitrate: 12,
        video: {
          ...this.state.settings.video
        }
      }
    })
  }

  changeResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  render() {
    const style = {
      padding: '10px',
      margin: '16px 16px auto'
    }

    return(
      <div>
        <button style={style} className="bitrate" onClick={this.changeBitrate}>Bitrate: {this.state.settings.bitrate}</button>

        <button style={style} className="resolution" onClick={this.changeResolution}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
