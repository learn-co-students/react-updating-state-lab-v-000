import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
    };
    this.onBitrateClick = this.onBitrateClick.bind(this);
    this.onResolutionClick = this.onResolutionClick.bind(this);
  }

  onBitrateClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  onResolutionClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.onBitrateClick}>Bitrate</button>
        <button className="resolution" onClick={this.onResolutionClick}>Resolution</button>
      </div>
    )
  }
}
