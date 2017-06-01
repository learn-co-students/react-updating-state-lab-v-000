import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
    };

    this.bitrateTo12 = this.bitrateTo12.bind(this);
    this.resolutionTo720p = this.resolutionTo720p.bind(this);
  }

  bitrateTo12() {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        { bitrate: 12 }
      )
    });
  }

  resolutionTo720p() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  }

  render() {
    const { bitrate, video: { resolution } } = this.state.settings;

    return (
      <div>
        <button
          className="bitrate"
          onClick={this.bitrateTo12} >
          {bitrate}
        </button>
        <button
          className="resolution"
          onClick={this.resolutionTo720p} >
          {resolution}
        </button>
      </div>
    );
  }
}
