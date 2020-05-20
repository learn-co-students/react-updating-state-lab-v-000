// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        },
      },
    };
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolutionClick}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }

}
