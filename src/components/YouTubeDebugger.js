// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
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
               resolution: '1080p'
             }
           }
    };
  }

  changeBitrate = () => {
    // Update our state here...
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  changeResolution = () => {
    // Update our state here...
    this.setState({
      settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
      },
    });
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.changeBitrate}>Increase bitrate</button>
        <button className='resolution' onClick={this.changeResolution}>Change resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
