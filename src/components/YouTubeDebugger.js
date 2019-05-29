// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  constructor(props) {
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

  handleBitRate = () => {
  	this.setState({
  		settings: {
  			...this.state.settings,
  			bitrate: 12
  		}
  	})
  }

    handleResolution = () => {
  	this.setState({
  		settings: {
  			...this.state.settings,
  			video: {
	  			resolution: "720p"
  			}
  		}
  	})
  }

  render(){
  	return(
  		<div>
  			<button className='bitrate' onClick={this.handleBitRate}>Change bitrate</button>
	  		<button className='resolution' onClick={this.handleResolution}>Change Resolution</button>
  		</div>
  	)
  }
}
