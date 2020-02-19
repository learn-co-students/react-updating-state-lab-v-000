import React, { Component } from 'react';

class YouTubeDebugger extends Component {

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

    handleResolution = () => {
    	this.setState({
    		settings: {
    			...this.state.settings,
    			video: {
	    			...this.state.settings.video,
	    			resolution: '720p',
	    		}
    		}
    	});
    }

    updateBitrate = () => {
    	this.setState({
    		settings: {
    			...this.state.settings,
    			bitrate: 12,
    		}
    	});
    }

    render(){
        return(
            <div>
            <h2>bitrate: {this.state.settings.bitrate}</h2>
            <h2>resolution: {this.state.settings.video.resolution}</h2>
            <button className='bitrate' onClick={this.updateBitrate}>Bitrate</button>
            <button className='resolution' onClick={this.handleResolution}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger;

