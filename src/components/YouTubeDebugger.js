// Code YouTubeDebugger Component Here
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
          resolution: '1080p'
        }
      }
    };

  }

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
      // settings: Object.assign({}, this.state.settings, {
      //   bitrate: 12
      // }),
    });
  }

  handleChangeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
      // settings: Object.assign({}, this.state.settings, {
      //   video: Object.assign({}, this.state.settings.video, {
      //     resolution: '720p'
      //   })
    });
    /*
      Or this can be defined as
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        },
      });
    */
  }

  render() {
    return(
      <div>
        <h2>YouTube Debugger</h2>
        <button onClick={this.handleChangeBitrate} className='bitrate'>Bitrate</button>
        <button onClick={this.handleChangeResolution} className='resolution'>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;