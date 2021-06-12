import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(props) {
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

    handleClick = (event) =>{
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                  resolution: '720p'
              }
            }
          })   
    }

    handleBit = (event) =>{
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          })
    }

  render() {
    return (
    <div>
      <button className="bitrate" onClick={this.handleBit}/>
      <button className="resolution" onClick={this.handleClick}/>
    </div>
    )
  }
}
