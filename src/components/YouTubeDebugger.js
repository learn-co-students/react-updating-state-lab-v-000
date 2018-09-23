
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super();

    // Define the initial state:
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
    };
  resolutionClick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }
  bitrateClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
        bitrate: 12,
      },
    });
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    });
  }

  render(){
    return(
      <div>
        <button className="resolution" onClick = {this.resolutionClick}>{this.state.settings.video.resolution}</button>
        <button className="bitrate" onClick = {this.bitrateClick}>{this.state.settings.bitrate}</button>
      </div>
    )
  }
}
