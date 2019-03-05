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


  };

  handleRes = () => {
    // Update our state here...


  };

  render() {
    return (
      <div>
        <button class="bitrate" onClick={this.handleBit}>Bitrate</button>
        <button class="resolution" onClick={this.handleRes}>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
