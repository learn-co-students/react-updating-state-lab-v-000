

import React from 'react';


export default class DigitalClicker extends React.Component {
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
    };

    this.handleBitClick = this.handleBitClick.bind(this);
    this.handleResClick = this.handleResClick.bind(this);
  } 

  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  } 

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p' } 
      },
    });
  } 


  render() {
    return (
      <div>
        <button onClick={this.handleBitClick} className="bitrate">{this.state.settings.bitrate}</button>
        <button onClick={this.handleResClick} className="resolution">{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}