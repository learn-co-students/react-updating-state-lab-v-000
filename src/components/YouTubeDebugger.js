// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleClickBitrate = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  };

  handleClickResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p",
        },
      },
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickBitrate} className="bitrate">
          {this.state.settings.bitrate}
        </button>
        <button onClick={this.handleClickResolution} className="resolution">
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
