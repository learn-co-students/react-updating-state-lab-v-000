// Code YouTubeDebugger Component Here
import React from 'react'
export default class YoutubeDebugger extends React.Component {
  constructor(){
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
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }
  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render() {

    return(
      <div>
        <button className='bitrate' onClick={this.changeBitrate}>change bitrate</button><br />
        <button className='resolution' onClick={this.changeResolution}>change resolution</button>

      </div>
    )
  }

}
