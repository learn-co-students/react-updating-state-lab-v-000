import React from 'react';

class YoutubeDebugger extends React.Component {

  constructor() {
    super()
    this.state = {
       errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }

  }

  changeSettings = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeRes = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: { ...this.state.settings.video, resolution: '720p'}
        },
    });
  }


  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.changeSettings}>
      </button>

      <button className="resolution"
      onClick={this.changeRes}>
      </button>
      </div>
    )
  }

}

export default YoutubeDebugger
