import React, { Component } from 'react';

class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = 
    { 
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

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() { 
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}></button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;