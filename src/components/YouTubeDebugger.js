// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {errors: [],
                  user: null,
                  settings:
                    {bitrate: 8,
                     video: {resolution: '1080p' }
                    }
                  }
  };
  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {resolution: '720p'}
      }
    })
  }

  render() {
    return (
      <div>
        <p>Bitrate: {this.state.settings.bitrate} <button onClick={this.changeBitrate} className="bitrate">Change</button> </p>
        <p>Resolution: {this.state.settings.video.resolution}
          <button onClick={this.changeResolution} className="resolution">Change</button>
         </p>
      </div>

    )
  }
}
