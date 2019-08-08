// Code YouTubeDebugger Component Here
import React, {Component} from 'react'; 
class YouTubeDebugger extends Component{
	constructor(props){
		super(props);
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

 	changeBitrate(e){
		this.setState({
			settings: {
				...this.state.settings,
				bitrate: 12
			}
		});
	}

	changeResolution(e){
		this.setState({
			settings: {
				...this.state.settings,
				video: { resolution: '720p' } 
			}
		})
	}
	render(){
		return (
			<div id="buttons">
				<button className='bitrate' onClick={this.changeBitrate.bind(this)}>Change Bitrate</button>
				<button className='resolution' onClick={this.changeResolution.bind(this)}>Change Resolution</button>
			</div>
		);
	}
}

export default YouTubeDebugger
