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

  bitrateChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  resChange = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateChange}>Change Bitrate</button>
        <button className="resolution" onClick={this.resChange}>Change Resolution</button>
      </div>
    );
  }
}
