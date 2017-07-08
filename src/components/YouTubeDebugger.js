// Code YouTubeDebugger Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class YouTubeDebugger extends React.Component {
	constructor(props){
		super(props)
		this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
	}

	changeResolution = () => {
		this.setState({
				...this.state,
			settings: {
				...this.state.settings,
				video: {
					resolution: "720p"
				}
			}
		})
	}

	changeBitrate = () => {
		this.setState({
				...this.state,
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		})
	}

	render(){
		return(
			<div>
				<button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
				<p>Bitrate: {this.state.settings.bitrate}</p>
				<button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
				<p>Resolution: {this.state.settings.video.resolution}</p>
			</div>
			)
	}
}

