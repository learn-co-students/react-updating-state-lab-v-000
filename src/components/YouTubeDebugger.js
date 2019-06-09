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
    };
  }
 
  updateBitrate = () => {
      //using a callback to ensure the state has been updated when you go to use it
    this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
      })
  };

  updateResolution = () => {
    //using a callback to ensure the state has been updated when you go to use it
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
    });
 }
 
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.updateBitrate}>Update Bitrate</button>
        <button className='resolution' onClick={this.updateResolution}>Update Resolution</button>
      </div>
    );
  }
}
