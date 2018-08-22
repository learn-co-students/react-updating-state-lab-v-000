// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {


  constructor (props) {
    super (props)
    this.state = {
      errors: [],
      user: null,
      settings:
        { bitrate: 8,
        video: { resolution: '1080p' }
        }
      }
    }

    changeResolution = () => {
      this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          },
        });
      }

      changeBitrate = () => {
        this.setState({
          settings: Object.assign({}, this.state.settings, {
            bitrate: 12
          }),
        });
    }



  render () {
    return (
      <div>
        <button  className="bitrate" onClick={this.changeBitrate}>
          Change Bitrate
        </button>

        <button className="resolution" onClick={this.changeResolution}>
          Change Resolution
        </button>
      </div>
    )
  }
}
