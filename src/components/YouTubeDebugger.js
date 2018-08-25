// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {

	constructor(){
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

	bitrateChange = () => {
		this.setState({
			settings: {
				bitrate: 12,
				video : {
					resolution: this.state.settings.video.resolution
				}
			}
		})
	}

	resolutionChange = () => {
		this.setState({
			settings: {
				bitrate: this.state.settings.bitrate,
				video : {
					resolution: '720p'
				}
			}
		})
		
	}

	render () {
	 return([
	 	<div>
		<button onClick={this.bitrateChange} className="bitrate">Bitrate {this.state.settings.bitrate}</button>,
		<button onClick={this.resolutionChange} className="resolution">Resolution {this.state.settings.video.resolution}</button>
		</div>
		])

	}
}