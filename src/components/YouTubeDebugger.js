import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor() {
    super()
    this.state = { errors: [], user: null,
        settings: { bitrate: 8,
          video: { resolution: '1080p' } }

    }
  }

  handleClick = () => { this.setState({settings: Object.assign({},this.state.settings, {video: {resolution: '720p'}})})}

  handleBitClick = () => {this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})})}


  render() {
    return <div> <button className='resolution' onClick={this.handleClick}>change resolution to 720p </button>
    <button className='bitrate' onClick={this.handleBitClick}>update bitrate to 12 </button>
    </div>
  }
}
