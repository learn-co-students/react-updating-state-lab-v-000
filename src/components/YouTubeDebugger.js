import React from 'react'

class YouTubeDebugger extends React.Component {
  changeBit = () => {
    this.setState({
      settings:
        Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  changeRes = () => {
    this.setState({
        settings:
        Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {resolution: "720p"})
        })
      })
  }

  constructor(){
    super()

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

  render(){
    return(
      <div>
        <br/>
        <button className="bitrate" onClick={this.changeBit}>Change bitrate</button>
        <button className="resolution" onClick={this.changeRes}>Chage Res</button>
      </div>
    )
  }
}

export default YouTubeDebugger
