// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8,
                  video: {
                    resolution: '1080p'
                  }
                }
              }
  }

  changeBitRate = () => {
    this.setState({settings: { bitrate: 12, video: {resolution: this.state.settings.video.resolution}}})
  }

  changeResolution = () => {
    this.setState({settings: { bitrate: this.state.settings.bitrate, video: {resolution: '720p'}}})
  }



  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitRate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.changeResolution}>Bitrate: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
