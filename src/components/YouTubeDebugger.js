// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
      super();

      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8, video: { resolution: '1080p' }}
      }
    }

    handleClickBirate = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }, () => console.log(this.state.settings.bitrate))
    }

    handleClickResolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
            video: {
              ...this.state.video,
              resolution: '720p'
            }
        }
      }, () => console.log(this.state.settings.video.resolution))
    }

    render() {
      return (
        <div>
        <button className = 'bitrate' onClick={this.handleClickBirate}>
          Click Me!
        </button>

        <button className = 'resolution' onClick={this.handleClickResolution}>
          Click Me!
        </button>
        </div>
      )
    }
}

export default YouTubeDebugger
