// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p' }
        }
      }
    }
  }

  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  resolutionClick = () => {
    this.setState({
      video: {
        ...this.state.video,
        resolution: '720p'
      }
    })
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClick}>Bitrate</button>
        <button className="resolution" onClick={this.resolutionClick}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
