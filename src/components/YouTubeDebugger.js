import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = { 
      errors: [], 
      user: null, 
      settings: { 
        bitrate: 8, 
        video: { resolution: '1080p' } 
      } 
    } 
  }
  
  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }
  
  setResolution = () => {
    this.setState({
      settings : {
        bitrate: 8, // ...this.state.settings, could also have been handled this way #DearFutureMe
        video : {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <button className="bitrate" onClick={ this.setBitrate }>Set Bitrate</button>
        <button className="resolution" onClick={ this.setResolution }>Set Resolution</button>
      </React.Fragment>
      );
    
  }
}

export default YouTubeDebugger;
