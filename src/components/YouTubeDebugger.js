// Code YouTubeDebugger Component Here
import React, {Component} from 'react'
export default class YouTubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
    }
  }
  clickBitrate = () =>{
    this.setState({
      js: {
        ...this.state.js, settings: {
          ...this.state.settings, bitrate: 12
        }
      }
    })
  }
  clickResolution = () => {
    this.setState({
      js:{
        ...this.state.js, setting:{
          ...this.state.settings, video: {
            resolution: '720p'
          }
        }
      }
    })
  }
  render(){
    return(
      <button class='bitrate' onClick={this.clickBitrate}></button>
      <button class='resolution' onClick={this.clickResolution}></button>
    )
  }
}
