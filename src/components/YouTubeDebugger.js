// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
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

  changeBitrate = () => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeResolution} className="resolution">resolution</button>
        <button onClick={this.changeBitrate} className="bitrate">bitrate</button>
      </div>
    )
  }
}
export default YouTubeDebugger
