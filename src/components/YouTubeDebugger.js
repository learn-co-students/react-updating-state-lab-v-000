// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  bitrateHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  };

  resolutionHandler = () => {
    this.setState({
      settings:  {
        ...this.state.settings,
        video:{
          ...this.state.video,
          resolution: '720p'
        },
      }
    })
  };

  render(){
    return(<div>
      <button className="bitrate" onClick={this.bitrateHandler}/>
      <button className="resolution" onClick={this.resolutionHandler}/>
      </div>
    )
  }
}

export default YouTubeDebugger;
