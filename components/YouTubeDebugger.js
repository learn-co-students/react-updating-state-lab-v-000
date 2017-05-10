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

    this.bitrateUpdate = this.bitrateUpdate.bind(this);
    this.resolutionUpdate = this.resolutionUpdate.bind(this);
  }

  bitrateUpdate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  }

  resolutionUpdate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateUpdate} />
        <button className="resolution" onClick={this.resolutionUpdate} />
      </div>
    );
  }
}
