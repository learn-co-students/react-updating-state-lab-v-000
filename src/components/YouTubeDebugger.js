// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
      };
    }

  handleClickB = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
      bitrate: 12
    }),
  });
}

  handleClickR = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
      })
    })
  });
}

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClickB}></button>
        <button className="resolution" onClick={this.handleClickR}></button>
      </div>
      );
    }
  }


export default YouTubeDebugger;
