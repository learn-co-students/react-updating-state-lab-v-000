// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super()

    this.state = 
       { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
    
  }

  handleClick4Bitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  handleClick4Resolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    })
  }

  render() {

    return(
      <div>
    <button className="bitrate" onClick={this.handleClick4Bitrate}></button>

    <button className="resolution" onClick={this.handleClick4Resolution}></button>
    </div>
      )
    }
    }
  
