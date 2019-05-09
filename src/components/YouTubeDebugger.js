import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
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
  }

  updateBitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }



  updateResolutionHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.updateBitrateHandler}>Current Bitrate: {this.state.settings.bitrate}</button>
        <br />
        <br />
        <button className='resolution' onClick={this.updateResolutionHandler}>Current Resolution: {this.state.settings.video.resolution}</button>
      </div>


    );
  }
}
