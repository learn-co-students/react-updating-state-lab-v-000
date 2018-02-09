import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
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
    }
  }

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

updateResolution = () => {
  this.setState({
    settings: { ...this.state.settings,
        video: {...this.state.settings.video,
        resolution: '720p'
      }
    }
  })
}

  render(){
    return(
      <div>
      <button className="bitrate" onClick={this.updateBitrate}>Click to change bitrate</button>
      <button className="resolution" onClick={this.updateResolution}>Click to change resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
