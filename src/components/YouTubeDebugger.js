import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    }
  }
  
  handleClickedBitrate = () => {

    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 12,
        video: {
          resolution: "1080p"
        }
      }
    })
    console.log(this.state.settings.bitrate)
  }
  
  handleClickedResolution = () => {
    this.setState({
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "720p"
        }
      }
    })
    console.log(this.state.settings.video.resolution)
  };

  render() {
    return (
      <div>
        <button className='bitrate' onClick={ this.handleClickedBitrate }>Bitrate</button>
        <button className='resolution' onClick={ this.handleClickedResolution }>Resolution</button>
      </div>
    )
  }
};

export default YouTubeDebugger;