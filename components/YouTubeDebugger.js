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

    this.handleChangeBitrate = this.handleChangeBitrate.bind(this);
    this.handleChangeResolution = this.handleChangeResolution.bind(this);
  }

  handleChangeBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleChangeResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>Change bitrate</button>
        <button className="resolution" onClick={this.handleChangeResolution}>Change resolution</button>
      </div>
    );
  }
}
