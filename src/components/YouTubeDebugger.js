// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor(){
    super();

    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } };
  }

  setBitrate = (event)=>{
    this.setState({settings:
      {...this.state.settings, bitrate: 12}
    });
  }

  setRes = (event)=>{
    this.setState({settings:
      {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}
    });
  }

  render(){
    return (<div>
        <button onClick={this.setBitrate} className="bitrate">Bitrate {this.state.settings.bitrate}</button>
        <button onClick={this.setRes} className="resolution">Resolution {this.state.settings.video.resolution}</button>
      </div>);
  }
}

export default YouTubeDebugger;
