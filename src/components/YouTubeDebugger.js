// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8,
        video: { resolution: '1080p' } }
    }
  }

  handleBitrateClick = () => {
    // console.log(this.state)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    // console.log("-----")
    // console.log(this.state)
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }


  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResClick}>Resolution {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
