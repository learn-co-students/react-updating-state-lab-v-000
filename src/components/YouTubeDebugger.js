import React from 'react';

class YouTubeDebugger extends React.Component{
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
    }
  };

  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: this.state.settings.bitrate += 4
      }
    })
  };

  updateResolution = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        video: {
           resolution: '720p'
        }
      }
    })
  };

  render(){
    return(
      <div className="debugger">
        <button className="bitrate" onClick={this.updateBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.updateResolution}>Resolution</button>
      </div>
    )
  };
}

export default YouTubeDebugger;
