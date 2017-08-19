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
  }

  handleBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  handleRes = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
        })
      }),
    });
  }

  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Up the Bitrate</button>
        <button className="resolution" onClick={this.handleRes}>Less Resolution</button>
      </div>
    )
  }
}
