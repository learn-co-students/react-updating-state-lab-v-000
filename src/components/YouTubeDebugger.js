import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

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

  handleChangeResolution = () => {
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

  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleChangeResolution}>Change Resolution</button>
      </div>
    );
  }
}
