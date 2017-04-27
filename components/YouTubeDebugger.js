import React from 'react'

export default class YouTubeDebugger extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			errors: [],
			user: null,
			settings:{
				bitrate: 8,
				video: {
					resolution: '1080p'
				}
			}
		}
		this.bitrateChange = this.bitrateChange.bind(this)
		this.resolutionChange = this.resolutionChange.bind(this)
	}
	bitrateChange(){
		this.setState({
			settings: Object.assign({}, this.state.settings, {bitrate: 12})
	})
	}
	resolutionChange(){
		this.setState({settings: Object.assign({}, this.state.settings, {
			video: Object.assign({resolution: "720p"})
		})
	})
	}
	render(){
		return(
			<div>
			<button className='bitrate' onClick={this.bitrateChange}>Set Bitrate</button>
			<button className='resolution' onClick={this.resolutionChange}>Set Resolution</button>
			</div>
		)
	}
}