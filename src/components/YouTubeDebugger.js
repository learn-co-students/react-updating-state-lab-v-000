// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
  constructor(){
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
    }
  }

    handleClickOne = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    }



    handleClickTwo = () => {
      this.setState({
        settings: {
        ...this.state.settings,
        video: {
        ...this.state.settings.video,
            resolution: '720p'
          }
        },
      });
    }





  render(){
    return(
      <div>
        <button className="bitrate" onClick = {this.handleClickOne}>Click Me!</button>
        <button className="resolution" onClick={this.handleClickTwo}>Click Me!</button>
      </div>
    )
  }
}
