// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
	constructor() {
		super();
		this.state = {
			errors: [],
			user: null,
			settings: {
				bitrate: 8,
				video: {resolution: '1080p'}
			}
		}
	}

	bitrateButtonClick = () => {
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}

	resolutionButtonClick = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {resolution: '720p'},
			}
		})
	}

	render() {
		return(
			<div>
				<button className='bitrate' onClick={this.bitrateButtonClick}>
					Update Bitrate
					</button>
				<button className='resolution' onClick={this.resolutionButtonClick}>
					Update Resolution
					</button>
			</div>
			)
		}
	}