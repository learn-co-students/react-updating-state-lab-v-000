import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
        errors: [], 
        user: null, 
        settings: 
          { bitrate: 8, 
            video: { resolution: '1080p' } 
          } 
      
    }
  }

  handleBitrateClick = () => {
    this.setState({
      settings: { ...this.state.settings, 
        bitrate: 12
      }
    }, () => console.log(this.state.settings))
  }

  handleResolutionClick = () => {
    this.setState({
      settings: { ...this.state.settings, video: { ...this.state.settings.video, resolution: '720p'}}
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>{this.state.settings.bitrate}</button><br />
        <button className="resolution" onClick={this.handleResolutionClick}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}



//js.settings.bitrate
//...this.state.js,
//...settings,
//bitrate: 12

//...this.state.settings,
//bitrate: 12