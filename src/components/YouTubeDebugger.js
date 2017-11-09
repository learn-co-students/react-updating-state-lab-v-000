// Code YouTubeDebugger Component Here

//Import React library
import React from 'react';

//Crearte React component
class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    //Define the initial state property
    this.state = {
      errors: [], user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  //Update state
  handleBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }
  handleResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
        <button className="resolution" onClick={this.handleResolution}>Change Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
