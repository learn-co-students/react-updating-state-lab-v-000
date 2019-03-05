// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    // Define the initial state:
    this.state = {
           errors: [],
           user: null,
           settings:
            { bitrate: 8,
              video: { resolution: '1080p' }
            }

    };
  }

  handleBit = () => {
    // Update our state here...
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
    });

  };

  handleRes = () => {
    // Update our state here...
      this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          }
  });

  };

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBit}>Bitrate</button>
        <button className='resolution' onClick={this.handleRes}>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
