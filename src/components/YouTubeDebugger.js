// Code YouTubeDebugger Component Here

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

  upgradeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    });
  }

  downgradeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
    });
  }

  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.upgradeBitrate}>Upgrade Bitrate to 12 (It is now: {this.state.settings.bitrate})</button>
        <button className="resolution" onClick={this.downgradeResolution}>Downgrade Resolution to 720p (It is now: {this.state.settings.video.resolution})</button>
      </div>
    )

  }
}

export default YouTubeDebugger;
