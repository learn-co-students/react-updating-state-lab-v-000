import React from 'react';

export default class YouTubeDebugger extends React.Component {
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

  handleClick = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
      }
    })
  }

  resolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.handleClick}>Click</button>
        <button className='resolution' onClick={this.resolutionClick}>Resolution</button>
      </div>
    )
  }
}