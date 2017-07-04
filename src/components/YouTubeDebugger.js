import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.handleBitrate = this.handleBitrate.bind(this);
    this.handleResolution = this.handleResolution.bind(this);

    this.state = {
    	errors: [], 
    	user: null, 
    	settings: { 
    		bitrate: 8, 
    		video: { resolution: '1080p' } 
    	} 
    }
  }

  handleBitrate() {
  	this.setState({
  		settings: Object.assign({}, this.state.settings, {
  			bitrate: 12
  		})
  	})
  }

  handleResolution() {
  	this.setState({
  		settings: Object.assign({}, this.state.settings, {
  			video: Object.assign({}, this.state.video, {
  				resolution: '720p'
  			})
  		})
  	})
  }

  render() {
  	return (
  		<div>
  		<button className="bitrate" onClick={this.handleBitrate}></button>
  		<button className="resolution" onClick={this.handleResolution}></button>
  		</div>
  		)
  }

   
}