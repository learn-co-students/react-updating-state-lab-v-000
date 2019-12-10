// Code YouTubeDebugger Component Here
import React from "react"


class YouTubeDebugger extends React.Component {
  constructor() {
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

  chg = () => {
    //debugger
    //if(c==='bitrate'){
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      })
    //}

  }

  chg2 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }



  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.chg}>bitrate</button>
        <button className='resolution' onClick={this.chg2}>resolution</button>
      </div>

    )
  }


}

export default YouTubeDebugger
