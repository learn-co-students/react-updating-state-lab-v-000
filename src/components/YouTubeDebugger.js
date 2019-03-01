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

  // Update state with object.assign()
  // Bitrate = () => {
  //   this.setState({
  //     settings: Object.assign({}, this.state.settings, {
  //       bitrate: 12
  //     })
  //   });
  // }

  // Update state with spread operator
  Bitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  Resolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.resolution,
          resolution: "720p"
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.Bitrate}>bitrate</button>
        <button className="resolution" onClick={this.Resolution}>resolution</button>
      </div>

    )
  }
}
