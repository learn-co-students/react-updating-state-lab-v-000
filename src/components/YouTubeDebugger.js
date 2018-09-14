// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  constructor(props){
    super(props);
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

  handleClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  };

  handleChangeResolution = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        }),
      });
    };

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={this.handleClick}>
            Change Bitrate
        </button>
        <button
          className="resolution"
          onClick={this.handleChangeResolution}>
            Change Resolution
        </button>
      </div>
    )
  };
}

export default YouTubeDebugger;
