// Code YouTubeDebugger Component Here
import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' } } }
  }
  render(){
    return(
      <div>
        <button onClick={this.handleBit} className='bitrate'>Bitrate</button>
        <br/>
        <button onClick={this.handleRes} className='resolution'>Bitrate</button>
      </div>
    )
  }
  handleBit = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleRes = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.settings.video,
          resolution: '720p'}
      }
    })
  }
}
