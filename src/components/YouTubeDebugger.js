import React from 'react'


export default class YouTubeDebugger extends React.Component {
	constructor() {
		super();
	 
	  	// Define the initial states:
	  	this.state = {
		  	errors: [], 
		  	user: null, 
			settings: { bitrate: 8, 
				video: { resolution: '1080p' } 
			} 
		}
	}

	bitrateClick = () => {
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
		    	...this.state.video,
		    	resolution: '720p'
		      }
		  	}
		})
	}

	// Update settings.bitrate or settings.video.resolution
	// when related button clicked
	render() {
	    return (
	      <div>
	      	<h3>bitrate: {this.state.settings.bitrate}</h3>
	      	<h3>resolution: {this.state.settings.video.resolution}</h3>
	        <button className='bitrate' onClick={this.bitrateClick}>bitrate</button>
	        <button className='resolution' onClick={this.resolutionClick}>resolution</button>
	      </div>
	    )
	}
}

