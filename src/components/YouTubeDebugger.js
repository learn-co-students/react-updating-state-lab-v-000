// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component{

constructor(){
  super();
  this.state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {resolution: '1080p'
    }
    }
  }
}

bitrate = () =>{
  this.setState({
  settings:{
  ...this.state.settings,
 bitrate: 12,
}
})
}

resolution = () =>{
  this.setState({
    settings:{
      ...this.state.settings,
      video: {
          ...this.state.settings.video,
      resolution: '720p'}
    }
    })
}

render(){

  return(
    <div>
    <p>{this.state.timesClicked} is the time its been clickes</p>
    <button className='bitrate' onClick={this.bitrate}>{this.state.settings.bitrate}</button>
    <button className='resolution' onClick={this.resolution}>{this.state.settings.video.resolution}</button>
    </div>
  )
}

}
