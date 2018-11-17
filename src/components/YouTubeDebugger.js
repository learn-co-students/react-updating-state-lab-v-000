import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {

    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      },
    };
  }

  handleBitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      },
    });
  }

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
      <p>Bitrate: {this.state.settings.bitrate}</p>
      <p>Resolution: {this.state.settings.video.resolution}</p>
      <button onClick={this.handleBitrateClick} className='bitrate'>Change BitRate</button>
      <button onClick={this.handleResolutionClick} className='resolution'>Change Resolution</button>
      </div>
    )
  }


}
