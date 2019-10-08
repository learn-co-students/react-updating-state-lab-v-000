import React from 'react'

export default class YouTubeDebugger extends React.Component {

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

	setBitrate = () => {
		this.setState({
			settings: {
				...this.state.settings, 
				bitrate: 12
			}
		})
	}

	setResolution = () => {
		this.setState({
			settings: {
				...this.state.settings,
				video: {
					...this.state.settings.video,
					resolution: '720p'
				}
			}
		})
	}

	render(){
		debugger
		return (
			<div>
				<button className='bitrate' onClick={this.setBitrate}>
					Change bitrate
				</button>
				<br></br>
				<br></br>
				<button className='resolution' onClick={this.setResolution}>
					Change resolution
				</button>
			</div>
		)
	}   			
}