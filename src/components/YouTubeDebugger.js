import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.handleBitrateClick = this.handleBitrateClick.bind(this);
    this.handleResolutionClick = this.handleResolutionClick.bind(this);
    // Define the initial state:
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

  handleBitrateClick = () => {
    // debugger
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    }, ()=>{console.log(this.state.settings)})
  }
  handleResolutionClick = () => {
    // debugger
    this.setState({
      settings: {
      ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p',
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClick}>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
