import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor (){
    super();

    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }

    this.updateBitRate = this.updateBitRate.bind(this);
    this.updateRes = this.updateRes.bind(this);
  }

  updateBitRate(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  updateRes(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    });
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.updateBitRate}>bitrate</button>
        <button className="resolution" onClick={this.updateRes}>resolution</button>
      </div>
    );
  }
}
