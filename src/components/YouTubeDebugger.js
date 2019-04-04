// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user:null,
      settings: {
        bitrate:8,
        video:{
          resolution: '1080p'
        }
      }
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
 },() => console.log(this.state))
  };
  handleClick2 = () => {
    // Update our state here...
    this.setState({
      settings: {
      ...this.state.settings,
        video: {...this.state.settings.video, resolution: '720p'}
    }
 },() => console.log(this.state))
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>bitrate</button>
        <button className="resolution" onClick={this.handleClick2}>resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
