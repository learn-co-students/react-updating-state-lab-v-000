// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {


 constructor() {
   super()
   this.state = {
     errors: [],
     user: null,
     settings:
     { bitrate: 8,
       video: { resolution: '1080p' }
      }
    }
  }

  handleClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
      }
    })
    console.log(this.state.settings)
  }

  handleOnClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
        video: {...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
    console.log(this.state.settings)
  }

render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}></button>
        <button className="resolution" onClick={this.handleOnClick}></button>
      </div>
    )
  }
}
