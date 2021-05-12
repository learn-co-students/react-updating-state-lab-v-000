import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

  changeBitrate = () => {
    this.setState({
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
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" class="bitrate" onClick={this.changeBitrate}>{ this.state.settings.bitrate }</button>
        <button className="resolution" class="resolution" onClick={this.changeResolution}>{ this.state.settings.video.resolution }</button>
      </div>
    )
  }
}