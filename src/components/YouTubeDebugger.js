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

  handleClickRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  };

  handleClickBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickBit}>Bitrate</button>
        <button className="resolution" onClick={this.handleClickRes}>Resolution</button>

      </div>
    );
  }
}

export default YouTubeDebugger;
