import React from 'react';

export default class YouTubeDebugger extends React.Component {
	constructor(){
		super();

		this.state = {
			errors: [],  
			settings: { 
				bitrate: 8, 
				video: { 
					resolution: '1080p' 
				}
			},
			user: null
		}
	}

	handleClickBitrate = () => {
		this.setState({
			settings: {
				...this.state.settings, 
				bitrate: 12
			}
		})
	}

	handleClickResolution = () => {
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

	render(){
		return (
			<div>
				<button className="bitrate" onClick={this.handleClickBitrate}>Change Bitrate</button>
				<button className="resolution" onClick={this.handleClickResolution}>Change Resolution</button>
			</div>
		)
	}
}