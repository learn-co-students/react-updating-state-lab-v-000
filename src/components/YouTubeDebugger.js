// Code YouTubeDebugger Component Here
import React from 'react'
export default class YouTubeDebugger extends React.Componetn{
  constructor(){
    super()
    this.state = {
      js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }}

    }
  }
  handleBitrate = () => (
    this.setState({
      js: {
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
  }
    })
  )
  handleResoluton = () => (
    this.setState({
      js: {
        settings: {
          video: {
            ...this.state.video,
            resoluton: '720p'

          }
        }
      }
    })
  )

  render(){
    return(
      <button className="bitrate" onClick={this.handleBitrate}></button>
      <button className="resoluton" onClick-{this.handleResoluton}></button>

    )
  }
}
