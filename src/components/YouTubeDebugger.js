import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {
    super(props)
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

  newBit = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  newRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.newBit}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.newRes}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
