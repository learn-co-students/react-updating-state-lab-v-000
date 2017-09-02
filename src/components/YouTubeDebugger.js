import React from 'react';

export default class YouTubeDebugger extends React.Component{

  constructor(){
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

    this.handleBitClick = this.handleBitClick.bind(this)
    this.handleResClick = this.handleResClick.bind(this)
  }

  handleBitClick(){
    this.setState({
      settings: {
        ...this.state.settings, bitrate: 12,
      }
    })
  }

    handleResClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render(){
    return(
      <div>
        <button className="bitrate"
        onClick={this.handleBitClick}>Change Bitrate</button>
        <h3>Bitrate:</h3>
        <div>{this.state.settings.bitrate}</div><br />
        <button className="resolution"
        onClick={this.handleResClick}>Change Resolution</button>
        <h3>Resolution:</h3>
        <div>{this.state.settings.video.resolution}</div>
      </div>
    )
  }
}