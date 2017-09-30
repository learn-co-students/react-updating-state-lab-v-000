// Code YouTubeDebugger Component Here

import React, { Component } from 'react'

class YouTubeDebugger extends Component {
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
   }


  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }
  handleOtherClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
        ...this.state.video,
        resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.handleClick}></button>
        <button className="resolution" onClick={this.handleOtherClick}></button>
      </div>
    )
  }
}

export default YouTubeDebugger
