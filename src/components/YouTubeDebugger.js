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
    };
  }

  handleClickBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  handleClickResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        },
      },
    });
  }



  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBitrate}>Click me</button>
        <button className="resolution" onClick={this.handleClickResolution}>Click me</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
