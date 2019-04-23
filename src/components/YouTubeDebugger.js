// Code YouTubeDebugger Component Here
import React from 'react';

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


    handlesBitrateButton = () => {
      console.log("Clicked Bitrate Button")
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }

    handlesResolutionButton = () => {
      console.log("Clicked Resolution Button")
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      })
    }


  render(){
    return(
      <div>
        <button
          className="bitrate"
          onClick={this.handlesBitrateButton}>
          {this.state.settings.bitrate}
        </button>
        <button
          className="resolution"
          onClick={this.handlesResolutionButton}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}
