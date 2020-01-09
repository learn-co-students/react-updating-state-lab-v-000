import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
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

  handleClickBitrate = () => {
    this.setState((previousState) => {
      return {
        settings: {
          ...previousState.settings,
          bitrate: previousState.settings.bitrate === 8 ? 12 : 8
        }
      };
    });
  }

  handleClickResolution = () => {
    this.setState((previousState) => {
      return {
        settings: {
          ...previousState.settings,
          video: {
            resolution: previousState.settings.video.resolution === '1080p' ? '720p' : '1080p'
          }
        }
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button onClick={this.handleClickBitrate} className='bitrate'>{this.state.settings.bitrate}</button>
        <button onClick={this.handleClickResolution} className='resolution'>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
