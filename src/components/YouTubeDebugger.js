import React from 'react';
// The components / YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties.The initial state shape looks like this: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'.Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'.Clicking this button changes the settings.video.resolution state property to '720p'.

class YouTubeDebugger extends React.Component {
  constructor() {
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

    };
  }

  bitrateUpdater = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  resUpdater = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        },
      },
    });
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateUpdater}>Update Bitrate</button>
        <button className="resolution" onClick={this.resUpdater}>Update resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;