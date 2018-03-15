import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleChangeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChangeBitrate} className="bitrate">Change Bitrate Property</button>
        <button onClick={this.handleChangeResolution} className="resolution">Change Resolution Property</button>
      </div>
    );
  }
}
