const React = require('react')

class YoutubeDebugger extends React.Component {
  constructor() {
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

    this.changeBit = this.changeBit.bind(this)
    
    this.changeRes = this.changeRes.bind(this)
  }
    changeBit() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        })
      })
    }


    
    changeRes() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: {
          resolution: '720p'
        }
        })
      })
    

  }
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.changeBit}>Click here</button>
        <button className='resolution' onClick={this.changeRes}>Click here</button>
      </div>
    )
  }

}

module.exports = YoutubeDebugger