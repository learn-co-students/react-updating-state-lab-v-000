import React from 'react';

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
  }

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render () {
    return (
      <div>
        <p>{this.state.settings.bitrate}</p>
        <button className="bitrate" onClick={this.updateBitrate}>Bitrate</button>
        <p>{this.state.settings.video.resolution}</p>
        <button className="resolution" onClick={this.updateResolution}>Resolution</button>
      </div>
    )
  }

}

export default YouTubeDebugger;
