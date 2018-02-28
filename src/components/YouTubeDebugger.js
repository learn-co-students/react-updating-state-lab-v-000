import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
     }
   };



  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
         video: {
          resolution: '720p',
        }
      }
    })
  }



  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClick}>Bitrate</button>
        <button className="resolution" onClick={this.resolutionClick}>Resolution</button>
      </div>
    );
  }
}
