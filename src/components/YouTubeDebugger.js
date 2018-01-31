// Code YouTubeDebugger Component Here
import React from 'react';

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
    } // end state

   this.changeResolution = this.changeResolution.bind(this);
  } // end constructor

  changeBitRate() {
    debugger;
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution() {
    // debugger;
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={() => this.changeBitRate()}>bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>resolution</button>
      </div>
    )
  }
} // end class

export default YouTubeDebugger;
