// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {
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

	handleBitrate = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		}, () => console.log('bitrate updated: ', this.state))
	}

	handleResolution = () => {
		this.setState({
			settings: {
				...this.state.settings,
					video: {
						...this.state.video,
						resolution: '720p'}
			}
		}, () => console.log('resolution updated: ', this.state))
	}

	render() {
		return (
			<div>
				<button
					className='bitrate'
					onClick={this.handleBitrate}
				>
					bitrate
				</button>
				<button
					className='resolution'
					onClick={this.handleResolution}
				>
					resolution
				</button>
			</div>
		)
	}
}