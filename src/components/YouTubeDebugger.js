// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()

    this.state = {
      errors:[],
      user: null,
      settings: {
        bitrate: 8,
        video:{
          resolution: '1080p'
        }
      }
    };
  }

  updateBitrate = (event)=> {
      this.setState({
        settings: Object.assign({}, this.state.settings,{
          bitrate: 12
        })
      })
    }

    updateResolution = (event) => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.video, {
            resolution: '720p'
          })
        })
      })
    }

render(){
  return(
    <div>
      <button className="bitrate" onClick={this.updateBitrate}> Update Bitrate </button>
      <button className="resolution" onClick={this.updateResolution}>Update Resolution</button>

      <p>The Bitrate is now {this.state.settings.bitrate}</p>
      <p>The resolution is now {this.state.settings.video.resolution}</p>
    </div>
        )
}

}
