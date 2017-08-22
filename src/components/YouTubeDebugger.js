import React from 'react';
import ReactDOM from 'react-dom';

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super()

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

  bitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  resolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p',
        }
      }
    })
  }

  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.bitrate}>Click me!</button>
      <button className="resolution" onClick={this.resolution}>Click me!</button>
      </div>
    )
  }
}
