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
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleOtherClick = this.handleOtherClick.bind(this);
  }

  handleClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    });
  }

  handleOtherClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p',
        })
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleOtherClick}>Resolution</button>
      </div>
    );
  }
}
