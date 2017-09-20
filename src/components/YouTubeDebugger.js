// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(){
    super()
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

  changeResolution = () => {
    //update state here
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  changeBitrate = () => {
    //update state here
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    })
  }



  render(){
    return(
      <div>
        <button className="resolution" onClick={this.changeResolution}>Resolution</button>
        <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
      </div>
    )
  }
}


export default YouTubeDebugger;