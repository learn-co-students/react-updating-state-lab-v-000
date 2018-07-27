// Code YouTubeDebugger Component Here
import React from "react"

export default class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
       errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }
  handleClick = () =>{
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }
  handleClickR = () =>{
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: '720p'
        }
      },
    })
  }
  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleClick}>update bitrate</button>
        <button className="resolution" onClick={this.handleClickR}>update resolution</button>
      </div>
    )
  }
}
