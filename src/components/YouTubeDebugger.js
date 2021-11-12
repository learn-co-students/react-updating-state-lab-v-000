import React from 'react'

class YouTubeDebugger extends React.Component {
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
  bitrate = () => {
    this.setState((previousState) => ({ settings: { ...previousState.settings, bitrate: 12 } })
    )
  }

  resolution = () => {
    this.setState(previousState =>
    (
      { settings: { ...previousState.settings, video:{ ...previousState.video, resolution: '720p' }}
})
    )}

    render() {
      return (
         <div>
         <button className={'bitrate'} onClick={this.bitrate}> bitrate </button>
          <button className={'resolution'} onClick={this.resolution}> resolution </button>
          </div>
         )
  }
}

export default YouTubeDebugger
