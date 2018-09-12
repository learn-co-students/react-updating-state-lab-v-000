// Code YouTubeDebugger Component Here
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
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        },
      },
    })
  }

  updateBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    }, () => console.log(this.state.settings.bitrate))
  }

  render () {
    return (
      <div id='updateButtons'>
        <button className='bitrate' onClick={this.updateBitrate}>Update Bitrate</button>
        <button className='resolution' onClick={this.handleResolutionClick}>Update Resolution</button>
      </div>
    )
  }
}
