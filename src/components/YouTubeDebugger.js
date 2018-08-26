import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

	constructor () {
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

	updateBitrate = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12,
			},
		});
	}

	updateResolution = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					resolution: '720p'
				}
			}
		})
	}

	render () {
		return (
			<div>
				<button className='bitrate' onClick={this.updateBitrate}>{this.state.settings.bitrate}</button>
				<button className='resolution' onClick={this.updateResolution}>{this.state.settings.video.resolution}</button>
			</div>
			)
	}

}
