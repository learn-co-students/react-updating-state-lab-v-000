// Code YouTubeDebugger Component Here
import React from 'react';
import reactDOM from 'react-dom';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
          errors: [],
          user: null,
          settings: { bitrate: 8,
            video: { resolution: '1080p' }
          }

  }
  }
  raiseBitrate = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  changeRes = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: '720p'
        },

      },
    });
  }
  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.raiseBitrate}>{this.state.settings.bitrate}</button>
      <button className="resolution" onClick={this.changeRes}>{this.state.settings.resolution}</button>
      </div>
    )
  }
}
