import React, { Component } from 'react';
// import  from './';



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

  bitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })}

    resolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      })}

  render() {
      return (
        <div className=''>
          <button className="bitrate" onClick={this.bitrate}></button>
          <button className="resolution" onClick={this.resolution}></button>

        </div>
      )
    }
}
