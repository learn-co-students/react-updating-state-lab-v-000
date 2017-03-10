const React = require('react');


class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
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
 
  handleClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
    }),
  });
  }

  handleClick2() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
          resolution: '720p',
      })
    }),
  });
  }
 
  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.handleClick}>{this.state.settings.bitrate}</button>
      <button className="resolution" onClick={this.handleClick2}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger;