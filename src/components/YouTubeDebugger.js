import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

	constructor(){
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

	clickBitrate = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}

	clickRes = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					resolution: '720p'
				}
			}
		})
		console.log(this.state)
	}

	render() {
		return <div>
			<button className="bitrate" onClick={this.clickBitrate}></button>
			<button className="resolution" onClick={this.clickRes}></button>
		</div>
	}
}