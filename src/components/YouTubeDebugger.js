import React from 'react';

class YouTubeDebugger extends React.Component{
  constructor (){
    super();
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate:8,
          video: {
            resolution: '1080p'}
        }
    };
  }

  handleBitClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video:{
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitClick} />
        <button className='resolution' onClick={this.handleResClick} />
      </div>
    )
  }
}

export default YouTubeDebugger
