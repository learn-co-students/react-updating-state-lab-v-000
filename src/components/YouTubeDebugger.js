import React from 'react';

class YouTubeDebugger extends React.Component {
	constructor(){
		super()

		this.state = {
			errors: [], 
			user: null, 
			settings: { 
				bitrate: 8, 
				video: { resolution: '1080p' 
				} 
			} 
		}
	}

	handleClickBitrate = () =>	{
		this.setState({
			settings: {
				...this.state.settings, 
				bitrate: 12,
			},
		});
	}

	handleClickVideo = () =>	{
		this.setState({
			settings:{
				...this.state.settings,	
					video:{
						...this.state.video,
						resolution: '720p'
					}
			}
		});
	}

	render(){
		return (
			<div>
				<p>{this.state.settings.bitrate}</p>
				<p>{this.state.settings.video.resolution}</p>
				<button className="bitrate" onClick = {this.handleClickBitrate}>Bitrate</button>
				<button className="resolution" onClick = {this.handleClickVideo}>Resolution</button>
			</div>	
		)
	}
}

export default YouTubeDebugger;