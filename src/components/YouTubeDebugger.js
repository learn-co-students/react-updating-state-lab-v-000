// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties. The initial state shape looks like this:
// js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution
// state property to '720p'.

import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }

  timesClicked = () => {
    this.setState({
      timesClicked + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.timesClicked}>Clicked {this.timesClicked} times.</button>
      </div>
    );
  }
}

export default DigitalClicker;
