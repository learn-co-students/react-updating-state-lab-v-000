// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component {
	constructor() {
		super();

		this.state = {
			 errors: [], 
			 user: null, 
			 settings: { 
			 	bitrate: 8, 
			 	video: { 
			 		resolution: '1080p' } } 
		};
	};

	handleBitrate = () => {
		this.setState({
			errors: this.state.errors,
			user: this.state.user,
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	};

	handleResolution = () => {
		this.setState({
			errors: this.state.errors,
			user: this.state.user,
			settings: {
				...this.state.settings,
				video: {
					...this.state.video,
					resolution: '720p'
				}
			}
		})
	};

	render() {
		return (
			<div>
				<button className="bitrate" onClick={this.handleBitrate}>bitrate</button>
				<button className="resolution" onClick={this.handleResolution}>resolution</button>
			</div>
		)
	}

}