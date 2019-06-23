import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p' } }
    };
  }

  handleClick = () => {
  this.setState({
    settings: {
      ...this.state.settings,
      bitrate: 12,
    }})
  }

  handleRes = () => {
  this.setState({
    settings: {
      ...this.state.settings,
      video: {
        resolution: '720p'}
  }})
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}></button>
        <button className="resolution" onClick={this.handleRes}></button>
      </div>
    );
  }
}

export default YouTubeDebugger;
