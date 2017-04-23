import React from 'react'

export default class YouTubeDebugger extends React.Component {
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
    this.updateBitRate = this.updateBitRate.bind(this)
    this.updateResolution = this.updateResolution.bind(this)
  }
  
  updateBitRate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }
  
  updateResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: '720p' }
      })  
    })
  }
  
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.updateBitRate}>Click me to update Bit Rate!</button>
        <button className='resolution' onClick={this.updateResolution}>4k Monitors are so in, baby. Click to update resolution.</button>
      </div>
    )
  }
}
