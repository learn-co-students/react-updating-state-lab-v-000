import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
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
    }
  }

  changeBitrate = () => {
    this.setState({
        ...this.state,
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
    });
  }

  changeResolution = () => {
    this.setState({
        ...this.state,
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
    });
  }

  render() {
    console.log(this.state.settings)
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>{`Bitrate ${this.state.settings.bitrate}`}</button>
        <button className="resolution" onClick={this.changeResolution}>{`Resolution ${this.state.settings.video.resolution}`}</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
