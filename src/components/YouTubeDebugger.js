import React from 'react';

export default class YouTubeDebugger extends React.Component {
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
      }
    }
  }

  bitrateHandler = () => {
    console.log('bitrate')
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  resolutionHandler = () => {
    console.log('bitrate')
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

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.bitrateHandler}>Bitrate</button>
        <button className='resolution' onClick={this.resolutionHandler}>Resolution</button>
      </div>
    )
  }
}