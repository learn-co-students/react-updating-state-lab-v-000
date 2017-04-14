import React from 'react';
import ReactDOM from 'react-dom';

export default class YouTubeDebugger extends React.Component {
  constructor(){
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

    this.bitrate = this.bitrate.bind(this);
    this.resolution = this.resolution.bind(this);
  }

  bitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  resolution(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {
        resolution: '720p'
        })
      })
    })
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.bitrate}>bitrate</button>
        <button className="resolution" onClick={this.resolution}>resolution</button>
      </div>
    )
  }
}
