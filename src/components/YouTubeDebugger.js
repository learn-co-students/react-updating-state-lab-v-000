// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {

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
    };
  }


hasBeenClicked = () => {
  this.setState({
    settings: {
      ...this.state.settings,
        bitrate: 12
    }
  });
};

resHasBeenClicked = () => {
  this.setState({
    // settings: {
    //   ...this.state.settings.video.resolution,
    //     resolution: '720p'
    // }
    settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
  });
  debugger  
};


  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.hasBeenClicked} >Click me to change bitrate!</button>
        <button className='resolution' onClick={this.resHasBeenClicked} >Click me to change resolution!</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
