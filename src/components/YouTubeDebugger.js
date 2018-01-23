// Code YouTubeDebugger Component Here
import React from 'react'; 

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = 
        { 
            errors: [], 
            user: null, 
            settings: { bitrate: 8, video: { resolution: '1080p' }} 
        }
    
  }
 
  handleResolution = () => {
    
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    })  
  }

  handleBitrate = () => {
    
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
    })  
  }
 
  render() {
    return (
      <div>
        <button onClick={this.handleBitrate} className="bitrate">{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;

