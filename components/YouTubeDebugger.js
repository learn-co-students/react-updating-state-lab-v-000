const React = require('react');

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

    this.updateBitrate = this.updateBitrate.bind(this);

    this.updateResolution = this.updateResolution.bind(this);
  }

  updateBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }

  updateResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.updateBitrate}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.updateResolution}> {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger;
