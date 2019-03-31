import React from 'react';

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
  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state));
  }
  handleClickTwo = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, () => console.log(this.state));
  }
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleClick}/>
        <button className='resolution' onClick={this.handleClickTwo}/>
      </div>
    )
  }
}

export default YouTubeDebugger;
