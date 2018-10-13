import React from 'react';

export default class YoutubeDebugger  extends React.Component {
  
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

  updateResolution = () =>{
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })

  }

  updateSettings = () =>{
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });

  }

  render(){
    return (
      <div>
      <button 
      className='bitrate'
      onClick={this.updateSettings}></button>

      <button 
      className='resolution'
      onClick={this.updateResolution}></button>

    </div>
    )
  }

}