// Code YouTubeDebugger Component Here

import React from 'react';

export default class YouTubeDebugger extends React.Component{
	constructor(){
		super();

		this.state =  { errors: [], 
						user: null, 
						settings: 
							{ bitrate: 8, 
							  video: { resolution: '1080p' } } 
		};
	}

	bitRateClick = () =>{
		this.setState({
		  settings: {
		    ...this.state.settings,
		    bitrate: 12,
		  },
		});
	}

	resolutionClick = () => {
		this.setState({
			settings:{
				...this.state.settings,
				video:{
					...this.state.video,
					resolution: '720p'
				}
			}
		})
	}
 

	render(){
		return(
			<div> 
				<button onClick={this.bitRateClick} className="bitrate">bitrate Click me!</button>
				<button onClick={this.resolutionClick} className="resolution">resolution Click me!</button>
			</div>
		);
	}

}