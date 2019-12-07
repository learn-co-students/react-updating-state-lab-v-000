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
    });
  };

  updateRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  };

  render() {
    const bitrate = this.state.settings.bitrate;
    const resolution = this.state.settings.video.resolution;

    return(
    <div>
      <button className="bitrate" onClick={this.updateBitrate}>{bitrate}</button>
      <button className="resolution" onClick={this.updateRes}>{resolution}</button>
    </div>
  );
  }
}

export default YouTubeDebugger;
