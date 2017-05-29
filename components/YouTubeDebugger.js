import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      settings: { 
        bitrate: 8, 
        video: { resolution: '1080p' } 
      }, 
      user: null 
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleResolutionClick = this.handleResolutionClick.bind(this);
  }

  handleClick() {
    this.setState({
      settings: {
        bitrate: 12,
        video: { resolution: '1080p' }
      }
    });
  }

  handleResolutionClick() {
    this.setState({
      settings: {
        bitrate: 8,
        video: { resolution: '720p' }
      }
    });
  }

  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.handleClick}>bitrate</button>
      <button className="resolution" onClick={this.handleResolutionClick}>resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger

