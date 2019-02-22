import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
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

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings, //includes all other previous parts of array, just updates bitrate
        bitrate: 12
      }
    });
  };

  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings, //includes all other previous parts of array, just updates bitrate
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  };

  render() {
    return (
      <div> //both buttons need to be inside of div or else won't render right
      <button
      className="bitrate"
      onClick={this.updateBitrate}
      >
      Update Bitrate
      </button>

      <button
      className="resolution"
      onClick={this.updateResolution}
      >
      Update Resolution
      </button>
      </div>
    );
  }
}


export default YouTubeDebugger;
