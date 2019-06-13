import React, {Component} from 'react';

class YouTubeDebuger extends Component {
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
  
    setResolution = () => {
      this.setState({
        ...this.state,
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p',
          }
        }
      }, () => console.log(this.state.settings.video.resolution))
    }

  setBitRate = () => {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    }, () => console.log(this.state.settings.bitrate))
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.setBitRate}>Set Bit Rate</button>
        <button className='resolution' onClick={this.setResolution}>Set Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebuger;