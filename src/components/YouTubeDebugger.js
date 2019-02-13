// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [], 
      user: null, 
      settings: 
        { bitrate: 8, 
          video: { resolution: '1080p' } 
        }
      }
  }

  handleBitrate = () => {
    this.setState(settings => {
      settings = {...this.state.settings};
      settings.bitrate = 12;
      return {settings};                                                                                                                    
    })
  }

  handleResolution = () => {
    this.setState(settings => {
      settings = {...this.state.settings};
      settings.video.resolution = '720p';
      return {settings};                                                                                                                    
    })
  }

  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className='resolution' onClick={this.handleResolution}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}