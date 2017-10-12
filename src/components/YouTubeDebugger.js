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
          resolution: '1080p' }
        }
      };
    }


  bitClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }



  bitResolve = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }


  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.bitClick}>Bitrate me!</button><br></br>
        <button className='resolution' onClick={this.bitResolve}>Resolutionize me!!</button>
      </div>
    );
  }
}

export default YouTubeDebugger;





