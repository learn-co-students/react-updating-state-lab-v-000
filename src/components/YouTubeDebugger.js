// Code YouTubeDebugger Component Here
import React from 'react';


class YouTubeDebugger extends React.Component {
  constructor(props){
    super(props)
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


  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }


  resolutionClick = () => {
    this.setState(prevState => ({
      ...prevState,
      settings: {
        ...prevState.settings,
        video: {
         ...prevState.settings.video,
         resolution: '720p'
        }
      }
    }))
  }



  render(){
    return(
      <div>
       <button className='bitrate' onClick={this.bitrateClick}>Change Bitrate!</button>
       <button className='resolution' onClick={this.resolutionClick}>Change Resolution!</button>
      </div>
    )
  }
}


export default YouTubeDebugger;
