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

    this.changeResolution = this.changeResolution.bind(this);
    this.changeBitrate = this.changeBitrate.bind(this);

  }

    changeResolution() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        })
      });
    }


    changeBitrate() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12,
        })
      });
    }


    render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
      )
    }
  }
