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

  bitrateButton = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  resolutionButton = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
            resolution: '720p'
          }
        },
      });
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateButton}>Change Bitrate</button>
        <button className="resolution" onClick={this.resolutionButton}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
