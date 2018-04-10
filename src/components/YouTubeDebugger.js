// Code YouTubeDebugger Component Here
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
    };
  }

  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  render() {
    return (
      <div className="youtube-debugger">
        <button className="bitrate" onClick={this.handleBitClick}>Modify Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResClick}>Modify Resolution: {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
