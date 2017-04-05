import React from 'react';

class YouTubeDebugger extends React.Component  {
  constructor() {
    super()

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

    this.changeSettings = this.changeSettings.bind(this)
    this.changeResolution = this.changeResolution.bind(this)
  }

  changeSettings()  {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
    })
  }
  
  changeResolution()  {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p',
        })
      })
    })


  }

  render()  {
    return(
      <div>
        <button className="bitrate" onClick={this.changeSettings}>Settings</button>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
      </div>
      );
  }
}

module.exports = YouTubeDebugger