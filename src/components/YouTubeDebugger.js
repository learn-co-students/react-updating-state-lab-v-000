import React, {Component} from 'react';


export default class YouTubeDebugger extends Component {
  constructor() {
    super();
 
    
    this.state = {
      errors: [],
      user: null,
      settings:
      {
        bitrate: 8,
        video: {
          resolution: '1080p' 
        }
      }
    };
  }
  
  changeRes = () => {
  this.setState({
    ...this.state,
    settings: {
      ...this.state.settings,
      video:{
        resolution: '720p'
      }
    }
  });
  }
  
  changeBitRate = () => {
  this.setState({
    ...this.state,
    settings: {
      ...this.state.settings,
      bitrate: 12,
    },
  });   
  }
  render () {
    return(
      <div>
        <button className='resolution' onClick={this.changeRes}/>
        <button className='bitrate' onClick={this.changeBitRate}/>
      </div>
    )
  }
}
