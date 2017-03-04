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

    this.handleClickSettings = this.handleClickSettings.bind(this);

    this.handleClickVideo = this.handleClickVideo.bind(this);
  }

  handleClickSettings() {
    this.setState({
      settings: Object.assign({},
    this.state.settings, {
      bitrate: 12 
    }),
    });
  }

  handleClickVideo() {
    this.setState({
      settings: Object.assign({},
        this.state.settings, {
      video: Object.assign({},
        this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickSettings}>{this.state.bitrate}</button>
        <button className="resolution" onClick={this.handleClickVideo}>{this.state.resolution}</button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger;