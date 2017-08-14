import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p',
        }
      }
    };

    this.handleClickBitrate = this.handleClickBitrate.bind(this);
    this.handleClickResolution = this.handleClickResolution.bind(this);
  }

  handleClickBitrate = () => { // change to 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }

  handleClickResolution = () => { // change to '720p'
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p',
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleClickBitrate} >
          Bitrate change
        </button>

        <button className='resolution' onClick={this.handleClickResolution} >
          Resolution change
        </button>
      </div>
    )
  }

}

export default YouTubeDebugger;