import React from 'react';

class YouTubeDebugger extends React.Component{
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
  handleBitClick = () => {
    this.setState({
      settings :{
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () =>{
    this.setState({
      settings:{
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div className="Buttons">
        <button className="bitrate" onClick={this.handleBitClick}>Click me!</button>
        <button  className="resolution" onClick={this.handleResClick}>Click me!</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
