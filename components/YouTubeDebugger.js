import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.changeToTwelve = this.changeToTwelve.bind(this);
    this.changeResolution = this.changeResolution.bind(this);

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

  changeToTwelve(){
    var newSettings = Object.assign( {}, this.state.settings, {bitrate: 12} );
    this.setState(
      {settings: newSettings}
    )
  };

  changeResolution(){
    var newSettings = Object.assign({}, this.state.settings, {video: {resolution: "720p"}});
    this.setState(
      {settings: newSettings}
    )
  };

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.changeToTwelve}>Change Bitrate</button>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
    )
  }
};

export default YouTubeDebugger
