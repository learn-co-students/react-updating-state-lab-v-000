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

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeVideoRes = () => {
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
      <div className="buttons">
        <button className="bitrate" onClick={this.changeBitrate}/>
        <button className="resolution" onClick={this.changeVideoRes}/>
      </div>
    )
  }
}
