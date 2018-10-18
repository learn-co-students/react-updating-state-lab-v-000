// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
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
 
  bitRateClick = () => {
    // Update our state here...
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    }) 
  }

  resolutionClick = () => {
    // Update our state here...
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }) 
  }
  

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitRateClick}>Change bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.resolutionClick}>Change resolution: {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;