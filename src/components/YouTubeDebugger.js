import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: { bitrate: 8, video: { resolution: '1080p' } }
  };

  render() {
    return (
      <div>
        <button
          className="bitrate"
          onClick={() =>
            this.setState({ settings: { ...this.state.settings, bitrate: 12 } })
          }
        />
        <button
          className="resolution"
          onClick={() =>
            this.setState({
              settings: {
                ...this.state.settings,
                video: { resolution: '720p' }
              }
            })
          }
        />
      </div>
    );
  }
}
