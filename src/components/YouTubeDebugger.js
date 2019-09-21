// Code YouTubeDebugger Component Here
import React from 'react';
 
class YouTubeDebugger extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state =   {
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
 
    bitClick = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {bitrate: 12})
      }, () => console.log(this.state.settings)) // prints true
    }
 
     resClick = () => {
      this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    }, () => console.log(this.state.settings)) // prints true
    }
 
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitClick}>Bitrate</button>
        <button className="resolution" onClick={this.resClick}>Resolution</button>
      </div>
    );
  }
}
 
export default YouTubeDebugger;
