import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor (){
    super()
    this.state = (
    {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    })
  }

  changeBitRate = () => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  changeResolution = () => {
    var video = {resolution: '720p'}
    this.setState({
      settings: {...this.state.settings, video}
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitRate}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}


// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.