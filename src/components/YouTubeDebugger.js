// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  rateToTwelve = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }
  resolutionTo720p = () => {
    this.setState({
      settings:{...this.state.settings,
        video: {resolution: '720p'}}
    })
  }
  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.rateToTwelve}></button>
        <button className="resolution" onClick={this.resolutionTo720p}></button>
      </div>
    )
  }
}
