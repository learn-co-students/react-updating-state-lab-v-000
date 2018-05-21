// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

// initial state: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }

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

  // Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
  updateBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  };

  // Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
  updateResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  };

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.updateBitrate}>Change bitrate</button>
        <button className='resolution' onClick={this.updateResolution}>Change resolution</button>
      </div>
    )
  }
}
export default YouTubeDebugger
