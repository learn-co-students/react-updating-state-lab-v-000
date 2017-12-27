// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

  constructor(){
    super();

    this.state = {
      errors: [],
      user : null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  updateBitrate = function () {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }.bind(this);

  updateResolution = function () {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }.bind(this);


  render(){
    return (<div>
      <button className="bitrate" onClick={this.updateBitrate}>Current Bitrate {this.state.settings.bitrate}</button>
      <button className="resolution" onClick={this.updateResolution}>Current res: {this.state.settings.video.resolution}</button>
    </div>)
  }
}

export default YouTubeDebugger
