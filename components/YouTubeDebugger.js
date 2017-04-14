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

  this.bitrateBtn = this.bitrateBtn.bind(this);
  this.resolutionBtn = this.resolutionBtn.bind(this);
  }//constructor

  bitrateBtn() {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        { bitrate: 12 }
      )//Object.assign
    });//setState
  }//bitrateBtn

  resolutionBtn() {
    this.setState({
      settings: Object.assign(
        {},
        this.state.settings,
        { video: Object.assign(
          {},
          this.state.settings.video,
          { resolution: '720p' }
          )
        }
      )//Object.assign
    });//setState
  }

  render() {
    return (
      <div>
        <button onClick={this.bitrateBtn} className="bitrate">{this.state.settings.bitrate}</button>
        <button onClick={this.resolutionBtn} className="resolution">{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;
